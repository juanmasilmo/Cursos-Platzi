const productRouter = require("./products.routes");
const userRouter = require("./user.routes");
const clientRouter = require("./clients.routes");



function routerApi(app) {
  app.use("/products", productRouter)
  app.use("/users", userRouter)
  app.use("/clients", clientRouter)

}

module.exports = routerApi;
