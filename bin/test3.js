const Koa = require('koa');
const route = require('koa-route');
const app = new Koa();

const about = ctx => {
  ctx.response.type = 'html';
  ctx.response.body = '<a href="/">Index Page</a>';
};

const main = ctx => {
  ctx.response.body = 'Hello World';
};
const redirect=ctx=>{
  //设置重定向链接
  ctx.response.redirect('/');
  ctx.response.body='\'<a href="/">Index Page</a>';

};
//设置各种get请求时，所应用的函数
app.use(route.get('/', main));
app.use(route.get('/about', about));
app.use(route.get('/redirect',redirect));
app.listen(3000);
