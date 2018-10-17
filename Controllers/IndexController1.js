exports.index=function (req,res) {

    res.render('index',{});
}

exports.signup=function (req,res) {

    //1,解析数据
    var Username = req.body.Username;
    var Email = req.body.Email;
    var Password = req.body.Password;
    var Confirm_Password = req.body.Confirm_Password;
    //2,插入数据
    //(1)引入UserService模块
    var UserService = require("../Service/UserService1");
    //(2) 创建对象
    var userService = new UserService();
    //(3) 注册用户
    userService.insert(Username,Email,Password,Confirm_Password,function(result){
        console.log(result);
        //(1)把对象转为json格式数据
        var data = JSON.stringify(result);
        //(2)返回数据
        res.end(data);
    })


}
