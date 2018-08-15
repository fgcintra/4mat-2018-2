// Criando um objeto vazio e imutável
const controller = {};

// Toda função de controller tem pelo menos dois parâmetros:
// 1º parâmetro: req = requisição recebida
// 2º parâmetro: res = resposta a ser devolvida ao cliente
controller.ola_mundo = function(req, res) {
   res.send('Olá, mundo!');
}

// Exportando este controller para que ele possa ser usado
// em outros lugares da aplicação
module.exports = controller;