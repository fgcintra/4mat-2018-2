const mongoose = require('mongoose');

module.exports = function() {

   const schema = mongoose.Schema({
      descricao:{
         type: String,
         required: true
      },
      ordem: {
         type: Number,
         required: true,
         default: 0
      }
   });

   return mongoose.model('Tamanho', schema, 'tamanhos');

};