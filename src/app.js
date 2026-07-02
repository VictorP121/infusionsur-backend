import express from "express";
import cors from "cors";
import clienteRoutes from "./routes/clienteRoutes.js";
import productoRoutes from "./routes/productoRoutes.js";
import pedidoRoutes from "./routes/pedidoRoutes.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { notFound } from "./middlewares/notFound.js";

const app = express();

// Middlewares globales
app.use(cors({
  origin: process.env.FRONTEND_URL || "*"
}));
app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
  res.json({ mensaje: "API InfusionSur funcionando correctamente" });
});

// Rutas
app.use("/api/clientes", clienteRoutes);
app.use("/api/productos", productoRoutes);
app.use("/api/pedidos", pedidoRoutes);

// Middlewares de error
app.use(notFound);
app.use(errorHandler);

export default app;