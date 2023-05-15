import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import colors from "colors";
import connectDB from "./config/db.js";
import UserRouter from "./routes/user.route.js";
import CategoryRouter from "./routes/category.route.js";
import ProductRouter from "./routes/product.route.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT ||6000;

// const MONGO_URL = "mongodb://127.0.0.1";s
// const MONGO_URL = process.env.MONGO_URL;

//Database connection
connectDB();

//middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

// Routers
app.use("/api/user", UserRouter);
app.use("/api/category", CategoryRouter);
app.use("/api/products", ProductRouter);

//Home
app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩 <h1>Welcome to MERN App<h1>");
});

app.listen(PORT, () =>
  console.log(`Server Running on port ${PORT}`)
);
