'use strict'

const { v4: uuid4 } = require('uuid');
const ArtistList = require('../mock/artistMockService');

const mercyID = ArtistList.filter((artist) => artist.name === "Mercy Chinow")[0].id;
const niveaID = ArtistList.filter((artist) => artist.name === "Nívea Soares")[0].id;
const ThamiresID = ArtistList.filter((artist) => artist.name === "Thamires Garcia")[0].id;


module.exports = [
    {
        "id": uuid4(),
        "artist_ID": mercyID,
        "title": 'The grace',
        "artist": 'Mercy Chinow',
        "year": '',
        "image": '',
        "category": "Album",
        "description": '',
        "songs": [
            {
                "id": 1,
                "title": '',
                "music": '',
            }
        ],

    },
    {
        "id": uuid4(),
        "artist_ID": niveaID,
        "title": '',
        "artist": 'Nívea Soares',
        "year": '',
        "image": '',
        "category": "Album",
        "description": '',
        "songs": [
            {
                "id": 1,
                "title": '',
                "music": '',
            }
        ],

    },
    {
        "id": uuid4(),
        "artist_ID": ThamiresID,
        "title": 'O Senhor Não os Ídolos',
        "artist": 'Thamires Garcia',
        "year": '2025',
        "image": '',
        "category": "Album",
        "description": '',
        "songs": [
            {
                "id": 1,
                "title": '',
                "music": '',
            }
        ],

    }
]