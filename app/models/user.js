var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//导出User模块
module.exports = mongoose.model('User', new Schema({
  name: String,
  password: String,
  admin: Boolean
}));