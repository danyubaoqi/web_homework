const Koa = require('koa');
const app = new Koa();

const one = (ctx, next) => {
    console.log('>> one');
    //next();
    console.log('<< one');
};

const two = (ctx, next) => {
    console.log('>> two');
    next();
    console.log('<< two');
};

const three = (ctx, next) => {
    console.log('>> three');
    next();
    console.log('<< three');
};
//中间件，中间件的执行类似于栈，先进后出，123321.
//如果木有next()，那么后头的都不会执行
app.use(one);
app.use(two);
app.use(three);

app.listen(3000);
