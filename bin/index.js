var server=require("./www");
var router=require('./router');
server.start(router.route);
//类似于c语言的include，自定义库，然后直接导入使用