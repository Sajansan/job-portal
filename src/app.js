import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import companyRoutes from "./routes/companyRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/companies", companyRoutes);

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Job Portal API running 🚀" });
});

export default app;
