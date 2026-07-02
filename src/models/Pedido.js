import mongoose from "mongoose";

const pedidoSchema = new mongoose.Schema(
  {
    cliente: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cliente",
      required: true
    },
    items: [
      {
        producto: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Producto",
          required: true
        },
        cantidad: {
          type: Number,
          required: true,
          min: 1
        },
        precioUnitario: {
          type: Number,
          required: true,
          min: 0
        }
      }
    ],
    total: {
      type: Number,
      required: true,
      min: 0
    },
    estado: {
      type: String,
      required: true,
      enum: ["pendiente", "confirmado", "despachado", "entregado", "cancelado"],
      default: "pendiente"
    },
    direccionEnvio: {
      calle: { type: String, required: true },
      ciudad: { type: String, required: true },
      region: { type: String, required: true }
    }
  },
  {
    timestamps: true
  }
);

const Pedido = mongoose.model("Pedido", pedidoSchema);
export default Pedido;