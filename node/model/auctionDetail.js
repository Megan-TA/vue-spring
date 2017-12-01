/*
 * 拍品详情页模型
 * @Author: chen_huang
 * @Date: 2017-12-01 14:47:59
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-01 15:28:59
*/
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const db = require('./config')

const AuctionDetailSchema = new Schema({
    _coinInfo: {
        type: Schema.Types.ObjectId,
        ref: 'Auction'
    }
})

module.exports = db.model('AuctionDetail', AuctionDetailSchema, 'AuctionDetail')
