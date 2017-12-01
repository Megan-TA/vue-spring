/*
 * 拍品详情页
 * @Author: chen_huang
 * @Date: 2017-12-01 14:46:30
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-01 15:38:24
*/
const express = require('express')
const router = express.Router()
const $token = require('../util/middleware/check_token')
const AuctionDetail = require('../model/auctionDetail')

router.post('/getDetailInfos', (req, res) => {
    AuctionDetail
        .find({})
        .populate({
            path: '_coinInfo',
            select: 'list'
        })
        .exec((err, doc) => {
            if (err) throw err
            res.json({
                success: true,
                result: doc
            })
        })
})

module.exports = router
