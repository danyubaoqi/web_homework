# web_homework

bin为各种样例</br>
1. 现在有的问题：</br>
   1. 调用模板之后，网页无法显示图片，但是直接打开html文件却可以看见图片
   2. 还是不太理解async，不知道为啥还要await
2. RESTful
    1. 优点
        1. 只用get,post,put,delete就可以表示的接口。
        2. 规范的api设计可以适用于各种设备
        3. 调用资源时，不用考虑当前状态。
        4. 完全基于HTTP协议
    2. 缺点
        1. 不是所有的东西都可以表述为资源
        2. 如何将一个常用的api（非restful）转成restful
