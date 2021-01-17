import fs from 'fs'
import Router from 'koa-router'
import resource from '../resource/index.js'
const __dirname = process.cwd()
const router = new Router()
export default app => {
    const resrc = resource(app)
    router
    .get('/', ctx => {  
        console.log('asdfasdf')
        ctx.type = 'html'
        ctx.body = fs.readFileSync(`${resrc['control']}/index.html`)
    })
    .get('/control', ctx => {
        ctx.type = 'html'
        ctx.body = fs.readFileSync(`${resrc['control']}/index.html`)
    })
    
    app.use(router.routes()).use(router.allowedMethods())
}