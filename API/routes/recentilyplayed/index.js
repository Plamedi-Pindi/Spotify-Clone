'use strict'

module.exports = async function (fastify, opts) {
    fastify.get('/', async function (request, reply) {
        return [
            {
                "id": 5,
                "name": "Nivea Soares",
                "img": "https://i.imgur.com/aoU7K5a.jpg",
                "category": "Artist",
                "isPlaying": true,
                "year": "2022",
                "galery": [
                    {
                        "id": 1,
                        "img": "https://i.imgur.com/xv5VGWc.jpg"
                    },
                    {
                        "id": 2,
                        "img": "https://i.imgur.com/dmeOtvj.jpg"
                    },
                    {
                        "id": 3,
                        "img": "https://i.imgur.com/eQ2bWJ6.jpg"
                    }
                ]
            },
        ]
    })
}
