/*
 * 商品列表模型
 * @Author: chen_huang
 * @Date: 2017-12-01 15:45:36
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-12 13:59:50
*/
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const db = require('./config')

const listSchema = new Schema({
    _uid: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    type: {
        type: String
    },
    title: {
        type: String
    },
    postage: {
        type: Number,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    priceStep: {
        type: Number,
        require: true
    },
    startTime: {
        type: Date,
        require: true
    },
    endTime: {
        type: Date,
        require: true
    },
    describe: {
        type: String,
        require: true
    },
    imgUrl: {
        type: [{
            url: String
        }],
        require: true
    },
    // 拍卖详情页录入相关数据
    // 报价
    offer: {
        type: Number
    },
    // 报价记录
    record: [
        {
            offerCreateDate: Date,
            name: String,
            offer: Number,
            offerUid: Schema.Types.ObjectId
        }
    ],
    // 拍品状态
    // 默认0 竞拍中
    // 1 已结束竞拍
    state: {
        type: Number,
        default: 0
    }
})

module.exports = db.model('List', listSchema, 'List')
