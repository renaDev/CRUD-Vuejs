// Responsavel em fazer conexao com Banco de Dados -- Update etc...

const mysql = require('mysql');

let conexao = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_galeria_video',
});

module.exports = conexao;

