const knex = require('knex');
const configuration = require('../../knexfile');

const conecction = knex(configuration.development);

module.exports = conecction;
 