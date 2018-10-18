function UserDao() {

    this.init=function(){
        //1,引入MySQL模块
        var mysql = require('mysql');  //调用MySQL模块

        //2，创建一个connection
        this.connection = mysql.createConnection({
            host: 'localhost',       //主机 ip
            user: 'root',            //MySQL认证用户名
            password: '123456Q',                //MySQL认证用户密码
            port: '3306',                 //端口号
            database: 'lcn'          //数据库里面的数据
        });
        //3，连接
        this.connection.connect();
    }

    this.insert=function(Username,Email,Password,Confirm_Password,call){

        var created_at =new Date();
        //1，编写sql语句
        var  userAddSql = 'INSERT INTO user(username,email,password,confirm_password,created_at,updated_at) VALUES(?,?,?,?,?,?)';
        var  userAddSql_Params = [Username,Email,Password,Confirm_Password,created_at,created_at];
        //2,进行插入操作
        /**
         *query，mysql语句执行的方法
         * 1，userAddSql编写的sql语句
         * 2，userAddSql_Params，sql语句中的值
         * 3，function (err, result)，回调函数，err当执行错误时，回传一个err值，当执行成功时，传回result
         */
        this.connection.query(userAddSql,userAddSql_Params,function (err, result) {
            if(err){
                console.log('[INSERT ERROR] - ',err.message);
                return;
            }

            call(result);
        });
    }


    this.selectUserByName = function (username,call) {
        //1,编写sql语句
        var userGetSql = "SELECT password FROM user where username ='"+username+"'";
        //2,进行查询操作
        /**
         *query，mysql语句执行的方法
         * 1，userAddSql编写的sql语句
         * 2，function (err, result)，回调函数，err当执行错误时，回传一个err值，当执行成功时，传回result
         */

        this.connection.query(userGetSql, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }

            call(result);
        });
    }
    
    this.end=function () {
        this.connection.end();
    }
}

module.exports=UserDao;