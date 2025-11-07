'use strict'

const JumpListController = require('./jumplist.controller');

module.exports = async (fastify) => {
    // 
    fastify.get('/', JumpListController.getAll);
}