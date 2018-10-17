function UserService() {

    this.insert=function(Username,Email,Password,Confirm_Password,call){
        //1,验证当前用户是否存在

        var UserDao =  require('../Dao/UserDao1');
       //(2) 创建对象
        var userDao = new UserDao();
        var tool=require('../Tools/tool');
        var Password =tool.crypto(Password);

        //(3)对象初始化
        userDao.init();
        //(4) 查询用户
        userDao.selectUserByName(Username,function(result){



            console.log(result);
            //(1)获得数据的长度
            var length =result.length;
           //(2) 长度为0的时候，注册用户
            if(length==0){
                userDao.insert(Username,Email,Password,Confirm_Password,function(data){
                    console.log(data);
                })
                userDao.end();
            }else{
                console.log("用户已经存在");
            }
        })



    }

    // this.selectAll=function(){
    //
    // }
    //
    // this.selectUser=function(){
    //
    // }
    
}

module.exports=UserService;