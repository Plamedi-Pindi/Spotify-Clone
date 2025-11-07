'use strict'

const AlbumController = require('./album.controller');

module.exports = async (fastify) => {
    // 
    fastify.get('/', AlbumController.getAll);
}