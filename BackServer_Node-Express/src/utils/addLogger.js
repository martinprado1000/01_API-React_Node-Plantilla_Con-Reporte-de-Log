// npm i winston

// Estos son los niveles por default de winston:
// 0-error
// 1-warn       ↑
// 2-info       |
// 3-http       |
// 4-verbose    |
// 5-debug      |
// 6-silly
// Si le defino al transporte que el nivel es http, va a loguear si ejecutamos un winston.log nivel error,warn,info y http. Loguea hacia ↑.

const {winston} = require("winston");
const winstonDB = require('winston-mongodb');

const addLogger = () => {
  const logger = winston.createLogger({
    // Las propiedad que este fuera de un tranporte las pongo dentro de format: winston.format.combine(). Y esto lo aplica a todos los transportes. 
    format: winston.format.combine(
        winston.format.simple(), // Le transforma en un formato mas legible.
        //winston.format.printf(info=>"asdasda")    // De esta forma imprimiria para todos lo mismo.
    ),
    
    transports: [

      // new winston.transports.MongoDB({
      //   level: "info",
      //   winstonDB: `mongodb+srv://${settings.db_user}:${settings.db_password}@${settings.db_host}/${settings.db_name}?retryWrites=true&w=majority`,
      //   collection: "errorLog"
      // }),

      // new winston.transports.MongoDB({
      //   level: "info",
      //   winstonDB: `mongodb+srv://${settings.db_user}:${settings.db_password}@${settings.db_host}/${settings.db_name}?retryWrites=true&w=majority`,
      //   collection: "auditLog"
      // }),

      new winston.transports.File({
        filename: "./log1111111111111111111111111111.log",
        level: "http",
      }),

    ],
    
  });
  return logger;
};

const errorLog = () => {
    const now = new Date();
    const formattedDate = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
    // Middleware que voy a llamar cada vez que se haga una petición para generar un log.
    if (logger) {
    //const now = new Date().toISOString().slice(0, 19).replace('T', ' ');
        logger.info(
          "asdad"
            // Aca adentro le paso lo que quiero loggear. Si no pongo nada logea el nivel de error.
            // `Peticion: ${req.method}, a la url: ${req.url} - ${formattedDate}`
    );
  }
  return;
};

const auditLog = () => {
    const now = new Date();
    const formattedDate = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
    if (logger) {
        logger.info(
            `Peticion: ${req.method}, a la url: ${req.url} - ${formattedDate}`
    );
  }
  return;
};

module.exports = {
  addLogger,
  errorLog,
  auditLog
};
