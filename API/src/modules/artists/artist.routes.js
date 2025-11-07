'use strict'

const ArtistController = require('./artist.controller')
module.exports = async (fastify) => {
    // 
    fastify.get('/', ArtistController.getAll);
    // 
    fastify.get('/getartist/:id', ArtistController.getOneArtist);
}