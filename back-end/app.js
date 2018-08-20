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

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Adicionando uma nova rota à aplicação
const teste = require('./routes/teste');
app.use('/ola', teste);

module.exports = app;
