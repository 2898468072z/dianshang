exports.index = function(req, res){

    var ProductMale = require("../Dao/ProductMale");
    var productMale = new ProductMale.index();
    productMale.init();
    productMale.selectProducts(function(result){

        res.render("product-m",{items:result})
    });

};


exports.product = function(req, res){

    var ProductMale = require("../Dao/ProductMale");
    var productMale = new ProductMale.product();
    productMale.init();
    productMale.selectProducts(function(result){

        res.render("product",{items:result})
    });

};

exports.product_k = function(req, res){

    var ProductMale = require("../Dao/ProductMale");
    var productMale = new ProductMale.product_k();
    productMale.init();
    productMale.selectProducts(function(result){

        res.render("product-k",{items:result})
    });

};


