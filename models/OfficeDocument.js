var mongoose = require('mongoose');
var officedocumentSchema = require('../schemas/officedocuments');

/*
*   officedocument
*
**/

module.exports = mongoose.model('OfficeDocument', officedocumentSchema);