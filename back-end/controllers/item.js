let Item = require('../models/Item')(/* construtor */);

module.exports = function () {

   const controller = {}; // Objeto vazio
   
   controller.novo = function(req, res) {
      
      Item.create(req.body).then(
         // Callback
         function() {
            // HTTP 201: Criado
            res.status(201).send();
         },
         function(erro) {
            // HTTP 500: Erro interno do servidor
            console.log(erro);
            res.status(500).end();
         }
      );

   }

   return controller;

};