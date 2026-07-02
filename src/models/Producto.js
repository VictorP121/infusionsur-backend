import mongoose from "mongoose";

const productoSchema = new mongoose.Schema(
  {
    sku: {
      type: String,
      required: true,
      unique: true
    },
    nombre: {
      type: String,
      required: true
    },
    descripcion: {
      type: String,
      required: false
    },
    categoria: {
      type: String,
      required: true,
      enum: ["te", "infusion", "accesorio"]
    },
    precio: {
      type: Number,
      required: true,
      min: 0
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
      default: 0
    },
    activo: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
);

const Producto = mongoose.model("Producto", productoSchema);
export default Producto;