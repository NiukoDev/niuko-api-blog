// Librerías
import express from "express";
import morgan from "morgan";
import cors from "cors";

// Variables de entorno
import { ORIGIN_BLOG, ORIGIN_DASHBOARD } from "./config.js";

// Rutas
import category from "./routes/category/routes.js"
import comment from "./routes/comment/routes.js"
import post from "./routes/post/routes.js"
import user from "./routes/user/routes.js"
import email from "./routes/email/routes.js"

const app = express();

app.use(
  cors({
    origin: [
      ORIGIN_BLOG,
      ORIGIN_DASHBOARD,
    ],
    credentials: true,
  })
);

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api", (req, res) => res.json({ message: "API con Express" }));

app.use("/api", category);
app.use("/api", comment);
app.use("/api", post);
app.use("/api", user);
app.use("/api", email);

app.use((err, req, res, next) => {
  res.status(500).json({
    status: "ERROR",
    error: err,
    message: err.message,
  });
});

export default app;