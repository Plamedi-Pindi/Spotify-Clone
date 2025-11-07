'use strict'

const artistList = require('../../mock/artistMockService');

// 
exports.getAll = async (req, reply) => {
    try {
        const result = await artistList;
        return reply.code(200).send(result)
    } catch (error) {
        return reply.code(400).send({ message: 'Erro ao buscar a lista de artistas!', error: error })
    }
}

// 
exports.getOneArtist = async (req, reply) => {
    try {
        const id = req.params.id;
        console.log(req.params.id);
        
        const result = await artistList.filter((artist) => artist.id == id);

        if (result.length == 0) throw new Error("Não foi encontrado o artista");

        return reply.code(200).send(result)
    } catch (error) {
        return reply.code(400).send({ message: 'Erro ao buscar o artista!', error });
    }
}