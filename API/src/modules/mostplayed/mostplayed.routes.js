'use strict'

const MostplayedController = require('./mostplayed.controller');

module.exports = async (fastify) => {
    // 
    fastify.get('/', MostplayedController.getAll);
}