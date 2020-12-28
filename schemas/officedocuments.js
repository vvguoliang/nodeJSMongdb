var mongoose = require('mongoose');

//用户表结构
//此处只定义了 office Schema 然后在用户models中引用
var schema = new mongoose.Schema({
    username: String, //用户名
    name: String,  //文档名
    size: String,  //文档大小
    connect: String,  //文档连接
    time: String,   //文件上传时间
    type: String  //文档类型
});

module.exports = schema;