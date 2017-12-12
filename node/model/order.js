/*
 * 订单模型
 * @Author: chen_huang
 * @Date: 2017-12-12 14:03:02
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-12 17:22:15
*/
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const db = require('./config')

const OrderSchema = new Schema({
    _uid: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    _auctionId: {
        type: Schema.Types.ObjectId,
        ref: 'List',
        require: true
    },
    createTime: {
        type: Date,
        require: true
    },
    // 运输状态
    // 0 待发货
    // 1 待收货
    // 2 已收货
    // 3 已完成
    transportState: {
        type: Number,
        default: 0
    }
})

module.exports = db.model('Order', OrderSchema, 'Order')
