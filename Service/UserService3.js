function UserService3(){

    //对象初始化
    this.init=function(){
        //(1)引入UserDao模块
        var UserDao =  require('../Dao/UserDao3');
        //(2)获得对象
        this.userDao = new UserDao();
        //(3)对象初始化
        this.userDao.init();
    }

    this.checkUser=function(username,password,call){

        //(1)用户工具类
        var tool=require('../Tools/tool');

        var password =tool.crypto(password);

        this.selectUserByName(username,function(result){
            var body={
                state:0,
                msg:"hello"
            }

            //1,获得数组的长度
            var length = result.length;

            if(length==0){
                body.msg="没有当前用户账号，请确认账号是否正确，如果没有账号，请注册新用户！"
            }else{
                //2,把密码从数组对象里面取出来
                var buffer = result[0].password;
                //3,判断用户是否合法
                if(password==buffer){
                    state:2,
                        body.msg="登录成功！";
                }else{
                    state:1,
                        body.msg="登录失败，密码错误，请重新输入密码！";
                }
            }
            call(body);
        });

    }
    this.selectUserByName=function(username,call){
        //(4)查询密码
        this.userDao.selectUserByName(username,function(result){
            call(result);
        });
    }

}
module.exports=UserService3;