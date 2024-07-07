const mongoose = require("mongoose");
const logger = require("../utils/logger")
const ErrorLogRepository = require("../repositories/errorLogRepository");

const now = new Date();
const formattedDate = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;


// Funcion para validar si los id son validos para mongo
const isValid = (id) => {
  return mongoose.Types.ObjectId.isValid(id);
};

class ErrorLogService {
  constructor() {
    this.ErrorLogRepository = new ErrorLogRepository();
  }

  async get() {
    try {
      const result = await this.ErrorLogRepository.get();
      if (!result || result == "") {
        return { status: 404, data: "No existen errorlog" };
      }
      return { status: 200, data: result };
    } catch (e) {
      console.log(e);
      return { status: 500, data: "Error inesperado en el sistema" };
    }
  }


  async getById(id) {
    if (!isValid(id)) {
      return { status: 404, data: "ID de errorlog inválido" };
    }
    try {
      const result = await this.ErrorLogRepository.getById(id);
      if (!result) {
        return { status: 404, data: "ErrorLog no encontrado" };
      }
      //console.log(result)
      return { status: 200, data: result };
    } catch (e) {
      console.log(e);
      return { status: 500, data: "Error inesperado en el sistema" };
    }
  }

  async post(body) {
    try {
      console.log(body)
      //const result = await this.ErrorLogRepository.post(body);
      logger.info(`Peticion: %%%, a la url: &&&& `)
      //console.log(result)
      return { status: 201, data: "ErrorLogggg ingresado correctamente" };
    } catch (e) {
      console.log(e);
      return { status: 500, data: "Error inesperado en el sistema" };
    }
  }



}

module.exports = ErrorLogService;
