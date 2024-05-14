import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/Auth.route.js";
import ConnectToMongoDB from "./database/ConnectToMongodb.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()) // to parse the incoming request with JSON payloads (from req.body)
app.use("/api/auth", authRoutes);


app.listen(PORT, () => {
    ConnectToMongoDB()
  console.log(`server running on port ${PORT}`);
});
