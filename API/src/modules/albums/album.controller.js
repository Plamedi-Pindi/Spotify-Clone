'use strict'

const AlbumList = require("../../mock/albumMockService");

exports.getAll = async (req, reply) => {
    try {
        const result = await AlbumList
        return reply.code(200).send(result);
    } catch (error) {
        return reply.code(400).send({message: 'Erro ao buscar a lista dos albuns', error})
    }
}