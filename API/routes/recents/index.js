'use strict'

module.exports = async (fastify, opts) => {
    fastify.get('/', async (request, reply) => {
        return [
            {
                "id": 1,
                "name": "Mercy Chinow",
                "img": "https://i.imgur.com/K0BPyWp.jpg",
                "category": "Mix",
                "title": "The Grace",
                "year": "2022"

            },
            {
                "id": 2,
                "name": "Thamires Garcias",
                "img": "https://i.imgur.com/hRs2nLz.jpg",
                "category": "Artist"
            },
            {
                "id": 3,
                "name": "Omid Armin",
                "img": "https://i.imgur.com/RJwO12O.jpg",
                "category": "Album",
                "title": "Victory",
                "year": "2010"
            },
            {
                "id": 4,
                "name": "Nivea Soares",
                "img": "https://i.imgur.com/7TrWOrM.jpg",
                "category": "Mix",
                "color": ""

            },
            {
                "id": 5,
                "name": "Fatane Rahimi",
                "img": "https://i.imgur.com/2r7Pnl9.jpg",
                "category": "Album",
                "title": "The Kingdown of God",
                "year": "2024"
            },
            {
                "id": 6,
                "name": "Michael W. Smith",
                "img": "https://i.imgur.com/aNSFnyd.jpg",
                "category": "Artist",
                "title": "The Kingdown of God",
                "year": "2024"
            },
            {
                "id": 7,
                "name": "Autor Name",
                "img": "https://i.imgur.com/xv5VGWc.jpg",
                "category": "Mix",
                "color": ""
            },
            {
                "id": 8,
                "name": "Tasha Cobbs",
                "img": "https://i.imgur.com/QAt3RmB.png",
                "category": "Mix",
                "color": ""

            }
        ]
    })
}