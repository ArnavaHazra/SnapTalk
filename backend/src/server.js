import express from "express";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";

import { ENV } from "./config/env.js";
import { connetDB } from "./config/db.js";

import { arcjetMiddleware } from "./middleware/arcjet.middleware.js";

import userRoutes from "./routes/user.route.js"
import postRoutes from "./routes/post.route.js"
import commentRoutes from "./routes/comment.route.js"
import notificationRoutes from "./routes/notification.route.js"



const app = express();

app.use(cors());
app.use(express.json());

app.use(clerkMiddleware());
app.use(arcjetMiddleware);

app.get("/", (req, res) => {
    res.send("Hello from server");
})

app.use("/api/users", userRoutes);
app.use("/api/post", postRoutes);
app.use("/api/comment", commentRoutes);
app.use("/api/notification", notificationRoutes);



//error handling middleware
app.use((err, req, res, next) => {
    console.error("Unhandled error:", err);
    res.status(500).json({ error: err.message || "Internal server error" });
});



const startServer = async () => {
    try {
        await connetDB();
        console.log("Mongo_db connected!");

        //listen for local dev
        if(ENV.NODE_ENV !== "production") {
            app.listen( ENV.PORT, () => {
            console.log("Server is running on PORT:", ENV.PORT)
            console.log(`http://localhost:${ENV.PORT}`)
            })
        }

    } catch (error) {
        console.error("Failed to start server", error.message);
        process.exit(1);
    }
}

startServer();

//export for deployment
export default app;