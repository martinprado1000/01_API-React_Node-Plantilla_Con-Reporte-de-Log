// npm i winston

// Estos son los niveles por default de winston:
// 0-error
// 1-warn       |
// 2-info       |
// 3-http       |
// 4-verbose    |
// 5-debug      ↓
// 6-silly
// Si le defino al transporte que el nivel es http, va a loguear si ejecutamos un winston.log nivel error,warn,info y http. Loguea hacia ↑.

const { createLogger, format, transports } = require("winston");
require("winston-mongodb");

const configEnvFn = require ("../config.env/configEnv")
const settings = configEnvFn(); //Obtenemos las variables de entorno

//console.log(`mongodb+srv://${settings.db_user}:${settings.db_password}@${settings.db_host}/${settings.db_name}?retryWrites=true&w=majority`)

module.exports = createLogger({

  format: format.combine(
    format.simple(), // Le transforma en un formato mas legible.
    //winston.format.printf(info=>"asdasda")    // De esta forma imprimiria para todos lo mismo.
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    format.json()
  ),

  transports: [

    new transports.Console({
      level: "http",
    }),

    // new transports.File({
    //   filename: `${__dirname}/CarpetaLogs/logs.log`,
    //   level: "error",
    // }),

    new transports.MongoDB({
      level: "error",
      db: `mongodb+srv://${settings.db_user}:${settings.db_password}@${settings.db_host}/${settings.db_name}?retryWrites=true&w=majority`,
      collection: "errorlogs",
      options: { useUnifiedTopology: true },
    }),

    new transports.MongoDB({
      level: "info",
      db: `mongodb+srv://${settings.db_user}:${settings.db_password}@${settings.db_host}/${settings.db_name}?retryWrites=true&w=majority`,
      collection: "auditlogs",
      options: { useUnifiedTopology: true },
    }),
  ],
});

