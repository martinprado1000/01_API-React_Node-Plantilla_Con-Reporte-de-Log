const ErrorLogModel = require("../models/errorLogModel");

function logWithLineNumber(message) {
  const stack = new Error().stack.split("\n");
  const lineInfo = stack[2].trim();
  console.log({
    ErrorLine: lineInfo,
    ErrorDetail: message,
  });
  return {
    ErrorLine: lineInfo,
    Error: message,
  };
}

class ErrorLogDAOMongo {
  constructor() {
    this.errorlogModel = ErrorLogModel;
  }

  async get() {
    try {
      return await this.errorlogModel.find();
    } catch (e) {
      throw new Error("Error inesperado al realizar la consulta get");
    }
  }

  async getPaginate(query, options) {
    try {
      return await this.errorlogModel.paginate(query, options);
    } catch (e) {
      throw new Error("Error inesperado al realizar la consulta get");
    }
  }

  async getById(id) {
    try {
      return await this.errorlogModel.findById(id);
    } catch (e) {
      throw new Error("Error inesperado al realizar la consulta getById");
    }
  }

  async getByEmail(email) {
    try {
      return await this.errorlogModel.findOne({ email: email });
    } catch (e) {
      throw new Error("Error inesperado al realizar la consulta getById");
    }
  }

  async getByUsername(username) {
    try {
      return await this.errorlogModel.findOne({ username: username });
    } catch (e) {
      throw new Error("Error inesperado al realizar la consulta getById");
    }
  }

  async post(body) {
    console.log(body)
    try {
      const res =  await this.errorlogModel.create(body);
      console.log(res)
      return res
    } catch (error) {
      console.log(error)
      const field = Object.keys(error.keyPattern)[0];
      const value = error.keyValue[field];
      //console.error(`Error: Duplicated key error. Field: ${field}, Value: ${value}`);
      const err = logWithLineNumber(error);
      throw new Error("Error inesperado al realizar la consulta post");
    }
  }

  async put(id, body) {
    try {
      return await this.errorlogModel.findByIdAndUpdate(id, { $set: body });
    } catch (e) {
      console.log(e);
      throw new Error("Error inesperado al realizar la consulta");
    }
  }

  async delete(id) {
    try {
      return await this.errorlogModel.deleteOne({ _id: id });
    } catch (e) {
      throw new Error("Error inesperado al realizar la consulta");
    }
  }
}

module.exports = ErrorLogDAOMongo;
