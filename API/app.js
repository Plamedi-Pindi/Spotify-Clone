'use strict'

const path = require('node:path');
const AutoLoad = require('@fastify/autoload');
const cors = require('@fastify/cors');
const fastifyStatic = require('@fastify/static');

// Pass --options via CLI arguments in command to enable these options.
const options = {}

module.exports = async function (fastify, opts) {
  // This  loads cors
  fastify.register(cors);

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })

  fastify.register(fastifyStatic, {
    root: path.join(__dirname, 'public/music'),
    prefix: '/music/',
  })
}

module.exports.options = options
