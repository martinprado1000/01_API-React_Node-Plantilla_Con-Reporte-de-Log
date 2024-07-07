const {Router} = require("express")

const ErrorLogController = require("../controllers/errorLogController");

const errorlogRouter = new Router()

const errorlogController = new ErrorLogController();

errorlogRouter.get("/errorlog", errorlogController.get.bind(errorlogController))
errorlogRouter.get("/errorlogPaginate", errorlogController.getPaginate.bind(errorlogController))
errorlogRouter.get("/errorlog/:pid", errorlogController.getById.bind(errorlogController))
errorlogRouter.post("/errorlog", errorlogController.post.bind(errorlogController))
errorlogRouter.put("/errorlog/:pid", errorlogController.put.bind(errorlogController))
errorlogRouter.delete("/errorlog/:pid", errorlogController.delete.bind(errorlogController))

module.exports = errorlogRouter

