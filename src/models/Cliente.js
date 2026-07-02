import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^\S+@\S+\.\S+$/
    },
    telefono: {
      type: String,
      required: false
    },
    direccion: {
      calle: { type: String, required: true },
      ciudad: { type: String, required: true },
      region: { type: String, required: true },
      codigoPostal: { type: String, required: false }
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

const Cliente = mongoose.model("Cliente", clienteSchema);
export default Cliente;