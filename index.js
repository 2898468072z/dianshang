//1,引入express
var express = require('express');
var app = express();

var cookieParser = require('cookie-parser');
app.use(cookieParser());
var session = require('express-session');
app.use(session({
    secret: '12345',
    name: 'express_11_cookie',   //这里的name值得是cookie的name，默认cookie的name是：connect.sid
    cookie: {maxAge: 60*60 *1000 },     //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
}));


var path = require('path');
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({extended:false});
//2,引入的ejs插件
var ejs = require('ejs');
//3,设置html引擎
app.set('view engine', 'html');
//4,设置视图地址
app.set('views', path.join(__dirname, '/views'));
//5,设置ejs引擎
app.engine('html', require('ejs').__express);
//6,静态文件
app.use(express.static('public'));

var indexController=require('./Controllers/IndexController');
app.get('/index',indexController.index);
app.post('/login',urlencodedParser,indexController.login);
app.get('/contact',indexController.contact);
app.get('/pressroom',indexController.pressroom);
app.get('/shortcodes',indexController.shortcoder);
app.get('/signup',indexController.signup);
app.get('/single',indexController.single);
app.get('/terms',indexController.terms);
app.get('/product-m',indexController.product_m);
app.get('/product-k',indexController.product_k);
app.get('/checkout',indexController.checkout);
app.get('/product',indexController.product);


var indexController1 = require('./Controllers/IndexController1');
app.post('/signup',urlencodedParser,indexController1.signup);



app.get('/login',function (req,res) {
    res.render("login");
});



app.listen(9999,function(){
    console.log('服务器已经启动');
});