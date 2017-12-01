/*
 * 商品列表模型
 * @Author: chen_huang
 * @Date: 2017-12-01 15:45:36
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-01 16:19:01
*/
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const db = require('./config')

const listSchema = new Schema({
    _uid: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    list: [{
        type: {
            type: String
        },
        title: {
            type: String
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

module.exports = db.model('list', listSchema, 'list')