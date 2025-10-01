'use strict'

const artistObjectList = require('../../mock/artistObjects');

module.exports = async function (fastify, opts) {

    // To access: 👉 http://127.0.0.1:3000/artists
    fastify.get('/', async function (request, reply) {
        const result = artistObjectList
        if (result.length === 0) {
            throw new Error("No documents found");
        }
        return result
    });

    // To access: 👉 http://127.0.0.1:3000/artists/object/id
    fastify.get('/object/:id', async function (request, reply) {
        const result = artistObjectList.filter((obj) => obj.id === parseInt(request.params.id))
        if (result.length === 0) {
            throw new Error("No documents found");
        }
        return result
    });
}
