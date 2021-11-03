const express = require('express')

const server = express()

const route = require('./route')

const path = require('path')

server.use(route)

server.listen(8080, () => console.log("Rodando"))