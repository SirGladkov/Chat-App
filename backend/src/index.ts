import express from "express";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js"
import messagesRoutes from "./routes/message.route.js"

import dotenv from "dotenv"
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cookieParser()); // для обработки cookie
app.use(express.json()); // для разбора application/json

app.use("/api/auth", authRoutes)
app.use("/api/messages", messagesRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});