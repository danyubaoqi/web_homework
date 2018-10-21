const fs = require('fs');
const Koa = require('koa');
const app = new Koa();

const main = ctx => {
  ctx.response.type = 'html';
  //设置响应为调用模板
  ctx.response.body = fs.createReadStream('template.html');
};

app.use(main);
app.listen(3000);
