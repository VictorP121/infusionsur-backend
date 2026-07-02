import Cliente from "../models/Cliente.js";

// Obtener todos los clientes
export const obtenerClientes = async (req, res, next) => {
  try {
    const clientes = await Cliente.find();
    res.status(200).json(clientes);
  } catch (error) {
    next(error);
  }
};

// Obtener cliente por ID
export const obtenerClientePorId = async (req, res, next) => {
  try {
    const cliente = await Cliente.findById(req.params.id);
    if (!cliente) {
      return res.status(404).json({ mensaje: "Cliente no encontrado" });
    }
    res.status(200).json(cliente);
  } catch (error) {
    next(error);
  }
};

// Crear cliente
export const crearCliente = async (req, res, next) => {
  try {
    const cliente = await Cliente.create(req.body);
    res.status(201).json(cliente);
  } catch (error) {
    next(error);
  }
};

// Actualizar cliente
export const actualizarCliente = async (req, res, next) => {
  try {
    const cliente = await Cliente.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!cliente) {
      return res.status(404).json({ mensaje: "Cliente no encontrado" });
    }
    res.status(200).json(cliente);
  } catch (error) {
    next(error);
  }
};

// Eliminar cliente
export const eliminarCliente = async (req, res, next) => {
  try {
    const cliente = await Cliente.findByIdAndDelete(req.params.id);
    if (!cliente) {
      return res.status(404).json({ mensaje: "Cliente no encontrado" });
    }
    res.status(200).json({ mensaje: "Cliente eliminado correctamente" });
  } catch (error) {
    next(error);
  }
};