const mongoose = require('mongoose');

module.exports = function() {

   const schema = mongoose.Schema({
      descricao: {
         type: String,
         required: true // Não pode ficar em branco
      },
      tipo: {
         type: String,
         required: true
      },
      cor: {
         type: String
      },
      tamanho: {
         type: String,
         required: true
      },
      linha: {
         type: String,
         required: true
      },
      estado_conservacao: {
         type: String,
         required: true
      },
      conjunto: {
         type: Boolean,
         required: true
      },
      data_compra: {
         type: Date,
         required: true
      },
      valor_compra: {
         type: Number,
         required: true
      },
      data_venda: {
         type: Date
      },
      valor_venda: {
         type: Number
      }

   });

   return mongoose.model('Item', schema, 'itens');

}