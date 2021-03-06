/*
 * 订单模型
 * @Author: chen_huang
 * @Date: 2017-12-12 14:03:02
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-13 10:52:19
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
    // 3 待发货
    // 4 待收货
    // 5 已收货
    // 6 已完成
    // 7 退货中
    // 8 已关闭
    transportState: {
        type: Number,
        default: 3
    }
})

module.exports = db.model('Order', OrderSchema, 'Order')
