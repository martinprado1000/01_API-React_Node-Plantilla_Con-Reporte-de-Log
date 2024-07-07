//Aparte de modificar el dato id, tambien sacamos los datos createdAt y updatedAt porque son datos irrelevantes para el cliente.

class ErrorLogDTO {
  constructor(errorLog) {
    this.id = errorLog._id || errorLog.id; // Esto lo que hace es que si el dato vine distinto segun la persistencia estemos usando no importa porque lo vamos retornar siempre igual.
    this.level = errorLog.level;
    this.method = errorLog.method;
    this.url = errorLog.url;
    this.user = errorLog.user;
    this.errorLogDetail = errorLog.errorLogDetail;
    this.createdAt = errorLog.createdAt
    this.updatedAt = errorLog.updatedAt
  }
}

module.exports = ErrorLogDTO;