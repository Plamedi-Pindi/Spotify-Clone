'use strict'

module.exports = async function (fastify, opts) {
    fastify.get('/', async function (request, reply) {
        return [
            {
                "id": 1,
                "name": "Thamires Garcia",
                "img": "https://i.imgur.com/V5ZIvjQ.jpg",
                "galery": [
                    {
                        "id": 1,
                        "img": "https://i.imgur.com/hRs2nLz.jpg"
                    },
                    {
                        "id": 2,
                        "img": "https://i.imgur.com/V5ZIvjQ.jpg"
                    },
                    {
                        "id": 3,
                        "img": "https://i.imgur.com/hRs2nLz.jpg"
                    }
                ]
            },
            {
                "id": 2,
                "name": "Michael W. Smith",
                "img": "https://i.imgur.com/aNSFnyd.jpg",
                "galery": [
                    {
                        "id": 1,
                        "img": "https://i.imgur.com/Fydpr8m.jpg"
                    },
                    {
                        "id": 2,
                        "img": "https://i.imgur.com/aNSFnyd.jpg"
                    },
                    {
                        "id": 3,
                        "img": "https://i.imgur.com/JtTi8YU.jpg"
                    }
                ]
            },
            {
                "id": 3,
                "name": "Artist Name",
                "img": "https://i.imgur.com/xv5VGWc.jpg",
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
            {
                "id": 4,
                "name": "Mercy Chinow",
                "img": "https://i.imgur.com/K0BPyWp.jpg",
                "galery": [
                    {
                        "id": 1,
                        "img": "https://i.imgur.com/PY630AM.jpg"
                    },
                    {
                        "id": 2,
                        "img": "https://i.imgur.com/76UlUVf.jpg"
                    },
                    {
                        "id": 3,
                        "img": "https://i.imgur.com/K0BPyWp.jpg"
                    }
                ]
            },
            {
                "id": 5,
                "name": "Nívea Soares",
                "img": "https://i.imgur.com/dmeOtvj.jpg",
                "galery": [
                    {
                        "id": 1,
                        "img": "https://i.imgur.com/aoU7K5a.jpg"
                    },
                    {
                        "id": 2,
                        "img": "https://i.imgur.com/dmeOtvj.jpg"
                    },
                    {
                        "id": 3,
                        "img": "https://i.imgur.com/7TrWOrM.jpg"
                    }
                ]
            },
            {
                "id": 6,
                "name": "Williams McDowell",
                "img": "https://i.imgur.com/eQ2bWJ6.jpg",
                "galery": [
                    {
                        "id": 1,
                        "img": "https://i.imgur.com/WRwCU4o.jpg"
                    },
                    {
                        "id": 2,
                        "img": "https://i.imgur.com/oODBZjZ.jpg"
                    },
                    {
                        "id": 3,
                        "img": "https://i.imgur.com/eQ2bWJ6.jpg"
                    }
                ]
            },
            {
                "id": 7,
                "name": "Omid Armin",
                "img": "https://i.imgur.com/RJwO12O.jpg",
                "galery": [
                    {
                        "id": 1,
                        "img": "https://i.imgur.com/qX5t8gS.jpg"
                    },
                    {
                        "id": 2,
                        "img": "https://i.imgur.com/IjjpTJJ.jpg"
                    },
                    {
                        "id": 3,
                        "img": "https://i.imgur.com/RJwO12O.jpg"
                    }
                ]
            },
            {
                "id": 8,
                "name": "Sandra Mbuyi",
                "img": "https://i.imgur.com/nmccSuW.jpg",
                "galery": [
                    {
                        "id": 1,
                        "img": "https://i.imgur.com/vlrsj6Z.jpg"
                    },
                    {
                        "id": 2,
                        "img": "https://i.imgur.com/nv6oU2C.jpg"
                    },
                    {
                        "id": 3,
                        "img": "https://i.imgur.com/p4uETx9.jpg"
                    }
                ]
            },
            {
                "id": 9,
                "name": "Nathaniel Bassey",
                "img": "https://i.imgur.com/C5wQDoH.jpg",
                "galery": [
                    {
                        "id": 1,
                        "img": "https://i.imgur.com/C5wQDoH.jpg"
                    },
                    {
                        "id": 2,
                        "img": "https://i.imgur.com/jTdE0Ai.jpg"
                    },
                    {
                        "id": 3,
                        "img": "https://i.imgur.com/owdNyDx.jpg"
                    }
                ]
            },
            {
                "id": 10,
                "name": "Nair Nany",
                "img": "https://i.imgur.com/9hs8YRc.jpg",
                "galery": [
                    {
                        "id": 1,
                        "img": "https://i.imgur.com/8GqdgTg.jpg"
                    },
                    {
                        "id": 2,
                        "img": "https://i.imgur.com/iYcSPld.jpg"
                    },
                    {
                        "id": 3,
                        "img": "https://i.imgur.com/9hs8YRc.jpg"
                    }
                ]
            },
            {
                "id": 11,
                "name": "Tasha Cobbs",
                "img": "https://i.imgur.com/qHw9NBT.jpg",
                "galery": [
                    {
                        "id": 1,
                        "img": "https://i.imgur.com/xu6udOf.png"
                    },
                    {
                        "id": 2,
                        "img": "https://i.imgur.com/QAt3RmB.png"
                    },
                    {
                        "id": 3,
                        "img": "https://i.imgur.com/skUhCLh.jpg"
                    }
                ]

            }
        ]
    })
}
