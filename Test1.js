var Username = "King";
var Email = "King@163.com";
var Password = "123";
var Confirm_Password="123";
//(1)引入UserService模块
var UserService = require("./Service/UserService1");
//(2) 创建对象
var userService = new UserService();
//(3) 注册用户
userService.insert(Username,Email,Password,Confirm_Password,function(result){
    //(1)把对象转为json格式数据
    var data = JSON.stringify(result);
    //(2)返回数据
    console.log(data);
})