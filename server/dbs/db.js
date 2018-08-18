const mongoose = require('mongoose')
const config = require('../config/default')

mongoose.connect(config.dburl)
mongoose.Promise = global.Promise
const db = mongoose.connection
db.once('open',()=>{
    console.log('数据库已连接')
})
db.once('error',(err)=>{
    console.log('数据库链接异常',err)
})
db.once('close',()=>{
    console.log('数据库关闭')
})
module.exports = db;