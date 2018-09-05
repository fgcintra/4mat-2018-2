const Linha = require('../models/Linha')(/* construtor */);

module.exports = function() {

   const controller = {};

   controller.novo = function(req, res) {
      Linha.create(req.body).then(
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
      Linha.find().exec().then(
         function(linhas) {
            res.json(linhas).end();
         },
         function(erro) {
            console.log(erro);
            res.status(500).end();
         }
      );
   }

   controller.obterUm = function (req, res) {

      // findById(): procura um objeto por seu id. Encontra 0 ou 1 ocorrência
      Linha.findById(req.params.id).exec().then(
         function (linha) {
            if (linha) { // Encontrou o linha (não veio vazio)
               // Retorna o linha encontrado com status HTTP 200
               res.json(linha).end();
            }
            else {
               // HTTP 404: Não encontrado
               res.status(404).end();
            }
         },
         function (erro) {
            console.log(erro);
            res.status(500).end();
         }
      );

   }

   controller.atualizar = function (req, res) {

      // findByIdAndUpdate(): procura um objeto pelo id passado
      // e promove as alterações previstas no req.body
      Linha.findByIdAndUpdate(req.body._id, req.body).exec().then(
         // Foi bem
         function () {
            // HTTP 204: OK, sem conteúdo
            res.status(204).end();
         },
         // Deu ruim
         function (erro) {
            console.log(erro);
            res.status(500).end();
         }
      );

   }

   controller.excluir = function (req, res) {

      // findByIdAndRemove(): encontra o objeto especificado pelo id e o exclui do BD
      Linha.findByIdAndRemove(req.params.id).exec().then(
         function () {
            res.status(204).end();
         },
         function (erro) {
            console.log(erro);
            res.status(500).end();
         }
      );

   }

   return controller;

}