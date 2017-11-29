/*
 * 拍卖列表页模型 - 中间表
 * @Author: chen_huang
 * @Date: 2017-11-29 15:00:36
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-11-29 19:03:39
*/
const mongoose = require('mongoose')
const db = require('../config')
const Schema = mongoose.Schema

const ListSchema = new Schema({
    _list: {
        type: Schema.Types.ObjectId,
        ref: 'Auction'
    }
})

module.exports = db.model('_Auction', ListSchema, '_Auction')

