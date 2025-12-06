import express from "express";
import { ENV } from "./config/env.js";
import { connetDB } from "./config/db.js";

const app = express();

connetDB();

app.get("/", (req, res) => {
    res.send("Hello from server");
})

app.listen(ENV.PORT, () => {
    console.log("server is UP & running on PORT:", ENV.PORT)
    console.log(`http://localhost:${ENV.PORT}`)
})