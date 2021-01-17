import koaStatic from 'koa-static'

const __dirname = process.cwd() // type:"module"即ES6模式下，默认没有__dirname属性，可以使用process.cwd()代替

export default app=>{
    const resource = {
        control:`${__dirname}/control`
    }
    app.use(koaStatic(resource['control']))
    return resource
}