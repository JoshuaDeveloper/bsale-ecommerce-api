import express from "express";
import morgan from "morgan";
import productsRoutes from "./routes/products.routes.js";
import cors from "cors";

const app = express();

//Settings
app.set("port", 8080);

//Middlewares

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/api/products", productsRoutes);

export default app;
