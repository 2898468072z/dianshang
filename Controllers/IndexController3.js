exports.checkout = function(req, res){

    var ProductMale = require("../Dao/UserDao3");
    var productMale = new ProductMale.checkout();
    productMale.init();
    productMale.selectProducts(function(result){

        res.render("checkout",{items:result})
    });
};


exports.index=function(req,res){
    res.render('index',{});
}
exports.login=function(req,res){
    //1,解析客户端提交的数据
    var username  = req.body.username;
    var password  = req.body.password;
    //2,验证用户是否合法
    //(1)引入userService
    var UserService = require('../Service/UserService');
    //(2)创建对象
    var userService = new UserService();
    //(3)对象初始化
    userService.init();
    //(4)验证用户是否合法
    userService.checkUser(username,password,function(result){
        res.end(JSON.stringify(result));
    });






}