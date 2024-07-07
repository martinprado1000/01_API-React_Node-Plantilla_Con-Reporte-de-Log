//const AuditLogRepository = require("../repositories/auditLogRepository");
const mongoose = require("mongoose");

// Funcion para validar si los id son validos para mongo
const isValid = (id) => {
  return mongoose.Types.ObjectId.isValid(id);
};

class AuditLogService {
  constructor() {
    //this.AuditLogRepository = new AuditLogRepository();
  }

  async get() {
    try {
      const result = await this.AuditLogRepository.get();
      if (!result || result == "") {
        return { status: 404, data: "No existen auditlog" };
      }
      return { status: 200, data: result };
    } catch (e) {
      console.log(e);
      return { status: 500, data: "Audit inesperado en el sistema" };
    }
  }

  async getPaginate() {
    try {
      const result = await this.AuditLogRepository.getPaginate();
      if (!result || result == "") {
        return { status: 404, data: "No existen auditlog" };
      }
      return { status: 200, data: result };
    } catch (e) {
      console.log(e);
      return { status: 500, data: "Audit inesperado en el sistema" };
    }
  }

  async getById(id) {
    if (!isValid(id)) {
      return { status: 404, data: "ID de auditlog inválido" };
    }
    try {
      const result = await this.AuditLogRepository.getById(id);
      if (!result) {
        return { status: 404, data: "AuditLog no encontrado" };
      }
      //console.log(result)
      return { status: 200, data: result };
    } catch (e) {
      console.log(e);
      return { status: 500, data: "Audit inesperado en el sistema" };
    }
  }

  async post(body) {
    try {
      const result = await this.AuditLogRepository.post(body);
      //console.log(result)
      return { status: 201, data: "AuditLog ingresado correctamente" };
    } catch (e) {
      console.log(e);
      return { status: 500, data: "Audit inesperado en el sistema" };
    }
  }

  async put(id, body) {
    if (!isValid(id)) {
      return { status: 404, data: "ID de auditlog inválido" };
    }
    try {
      const result = await this.AuditLogRepository.put(id, body);
      //console.log(result)
      if (!result) {
        return { status: 404, data: "AuditLog no encontrado" };
      }
      return { status: 201, data: "AuditLog editado correctamente" };
    } catch (e) {
      console.log(e);
      return { status: 500, data: "Audit inesperado en el sistema" };
    }
  }

  async delete(id) {
    if (!isValid(id)) {
      return { status: 404, data: "ID de auditlog inválido" };
    }
    try {
      let carts = await this.CartsRepository.get2();
      console.log(carts)
      // Elimino el auditlog de todos los carritos
      carts.map((cart) => {
        cart.auditlog = cart.auditlog.filter((prod) => prod?.product != id);
        this.CartsRepository.save(cart);
        return cart;
      });

      const result = await this.AuditLogRepository.delete(id);

      return { status: 204, data: "AuditLog eliminado correctamente" };
    } catch (e) {
      console.log(e);
      return { status: 500, data: "Audit inesperado en el sistema" };
    }
  }
}

module.exports = AuditLogService;
