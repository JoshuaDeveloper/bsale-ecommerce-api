import express from "express";
import morgan from "morgan";
import productoRoutes from "./routes/products.routes.js";

const app = express();
import cors from "cors";
//Settings
app.set("port", 8000);

//Middlewares

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/api/products", productoRoutes);

export default app;
