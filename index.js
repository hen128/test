const Koa = require('koa');
const app = new Koa();

const router = require('koa-router')()
router.get('/', (ctx)=>{
    ctx.body = '接口';
})
router.get('/file', (ctx)=>{
    ctx.body = 'file';
})
router.get('/user', (ctx)=>{
    ctx.body = 'user';
})
router.post('/user', (ctx)=>{
    ctx.body = 'POST user';
})
router.put('/user', (ctx)=>{
    ctx.body = 'PUT user';
})
app.use(router.routes(), router.allowedMethods())

app.listen(3008, () => {
    console.log('3008项目启动')
});