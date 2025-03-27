const express = require("express");

const productRouter = require("./products.routes");
const userRouter = require("./users.routes");
const clientRouter = require("./clients.routes");
const categoriesRouter = require("./categories.routes");

function routerApi(app) {

const router = express.Router();
app.use('/api/v1', router);//es un endpoint maestro, se hace de esta forma, para mantener las versiones vigentes en caso de que hayan cambiado algunas rutas, se haria con una v2 por ejemplo, entonces los clientes que usan la ruta v1 no sufren los cambios

router.use("/products", productRouter)
router.use("/users", userRouter)
router.use("/clients", clientRouter)
router.use("/categories", categoriesRouter)

}

module.exports = routerApi;
