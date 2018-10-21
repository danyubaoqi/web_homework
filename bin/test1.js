const Koa = require('koa');
const app = new Koa();

const main = ctx => {
  ctx.response.header(200,{"Content-Type":"text / plain"});
  //设置响应的body
  ctx.response.body = 'Hello World';
};

app.use(main);
//监听端口
app.listen(3000);
