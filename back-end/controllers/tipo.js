const Tipo = require('../models/Tipo')(/* construtor */);

module.exports = function() {

   const controller = {};

   controller.novo = function(req, res) {
      Tipo.create(req.body).then(
         function() {
            res.status(201).end();
         },
         function(erro) {
            console.log(erro);
            res.status(500).end();
         }
      );
   }

   controller.listar = function(req, res) {
      Tipo.find().exec().then(
         function(tipos) {
            res.json(tipos).end();
         },
         function(erro) {
            console.log(erro);
            res.status(500).end();
         }
      );
   }

   return controller;

}