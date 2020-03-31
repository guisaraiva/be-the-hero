/*
 * Rota / Recurso 
 */

/**
 * Métodos HTTP
 * 
 * GET: Buscar uma informação no back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros
  * 
  * Query params: Parâmetros nomeados enviados na rota após o "?" (Filtros, paginação)
  * Route params: Parâmetros utilizados para identificar recursos.
  * Request Body: Corpo da requisição, utilizado para alterar ou criar recurso.
  */
 /**
  * npm install nodemon -D
  * Devemos instalar o nodemon para que a aplicação não precise ser reiniciada a cada alteração.
  * Ele realiza está atualização de forma automática.
  */

  /**
   * SQL: MySql, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, etc
   */
   
  /**
   * Driver: SELECT * FROM users    
   * Query Builder: table('users').select('*').where()
   */


//O index.js é o arquivo principal da aplicação.
//importação dos Módulos e Routes.
const express = require('express');
const routes = require('./routes'); //importando as variávis do arquivo routes.js
const cors = require('cors');
const app = express();

app.use(cors()); // Se for colocado em produção, podemo utilizar o origin
app.use(express.json()) // Informar para nossa aplicação que iremos usar json no corpo
app.use(routes); //Informando o uso das Routes na aplicação.

// A aplicação está na porta 3333. Portão padrão de instalação.
// A aplicação está rodando em localhost.
app.listen(3333); 



