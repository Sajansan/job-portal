import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Job Portal API is running 🚀" });
});
app.get("/test-db", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT 1+1 AS result");
    res.json({ message: "DB Connected ✅", result: rows[0].result });
  } catch (err) {
    res.status(500).json({ message: "DB Connection Failed ❌", error: err.message });
  }
});


export default app;
