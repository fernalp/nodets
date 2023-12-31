import express from "express";
import cors from "cors";
import "dotenv/config";
import { router } from "./routes";
import { dbConnect } from "./config/mongo";
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json())
app.use(router);

dbConnect().then(() => {
    console.log("Connect DB")
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});