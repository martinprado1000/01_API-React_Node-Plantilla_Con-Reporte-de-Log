const {Router} = require("express")

const AuditLogController = require("../controllers/auditLogController");

const auditlogRouter = new Router()

const auditlogController = new AuditLogController();

auditlogRouter.get("/auditlog", auditlogController.get.bind(auditlogController))
auditlogRouter.get("/auditlogPaginate", auditlogController.getPaginate.bind(auditlogController))
auditlogRouter.get("/auditlog/:pid", auditlogController.getById.bind(auditlogController))
auditlogRouter.post("/auditlog", auditlogController.post.bind(auditlogController))
auditlogRouter.put("/auditlog/:pid", auditlogController.put.bind(auditlogController))
auditlogRouter.delete("/auditlog/:pid", auditlogController.delete.bind(auditlogController))

module.exports = auditlogRouter

