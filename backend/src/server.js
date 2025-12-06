import express from "express";
import { ENV } from "./config/env.js";
import { connetDB } from "./config/db.js";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello from server");
})

const startServer = async () => {
    try {
        await connetDB();
        console.log("Mongo_db connected!");

        app.listen( ENV.PORT, () => {
        console.log("Server is running on PORT:", ENV.PORT)
        console.log(`http://localhost:${ENV.PORT}`)
        })
    } catch (error) {
        console.error("Failed to start server", error.message);
        process.exit(1);
    }
}

startServer();