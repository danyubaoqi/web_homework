const Koa = require('koa');
const router = require('koa-router')();
const koaBody = require('koa-body');
const bodyParser = require('koa-bodyparser');
const app = new Koa();
const fs = require('fs');
const path=require('path');
const view = require('koa-views');
app.use(koaBody({

    multipart: true,

    formidable: {

        maxFileSize: 200 * 1024 * 1024 // 设置最大文件大小

    }

}));

//get 访问根节点
router.get('/', async (ctx, next) => {
    ctx.response.type = "html";
    ctx.response.body = fs.createReadStream('template.html');


});
//post请求(上传文件)，
router.post('/', async (ctx, next) => {
    const file = ctx.request.files.file;
    let reader = fs.createReadStream(file.path);
    let filePath = `../public/images/test.png`;
    const upstream = fs.createWriteStream(filePath);
    reader.pipe(upstream);

    ctx.response.redirect('/');


});


app.use(bodyParser());
// 加入路由
app.use(router.routes());

app.listen(3000);

console.log(`seaver started`);
