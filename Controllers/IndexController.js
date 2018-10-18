exports.index=function(req,res) {
    if (req.session.sign) {
        res.render('index', {state: 2});
        return;
    }

    var username = req.cookies.username;
    var password = req.cookies.password;

    if (username == null || password == null) {
        res.render('index', {state: -1});
    } else {
        //(1)引入userService
        var UserService = require('../Service/UserService');
        //(2)创建对象
        var userService = new UserService();
        //(3)对象初始化
        userService.init();
        //(4)验证用户都合法
        userService.checkUser(username, password, function (result) {
            if (result.state == 2) {
                req.session.sign = true;
                res.render('index', {state: 2});
            } else {
                res.render('index', {state: -1});
            }
        }, 1);
    }
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
        if(result.state==2){
            req.session.sign=true;
            res.cookie('username',result.username, {maxAge:60*60 *1000});
            res.cookie('password',result.password, {maxAge:60*60 *1000});
        }
        result.username=null;
        result.password=null;
        res.end(JSON.stringify(result));
    },0);
}




exports.contact=function(req,res) {
    if (req.session.sign) {
        res.render('contact', {state: 2});
        return;
    }

    var username = req.cookies.username;
    var password = req.cookies.password;

    if (username == null || password == null) {
        res.render('contact', {state: -1});
    } else {
        //(1)引入userService
        var UserService = require('../Service/UserService');
        //(2)创建对象
        var userService = new UserService();
        //(3)对象初始化
        userService.init();
        //(4)验证用户都合法
        userService.checkUser(username, password, function (result) {
            if (result.state == 2) {
                req.session.sign = true;
                res.render('contact', {state: 2});
            } else {
                res.render('contact', {state: -1});
            }
        }, 1);
    }
}



exports.pressroom=function(req,res) {
    if (req.session.sign) {
        res.render('pressroom', {state: 2});
        return;
    }

    var username = req.cookies.username;
    var password = req.cookies.password;

    if (username == null || password == null) {
        res.render('pressroom', {state: -1});
    } else {
        //(1)引入userService
        var UserService = require('../Service/UserService');
        //(2)创建对象
        var userService = new UserService();
        //(3)对象初始化
        userService.init();
        //(4)验证用户都合法
        userService.checkUser(username, password, function (result) {
            if (result.state == 2) {
                req.session.sign = true;
                res.render('pressroom', {state: 2});
            } else {
                res.render('pressroom', {state: -1});
            }
        }, 1);
    }
}



exports.product=function(req,res) {
    if (req.session.sign) {
        res.render('product', {state: 2});
        return;
    }

    var username = req.cookies.username;
    var password = req.cookies.password;

    if (username == null || password == null) {
        res.render('product', {state: -1});
    } else {
        //(1)引入userService
        var UserService = require('../Service/UserService');
        //(2)创建对象
        var userService = new UserService();
        //(3)对象初始化
        userService.init();
        //(4)验证用户都合法
        userService.checkUser(username, password, function (result) {
            if (result.state == 2) {
                req.session.sign = true;
                res.render('product', {state: 2});
            } else {
                res.render('product', {state: -1});
            }
        }, 1);
    }
}



exports.product_k=function(req,res) {
    if (req.session.sign) {
        res.render('product-k', {state: 2});
        return;
    }

    var username = req.cookies.username;
    var password = req.cookies.password;

    if (username == null || password == null) {
        res.render('product-k', {state: -1});
    } else {
        //(1)引入userService
        var UserService = require('../Service/UserService');
        //(2)创建对象
        var userService = new UserService();
        //(3)对象初始化
        userService.init();
        //(4)验证用户都合法
        userService.checkUser(username, password, function (result) {
            if (result.state == 2) {
                req.session.sign = true;
                res.render('product-k', {state: 2});
            } else {
                res.render('product-k', {state: -1});
            }
        }, 1);
    }
}



exports.product_m=function(req,res) {
    if (req.session.sign) {
        res.render('product-m', {state: 2});
        return;
    }
    console.log(11111);
    var username = req.cookies.username;
    var password = req.cookies.password;

    if (username == null || password == null) {
        res.render('product-m', {state: -1});
    } else {
        //(1)引入userService
        var UserService = require('../Service/UserService');
        //(2)创建对象
        var userService = new UserService();
        //(3)对象初始化
        userService.init();
        //(4)验证用户都合法
        userService.checkUser(username, password, function (result) {
            if (result.state == 2) {
                req.session.sign = true;
                res.render('product-m', {state: 2});
            } else {
                res.render('product-m', {state: -1});
            }
        }, 1);
    }
}



exports.shortcoder=function(req,res) {
    if (req.session.sign) {
        res.render('shortcoder', {state: 2});
        return;
    }

    var username = req.cookies.username;
    var password = req.cookies.password;

    if (username == null || password == null) {
        res.render('shortcoder', {state: -1});
    } else {
        //(1)引入userService
        var UserService = require('../Service/UserService');
        //(2)创建对象
        var userService = new UserService();
        //(3)对象初始化
        userService.init();
        //(4)验证用户都合法
        userService.checkUser(username, password, function (result) {
            if (result.state == 2) {
                req.session.sign = true;
                res.render('shortcoder', {state: 2});
            } else {
                res.render('shortcoder', {state: -1});
            }
        }, 1);
    }
}



exports.signup=function(req,res) {
    if (req.session.sign) {
        res.render('signup', {state: 2});
        return;
    }

    var username = req.cookies.username;
    var password = req.cookies.password;

    if (username == null || password == null) {
        res.render('signup', {state: -1});
    } else {
        //(1)引入userService
        var UserService = require('../Service/UserService');
        //(2)创建对象
        var userService = new UserService();
        //(3)对象初始化
        userService.init();
        //(4)验证用户都合法
        userService.checkUser(username, password, function (result) {
            if (result.state == 2) {
                req.session.sign = true;
                res.render('signup', {state: 2});
            } else {
                res.render('signup', {state: -1});
            }
        }, 1);
    }
}



exports.single=function(req,res) {
    if (req.session.sign) {
        res.render('single', {state: 2});
        return;
    }

    var username = req.cookies.username;
    var password = req.cookies.password;

    if (username == null || password == null) {
        res.render('single', {state: -1});
    } else {
        //(1)引入userService
        var UserService = require('../Service/UserService');
        //(2)创建对象
        var userService = new UserService();
        //(3)对象初始化
        userService.init();
        //(4)验证用户都合法
        userService.checkUser(username, password, function (result) {
            if (result.state == 2) {
                req.session.sign = true;
                res.render('single', {state: 2});
            } else {
                res.render('single', {state: -1});
            }
        }, 1);
    }
}


exports.terms=function(req,res) {
    if (req.session.sign) {
        res.render('terms', {state: 2});
        return;
    }

    var username = req.cookies.username;
    var password = req.cookies.password;

    if (username == null || password == null) {
        res.render('terms', {state: -1});
    } else {
        //(1)引入userService
        var UserService = require('../Service/UserService');
        //(2)创建对象
        var userService = new UserService();
        //(3)对象初始化
        userService.init();
        //(4)验证用户都合法
        userService.checkUser(username, password, function (result) {
            if (result.state == 2) {
                req.session.sign = true;
                res.render('terms', {state: 2});
            } else {
                res.render('terms', {state: -1});
            }
        }, 1);
    }
}


//数据库的


exports.product_m = function(req, res){
    console.log(2222)
    var ProductMale = require("../Dao/ProductMale");
    var productMale = new ProductMale.product_m();
    productMale.init();
    productMale.selectProducts(function(data){
        if (req.session.sign) {
            res.render('product-m', {state: 2,works:data});
            return;
        }

        var username = req.cookies.username;
        var password = req.cookies.password;

        if (username == null || password == null) {
            res.render('product-m', {state: -1,works:data});
        } else {
            //(1)引入userService
            var UserService = require('../Service/UserService');
            //(2)创建对象
            var userService = new UserService();
            //(3)对象初始化
            userService.init();
            //(4)验证用户都合法
            userService.checkUser(username, password, function (result) {
                if (result.state == 2) {
                    req.session.sign = true;
                    res.render('product-m', {state: 2,works:data});
                } else {
                    res.render('product-m', {state: -1,works:data});
                }
            }, 1);
        }
    });

};


exports.product = function(req, res){
    console.log(1111)
    var ProductMale = require("../Dao/ProductMale");
    var productMale = new ProductMale.product();
    productMale.init();
    productMale.selectProducts(function(data){
        if (req.session.sign) {
            res.render('product', {state: 2,works:data});
            return;
        }

        var username = req.cookies.username;
        var password = req.cookies.password;

        if (username == null || password == null) {
            res.render('product', {state: -1,works:data});
        } else {
            //(1)引入userService
            var UserService = require('../Service/UserService');
            //(2)创建对象
            var userService = new UserService();
            //(3)对象初始化
            userService.init();
            //(4)验证用户都合法
            userService.checkUser(username, password, function (result) {
                if (result.state == 2) {
                    req.session.sign = true;
                    res.render('product', {state: 2,works:data});
                } else {
                    res.render('product', {state: -1,works:data});
                }
            }, 1);
        }
    });

};

exports.product_k = function(req, res){
    console.log(3333)
    var ProductMale = require("../Dao/ProductMale");
    var productMale = new ProductMale.product_k();
    productMale.init();
    productMale.selectProducts(function(data){

        if (req.session.sign) {
            res.render('product-k', {state: 2,works:data});
            return;
        }

        var username = req.cookies.username;
        var password = req.cookies.password;

        if (username == null || password == null) {
            res.render('product-k', {state: -1,works:data});
        } else {
            //(1)引入userService
            var UserService = require('../Service/UserService');
            //(2)创建对象
            var userService = new UserService();
            //(3)对象初始化
            userService.init();
            //(4)验证用户都合法
            userService.checkUser(username, password, function (result) {
                if (result.state == 2) {
                    req.session.sign = true;
                    res.render('product-k', {state: 2,works:data});
                } else {
                    res.render('product-k', {state: -1,works:data});
                }
            }, 1);
        }
    });

};

//购物车
exports.checkout = function(req, res){

        var ProductMale = require("../Dao/UserDao3");
        var productMale = new ProductMale.checkout();
        productMale.init();
        productMale.selectProducts(function(data){
        if (req.session.sign) {
            res.render('checkout', {state: 2,works:data});
            return;
        }

        var username = req.cookies.username;
        var password = req.cookies.password;

        if (username == null || password == null) {
            res.render('checkout', {state: -1,works:data});
        } else {
            //(1)引入userService
            var UserService = require('../Service/UserService');
            //(2)创建对象
            var userService = new UserService();
            //(3)对象初始化
            userService.init();
            //(4)验证用户都合法
            userService.checkUser(username, password, function (result) {
                if (result.state == 2) {
                    req.session.sign = true;
                    res.render('checkout', {state: 2, works: data});
                } else {
                    res.render('checkout', {state: -1, works: data});
                }

                res.end(JSON.stringify(result));
            }, 1);
        }
    });
};



