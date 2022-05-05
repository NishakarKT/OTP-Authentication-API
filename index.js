import dotenv from "dotenv";
dotenv.config();

import express from "express";
import http from "http";
import cors from "cors";
import Router from "./routes.js";

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());
app.use(Router);

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => console.log("Listening on PORT: " + PORT));