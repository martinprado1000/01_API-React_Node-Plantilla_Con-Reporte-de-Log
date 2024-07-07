const {Router} = require("express")

const { productValidator } = require("../validators/productValidator");
const passportCallMiddleware = require("../middleware/passportCallMiddleware")
const authorizationMiddleware = require("../middleware/authorizationMiddleware")

const ProductsController = require("../controllers/productsController");

const productsRouter = new Router()

const productsController = new ProductsController();

productsRouter.get("/products", productsController.get.bind(productsController))
productsRouter.get("/productsPaginate", productsController.getPaginate.bind(productsController))
productsRouter.get("/products/:pid", productsController.getById.bind(productsController))
productsRouter.post("/products", passportCallMiddleware('jwt', { session: false}), authorizationMiddleware('routeAdminProtected'), productValidator, productsController.post.bind(productsController))
productsRouter.put("/products/:pid", passportCallMiddleware('jwt', { session: false}), authorizationMiddleware('routeAdminProtected'), productsController.put.bind(productsController))
productsRouter.delete("/products/:pid", passportCallMiddleware('jwt', { session: false}), authorizationMiddleware('routeAdminProtected'), productsController.delete.bind(productsController))

module.exports = productsRouter

