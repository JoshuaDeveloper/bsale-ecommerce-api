import express from "express";
import morgan from "morgan";
import productsRoutes from "./routes/products.routes.js";
import categoriesRoutes from "./routes/categories.routes.js";
import cors from "cors";

const app = express();

//Settings
const PORT = process.env.PORT || 8000;
app.set("port", PORT);

//Middlewares

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/api/products", productsRoutes);
app.use("/api/categories", categoriesRoutes);

export default app;
