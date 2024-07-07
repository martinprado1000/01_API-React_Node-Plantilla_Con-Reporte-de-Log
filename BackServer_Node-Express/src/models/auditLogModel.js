const { Schema, model } = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const auditLogsSchema = new Schema(
  {
    typeError: {
      type: String,
      default: "auditLog",
    },
    level: {
      type: String,
      default: "info",
      enum: ["error", "warning", "info"],
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
    auditLogDetail: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

// {
//   level: "error",
//   method: "GET",
//   url: "/localhost:8080/user",
//   user: "martin",
//   auditLogDetail: "se murio el server"
// }

auditLogsSchema.plugin(mongoosePaginate); // Asi inyectamos el plugin de mongoose-paginate en nuestro esquema

module.exports = model("auditLogs", auditLogsSchema);
