import express from "express";
import cors from "cors";
import { connectDB } from "./connectDB.js";
const port = 3000;
const app = express();
app.use(cors());
app.use(express.json());
connectDB();

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
