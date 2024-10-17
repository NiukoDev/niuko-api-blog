import express from "express";
import morgan from "morgan";
import cors from "cors";

import { ORIGIN } from "./config.js";

const app = express();

app.use(
  cors({
    origin: ORIGIN,
    credentials: true,
  })
);

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api", (req, res) => res.json({ message: "API con Express" }));

app.use((err, req, res, next) => {
  res.status(500).json({
    status: "ERROR",
    error: err,
    message: err.message,
  });
});

export default app;