# InfusionSur Backend API

API REST para la gestión de clientes, productos y pedidos de InfusionSur,
empresa chilena de venta online de tés premium e infusiones naturales.

## Tecnologías utilizadas

- Node.js + Express
- MongoDB Atlas + Mongoose
- Render (despliegue)
- dotenv, cors, nodemon

## URL de producción

https://infusionsur-backend.onrender.com

## Estructura del proyecto
```bash
src/
├── config/
│   └── db.js
├── controllers/
│   ├── clienteController.js
│   ├── productoController.js
│   └── pedidoController.js
├── models/
│   ├── Cliente.js
│   ├── Producto.js
│   └── Pedido.js
├── routes/
│   ├── clienteRoutes.js
│   ├── productoRoutes.js
│   └── pedidoRoutes.js
├── middlewares/
│   ├── errorHandler.js
│   └── notFound.js
├── app.js
└── server.js
```

## Instalación local

```bash
git clone https://github.com/tuusuario/infusionsur-backend.git
cd infusionsur-backend
npm install
```

## crear el archivo .env en la raiz
* Crear un archivo llamado: `.env` en la Raiz, luego
dentro del archivo `.env`, hay que añadir las siguientes lineas:

```bash
PORT=3000
MONGODB_URI=tu_uri_de_mongodb_atlas
FRONTEND_URL=*
```

## Comando para interactuar con la base de datos
para ejecutar el siguiente comando, se debe abrir una terminal en visual studio
(consola command prompt):

```bash
npm run dev
```

## Endpoints disponibles

### Clientes
| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | /api/clientes | Obtener todos los clientes |
| GET | /api/clientes/:id | Obtener cliente por ID |
| POST | /api/clientes | Crear nuevo cliente |
| PUT | /api/clientes/:id | Actualizar cliente |
| DELETE | /api/clientes/:id | Eliminar cliente |

### Productos
| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | /api/productos | Obtener todos los productos |
| GET | /api/productos/:id | Obtener producto por ID |
| POST | /api/productos | Crear nuevo producto |
| PUT | /api/productos/:id | Actualizar producto |
| DELETE | /api/productos/:id | Eliminar producto |

### Pedidos
| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | /api/pedidos | Obtener todos los pedidos |
| GET | /api/pedidos/:id | Obtener pedido por ID |
| POST | /api/pedidos | Crear nuevo pedido |
| PUT | /api/pedidos/:id | Actualizar pedido |
| DELETE | /api/pedidos/:id | Eliminar pedido |

## Colecciones en MongoDB Atlas

### Cliente
- nombre, email, telefono
- direccion (subdocumento): calle, ciudad, region
- activo, timestamps

### Producto
- sku, nombre, descripcion
- categoria: te / infusion / accesorio
- precio, stock, activo, timestamps

### Pedido
- cliente (referencia ObjectId)
- items (array): producto, cantidad, precioUnitario
- total, estado, direccionEnvio, timestamps

## Asignatura

TI3032 - Bases de Datos No Estructuradas
Ingeniería en Ciberseguridad - INACAP