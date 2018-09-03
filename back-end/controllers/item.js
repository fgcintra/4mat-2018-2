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

   controller.listar = function(req, res) {

      // find() retorna todos os objetos da coleção em um vetor
      Item.find().populate('tipo').exec().then(
         // Foi bem
         function(itens) {
            // Retorna os itens encontrados com status HTTP 200 (OK)
            res.json(itens).end();
         },
         // Deu ruim
         function(erro) {
            console.log(erro);
            res.status(500).end();
         }
      );

   }

   controller.obterUm = function(req, res) {

      // findById(): procura um objeto por seu id. Encontra 0 ou 1 ocorrência
      Item.findById(req.params.id).exec().then(
         function(item) {
            if(item) { // Encontrou o item (não veio vazio)
               // Retorna o item encontrado com status HTTP 200
               res.json(item).end();
            }
            else {
               // HTTP 404: Não encontrado
               res.status(404).end();
            }
         },
         function(erro) {
            console.log(erro);
            res.status(500).end();
         }
      );

   }

   controller.atualizar = function(req, res) {

      // findByIdAndUpdate(): procura um objeto pelo id passado
      // e promove as alterações previstas no req.body
      Item.findByIdAndUpdate(req.body._id, req.body).exec().then(
         // Foi bem
         function() {
            // HTTP 204: OK, sem conteúdo
            res.status(204).end();
         },
         // Deu ruim
         function(erro) {
            console.log(erro);
            res.status(500).end();
         }
      );

   }

   controller.excluir = function(req, res) {

      // findByIdAndRemove(): encontra o objeto especificado pelo id e o exclui do BD
      Item.findByIdAndRemove(req.params.id).exec().then(
         function() {
            res.status(204).end();
         },
         function(erro) {
            console.log(erro);
            res.status(500).end();
         }
      );

   }

   return controller;

};