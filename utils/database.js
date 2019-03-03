var mongoose = require('mongoose');
const config = require('../config');
mongoose.connect(config.db, {useNewUrlParser: true});
var db = mongoose.connection;// 获取连接对象进行监听
db.on('error',(err)=>{
	console.log(error)
    console.log('数据库连接错误 太low了')
});
db.on('open', function() {
  console.log('数据库连接成功 德玛西亚万岁')
});
db.on('disconnected', function () {
    console.log('数据库已断开');
})
module.exports = {
    mongoose
}