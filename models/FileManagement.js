var mongoose = require('mongoose');
var fileMangementSchema = require('../schemas/filemanagement');

/*
*   文件管理
*
**/

module.exports = mongoose.model('FileMangement', fileMangementSchema);