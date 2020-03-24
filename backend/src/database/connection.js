const knex = require('knex');
const configuratoin = require('../../knexfile');

const connection = knex(configuratoin.development);

module.exports = connection;