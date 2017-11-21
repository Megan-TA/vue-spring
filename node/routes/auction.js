/*
 * 商品路由
 * @Author: chen_huang
 * @Date: 2017-11-11 20:30:57
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-11-20 20:05:47
 */
const express = require('express')
const Auction = require('../model/auction')
const router = express.Router()
const $token = require('../model/middle_check_token/middle_check_token')
const resState = require('../util/resState')

router.post('/auction/release', $token, (req, res) => {
    let { objectId, type, title, postage,
        price, priceStep, startTime,
        endTime, describe, imgUrl } = req.body

    let newAuction = new Auction({
        objectId: objectId,
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
        return
    })
})
