const ErrorLogService = require("../services/errorLogService")

class ErrorLogController {
    constructor(){
        this.errorLogervice = new ErrorLogService 
    }

    async get(req,res){
        const result = await this.errorLogervice.get()
        res.json(result)
    }

    async getPaginate(req,res){
        const query = req.query;
        const result = await this.errorLogervice.getPaginate(query)
        res.json(result)
    }

    async getById(req,res){
        const id = req.params.pid
        const result = await this.errorLogervice.getById(id)
        res.json(result)
    }

    async post(req,res){
        const body = req.body
        const result = await this.errorLogervice.post(body)
        res.json(result)
    }

    async put(req,res){
        const id = req.params.pid
        const body = req.body
        const result = await this.errorLogervice.put(id,body)
        res.json(result)
    }

    async delete(req,res){
        const id = req.params.pid
        const result = await this.errorLogervice.delete(id)
        res.json(result)
    }

}

module.exports = ErrorLogController;