'use strict'

const ArtistList = require('../../mock/artistMockService');
const AlbumList = require('../../mock/albumMockService');

// 
exports.getAll = async (req, reply) => {
    try {
        const artists = await ArtistList;
        const albums = await AlbumList;
        const JumpList = ArtistList.concat(AlbumList)
        const result =JumpList
        return reply.code(200).send(result)
    } catch (error) {
        return reply.code(400).send({ message: 'Erro ao buscar a lista de artistas!', error: error })
    }
}

