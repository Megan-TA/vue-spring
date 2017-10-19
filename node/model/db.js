/*
 * db配置
 * @Author: chen_huang
 * @Date: 2017-10-19 13:40:45
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-10-19 13:41:06
*/
var settings = require('../settings')
var Db = require('mongodb').Db
// var Connection = require('mongodb').Connection
var Server = require('mongodb').Server

module.exports = new Db(settings.db, new Server(settings.host, settings.port, {safe: true}))
