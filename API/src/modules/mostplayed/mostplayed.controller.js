'use strict'

const MostplayedList = require('../../mock/mosteplayedService');


exports.getAll = async (req, reply) => {
    try {
        const response = await MostplayedList;
        return reply.code(200).send(response)
    } catch (error) {
        console.error("Houve um erro ao buscar as músicas mais tocadas!");
        
    }
}
