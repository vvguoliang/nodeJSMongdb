

var express = require('express');
var routerAdmin = express.Router();

var FileMangement = require('../models/FileManagement'); // 文件上传

routerAdmin.use(function (req, res, next) {
    //对进入用户身份进行验证
    if (!req.userInfo.isAdmin) {
        res.send('你不是管理员，不能访问后台管理！');
        return;
    }
    next();
});


routerAdmin.post('/U3D', function (req, res, next) {

    var reqbody = req.body;
    var limit = reqbody.limit | 20;
    var page = reqbody.page | 1;
    var type1 = reqbody.type1;
    var type2 = reqbody.type2;
    var platform = reqbody.platform;
    var skip = (page - 1) * limit;
    console.log("======" + JSON.stringify(reqbody));
    FileMangement.find().sort({ _id: -1 }).limit(limit).skip(skip).then(function (fileManagements) {
        console.log("====" + fileManagements.length);
        console.log('=====' + JSON.stringify(fileManagements));
    });
});
module.exports = routerAdmin;