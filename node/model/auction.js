/*
 * 商品模型
 * @Author: chen_huang
 * @Date: 2017-11-11 20:32:49
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-11-21 17:05:48
 */
const mongoose = require('mongoose')
const db = require('./config')
const Schema = mongoose.Schema

const AuctionSchema = new Schema({
    ObjectID: {
        type: Schema.Types.ObjectId,
        unique: true,
        require: true
    },
    type: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    postage: {
        type: String,
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
        type: [String],
        require: true
    }
})

module.exports = db.model('Auction', AuctionSchema, 'Auction')