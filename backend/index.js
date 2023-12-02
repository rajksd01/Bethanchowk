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
  origin: (origin, callback) => {
    const allowedOrigins = ['https://bethanchowk-frontend.vercel.app'];
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://bethanchowk-frontend.vercel.app');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
app.use(express.json({ limit: "16KB" }));
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express.static("public "));
app.use(express.urlencoded({ extended: true, limit: "16KB" }));
app.use(router);
app.use("/api", authRoutes);
app.options('*', cors(corsOptions));


app.get("/", (req, res) => {
  res.send("Chalyooooooooo");
});

app.listen(process.env.PORT, () => {
  conn;
  console.log("connected to server");
});
