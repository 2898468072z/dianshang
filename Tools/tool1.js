exports.crypto=function(data){
    var crypto = require('crypto');
    var md5 = crypto.createHash('md5');
    var buffer = md5.update(data).digest('hex');
    return buffer;

}