const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const compraSchema = new Schema({
  compra: [
    {
      producto: {
        type: Schema.ObjectId,
        ref: "Producto"
      },
      cantidad: Number
    }
  ],
  total: Number
});

module.exports = mongoose.model("Compra", compraSchema);
