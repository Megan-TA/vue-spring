/*
 * 商品路由
 * @Author: chen_huang
 * @Date: 2017-11-11 20:30:57
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-11-21 19:36:56
 */
const express = require('express')
const Auction = require('../model/auction')
const router = express.Router()
const $token = require('../model/middle_check_token/middle_check_token')
const resState = require('../util/resState')
let upload = require('../util/middleaware/upload')

router.post('/release', $token, (req, res) => {
    let { ObjectID, type, title, postage,
        price, priceStep, startTime,
        endTime, describe, imgUrl } = req.body

    let newAuction = new Auction({
        ObjectID: ObjectID,
        type: type,
        title: title,
        postage: postage,
        price: price,
        priceStep: priceStep,
        startTime: startTime,
        endTime: endTime,
        describe: describe,
        imgUrl: imgUrl
    })
    newAuction.save((err) => {
        if (err) {
            resState(res, false, '发布失败！')
        } else {
            resState(res, true, '发布成功！')
        }
    })
})
// 上传图片
router.all('/release/upload/images', upload.single('images'), (req, res) => {
    return res.json({
        name: 'test'
    })
})

module.exports = router
