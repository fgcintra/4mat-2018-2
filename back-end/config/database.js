const mongoose = require('mongoose');

module.exports = function(uri) {
   mongoose.connect(uri, { useNewUrlParser: true });

   mongoose.connection.on('connected', function () {
      console.log('Mongoose! conectado e escutando na porta 27017');
   });

   mongoose.connection.on('disconnected', function () {
      console.log('Mongoose! desconectado');
   });

   mongoose.connection.on('error', function (erro) {
      console.log('Mongoose! ERRO: não foi possível conectar a ' + uri +
         '. MOTIVO: ' + erro);
   });

}

