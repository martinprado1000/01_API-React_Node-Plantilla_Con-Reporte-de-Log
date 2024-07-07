// Factory: seleccionamos que tipo de DAO vamos a usar segun la persisten elegida.

const ErrorLogDAOMongo = require("../DAOs/errorLogDAOMongo")
//const ErrorLogDAOSql = require("../DAOs/errorlogDAOSql")

const persistenceMapper = {
    mongo: () => new ErrorLogDAOMongo(),
    //sql: ()=> new ErrorLogDAOSql(),
    default: ()=> new ErrorLogDAOMongo(),
}

module.exports = (persistence)=>{
    //console.log(persistence)
    const persistenceFn = persistenceMapper[persistence] || persistenceMapper.default  // Si no se pasa ninguna persistencia usamos la default. Para pasarle un valor dinamico a un objeto lo hago entre [].
    const dao = persistenceFn();
    return dao
}