import Pedido from "../models/Pedido.js";

// Obtener todos los pedidos
export const obtenerPedidos = async (req, res, next) => {
  try {
    const pedidos = await Pedido.find()
      .populate("cliente", "nombre email telefono")
      .populate("items.producto", "nombre sku precio");
    res.status(200).json(pedidos);
  } catch (error) {
    next(error);
  }
};

// Obtener pedido por ID
export const obtenerPedidoPorId = async (req, res, next) => {
  try {
    const pedido = await Pedido.findById(req.params.id)
      .populate("cliente", "nombre email telefono")
      .populate("items.producto", "nombre sku precio");
    if (!pedido) {
      return res.status(404).json({ mensaje: "Pedido no encontrado" });
    }
    res.status(200).json(pedido);
  } catch (error) {
    next(error);
  }
};

// Crear pedido
export const crearPedido = async (req, res, next) => {
  try {
    const pedido = await Pedido.create(req.body);
    res.status(201).json(pedido);
  } catch (error) {
    next(error);
  }
};

// Actualizar pedido
export const actualizarPedido = async (req, res, next) => {
  try {
    const pedido = await Pedido.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!pedido) {
      return res.status(404).json({ mensaje: "Pedido no encontrado" });
    }
    res.status(200).json(pedido);
  } catch (error) {
    next(error);
  }
};

// Eliminar pedido
export const eliminarPedido = async (req, res, next) => {
  try {
    const pedido = await Pedido.findByIdAndDelete(req.params.id);
    if (!pedido) {
      return res.status(404).json({ mensaje: "Pedido no encontrado" });
    }
    res.status(200).json({ mensaje: "Pedido eliminado correctamente" });
  } catch (error) {
    next(error);
  }
};