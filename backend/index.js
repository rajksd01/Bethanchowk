import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
const app = express();
// importing files
import conn from "./connection.js";
import authRoutes from "./route/auth.js";

const router = express.Router();

// setting up dotenv
import "dotenv/config";
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(express.json({ limit: "16KB" }));
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express.static("public "));
app.use(express.urlencoded({ extended: true, limit: "16KB" }));
app.use(router);
app.use("/api", authRoutes);

app.get("/", (req, res) => {
  res.send("Chalyooooooooo");
});

app.listen(process.env.PORT, () => {
  conn;
  console.log("connected to server");
});
