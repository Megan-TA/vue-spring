/*
 * 订单路由
 * @Author: chen_huang
 * @Date: 2017-12-12 14:08:37
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-12 18:27:00
*/
const express = require('express')
const router = express.Router()
const OrderModel = require('../model/order')
const ListModel = require('../model/list')
const $token = require('../util/middleware/check_token')
const resState = require('../util/resState')

// 获取订单信息
router.post('/getOrder', $token, (req, res) => {
    let {uid, transportState} = req.body
    let nowDate = new Date()
    // 根据发货状态判断取哪一张表数据
    if (transportState) {
        OrderModel
            .find({
                _uid: uid,
                transportState: transportState
            }, {
                _id: 0
            })
            .populate({
                path: '_auctionId',
                select: 'offer title imgUrl'
            })
            .select('_auctionId')
            .exec()
            .then((doc) => {
                doc.to
                res.json({
                    result: doc,
                    success: true
                })
            })
            .catch((err) => {
                if (err) {
                    return console.log(err)
                }
            })
    } else {
        ListModel
            .find({
                _uid: uid,
                endTime: {
                    '$lt': nowDate
                }
            }, {
                _uid: 0,
                __v: 0,
                describe: 0,
                endTime: 0,
                postage: 0,
                price: 0,
                priceStep: 0,
                record: 0,
                startTime: 0
            })
            .exec((err, doc) => {
                if (err) {
                    return console.log(err)
                }
                res.json({
                    result: doc,
                    success: true
                })
            })
    }
})

// 付款
router.post('/payment', $token, (req, res) => {
    let {uid, auctionId, offer, title, imgUrl} = req.body
    let createTime = new Date().getTime()
    OrderModel.create({
        _uid: uid,
        _auctionId: auctionId,
        createTime: createTime,
        offer: offer,
        title: title,
        imgUrl: imgUrl
    }).then((doc) => {
        ListModel.update({
            _id: auctionId
        }, {
            $set: {
                state: 1
            }
        }).then((doc) => {
            if (doc.ok == 1) {
                resState(res, true, '付款成功')
            } else {
                resState(res, false, '付款失败')
            }
        }).catch((err) => {
            resState(res, false, '付款失败')
            console.log(err)
        })
    }).catch((err) => {
        resState(res, false, '付款失败')
        console.log(err)
    })
})

module.exports = router
