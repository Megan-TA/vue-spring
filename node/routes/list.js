/*
 * 拍卖列表页路由
 * @Author: chen_huang
 * @Date: 2017-11-29 15:02:02
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-11-30 20:30:26
*/
const express = require('express')
const settings = require('../settings')
const router = express.Router()
const $token = require('../util/middleware/check_token')
const _Auction = require('../model/middleware/_auction')
const resState = require('../util/resState')

router.post('/getListInfos', $token, (req, res) => {
    _Auction.find({})
        .populate({
            path: '_list',
            select: 'list.title'
        })
        .exec((err, doc) => {
            if (err) throw err
            console.log(doc)
            // res.json(doc[0]._list.list)
        })
    console.log('========')
    _Auction.find({})
    .populate({
        path: '_list',
        select: 'list.title list.imgUrl.url'
    })
    .exec((err, doc) => {
        if (err) throw err
        console.log(doc)
        res.json(doc[0]._list.list)
    })
})

module.exports = router
