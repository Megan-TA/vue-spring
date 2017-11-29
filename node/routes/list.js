/*
 * 拍卖列表页路由
 * @Author: chen_huang
 * @Date: 2017-11-29 15:02:02
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-11-29 19:32:15
*/
const express = require('express')
const settings = require('../settings')
const router = express.Router()
const $token = require('../util/middleware/check_token')
const _Auction = require('../model/middleware/_auction')

router.post('/getListInfos', $token, (req, res) => {
    _Auction.find()
        .populate('_list')
        .exec((err, doc) => {
            if (err) throw err
            console.log(doc)
        })
})

module.exports = router
