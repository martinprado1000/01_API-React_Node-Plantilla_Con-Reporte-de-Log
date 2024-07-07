//Aparte de modificar el dato id, tambien sacamos los datos createdAt y updatedAt porque son datos irrelevantes para el cliente.

class AuditLogDTO {
  constructor(auditLog) {
    this.id = auditLog._id || auditLog.id; // Esto lo que hace es que si el dato vine distinto segun la persistencia estemos usando no importa porque lo vamos retornar siempre igual.
    this.level = auditLog.level;
    this.method = auditLog.method;
    this.url = auditLog.url;
    this.user = auditLog.user;
    this.auditLogDetail = auditLog.auditLogDetail;
    this.createdAt = auditLog.createdAt
    this.updatedAt = auditLog.updatedAt
  }
}

module.exports = AuditLogDTO;
