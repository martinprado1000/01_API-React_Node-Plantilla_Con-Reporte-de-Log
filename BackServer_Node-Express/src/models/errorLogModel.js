const { Schema, model } = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const errorLogsSchema = new Schema(
  {
    typeError: {
      type: String,
      default: "errorLog",
    },
    level: { // error, info, warning, etc
      type: String,
      default: "info",
      enum: ["error","warning","info"],
      require: true,
    },
    method: {
      type: String,
      trim: true,
    },
    url: {
        type: String,
        trim: true,
      },
      userOwner: {
      type: String,
      trim: true,
      require: true,
    },
    errorLogDetail: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

errorLogsSchema.plugin(mongoosePaginate); // Asi inyectamos el plugin de mongoose-paginate en nuestro esquema

module.exports = model("errorLogs", errorLogsSchema);