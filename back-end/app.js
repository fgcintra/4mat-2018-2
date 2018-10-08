var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const db = require('./config/database');

// mongodb:// -> protocolo de conexão ao MongoDB
// localhost -> nome do servidor (no caso, a máquina local)
// :27017 -> porta onde o servidor do MongoDB espera por conexões
// brecho -> nome do banco de dados
db('mongodb://localhost:27017/brecho');

// CORS = Cross-Origin Resource Sharing. Permite que o
// front-end acesse o back-end a partir de um servidor:porta
// diferente
let cors = require('cors');
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Adicionando uma nova rota à aplicação
const teste = require('./routes/teste');
app.use('/ola', teste);

const item = require('./routes/item');
app.use('/item', item);

const tipo = require('./routes/tipo');
app.use('/tipo', tipo);

const linha = require('./routes/linha');
app.use('/linha', linha);

const tamanho = require('./routes/tamanho');
app.use('/tamanho', tamanho);

module.exports = app;
