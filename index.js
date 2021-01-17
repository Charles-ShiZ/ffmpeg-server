import http from 'http'
import Koa from 'koa'
import router from './router/index.js'
import config from './config.js'
import wss from './wss/index.js'

const app = new Koa()
const server = http.createServer(app.callback())
const { port } = config

router(app)
wss(server)

server.listen(port, _ => {
    console.log(port)
})