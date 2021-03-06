/*
 * 商品模型
 * @Author: chen_huang
 * @Date: 2017-11-11 20:32:49
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-01 14:51:49
 */
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const db = require('./config')

const AuctionSchema = new Schema({
    uid: {
        type: Schema.Types.ObjectId,
        require: true,
        unique: true
    },
    list: [{
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
            type: [{
                url: String
            }],
            require: true
        }
    }]
})

module.exports = db.model('Auction', AuctionSchema, 'Auction')

