/*
 * mongoose连接数据库配置
 * @Author: chen_huang
 * @Date: 2017-11-11 14:06:34
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-11-11 14:10:16
 */
const mongoose = require('mongoose')
const settings = require('../settings')
module.exports = mongoose.createConnection(settings.database)
