// Factory: seleccionamos que tipo de DAO vamos a usar segun la persisten elegida.

const AuditLogDAOMongo = require("../DAOs/auditLogDAOMongo")
//const AuditLogDAOSql = require("../DAOs/auditlogDAOSql")

const persistenceMapper = {
    mongo: () => new AuditLogDAOMongo(),
    //sql: ()=> new AuditLogDAOSql(),
    default: ()=> new AuditLogDAOMongo(),
}

module.exports = (persistence)=>{
    //console.log(persistence)
    const persistenceFn = persistenceMapper[persistence] || persistenceMapper.default  // Si no se pasa ninguna persistencia usamos la default. Para pasarle un valor dinamico a un objeto lo hago entre [].
    const dao = persistenceFn();
    return dao
}