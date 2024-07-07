const AuditLogService = require("../services/auditLogService")

class AuditLogController {
    constructor(){
        this.auditLogService = new AuditLogService 
    }

    async get(req,res){
        console.log("hola")
        const result = await this.auditLogService.get()
        console.log(result)
        res.json(result)
    }

    async getPaginate(req,res){
        const query = req.query;
        const result = await this.auditLogService.getPaginate(query)
        res.json(result)
    }

    async getById(req,res){
        const id = req.params.pid
        const result = await this.auditLogService.getById(id)
        res.json(result)
    }

    async post(req,res){
        const body = req.body
        const result = await this.auditLogService.post(body)
        res.json(result)
    }

    async put(req,res){
        const id = req.params.pid
        const body = req.body
        const result = await this.auditLogService.put(id,body)
        res.json(result)
    }

    async delete(req,res){
        const id = req.params.pid
        const result = await this.auditLogService.delete(id)
        res.json(result)
    }

}

module.exports = AuditLogController;