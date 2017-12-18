/*
 * 订单路由
 * @Author: chen_huang
 * @Date: 2017-12-12 14:08:37
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-18 17:54:38
*/
const express = require('express')
const router = express.Router()
const OrderModel = require('../model/order')
const ListModel = require('../model/list')
const $token = require('../util/middleware/check_token')
const resState = require('../util/resState')
let Alipay = require('../util/middleware/alipay/alipay')

let Alipayment = new Alipay({
    APPID: '2016082600314118',
    URL: 'https://openapi.alipaydev.com/gateway.do'
})

// 获取订单信息
router.post('/getOrder', $token, (req, res) => {
    let {uid, transportState} = req.body
    // 根据发货状态判断取哪一张表数据
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
})

// 获取全部买入订单信息
router.post('/getInAllOrder', $token, (req, res) => {
    let {uid} = req.body
    let nowDate = new Date()
    ListModel
        .find({
            'record.offerUid': uid,
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
})

// 获取待付款订单信息
router.post('/getInNopayOrder', $token, (req, res) => {
    let {uid} = req.body
    let nowDate = new Date()
    ListModel
        .find({
            _uid: uid,
            endTime: {
                '$lt': nowDate
            },
            state: 0
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
})

// 付款
router.all('/payment', $token, (req, res) => {
    // let {_id, title, offer} = req.body._id
    let alipayReturn = Alipayment.pcPay({
        subject: 'as222222',
        out_trade_no: Math.random(),
        total_amount: 100.00
    })
    let tempUrl = `https://openapi.alipaydev.com/gateway.do?${alipayReturn}`

    console.log(tempUrl)
    res.json({
        url: tempUrl
    })
})

// 付款完成
router.get('/payResult', $token, (req, res) => {
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
// ----------------卖出订单相关-----------------
// 获取全部卖出订单信息
router.post('/getOutAllOrder', $token, (req, res) => {
    let {uid} = req.body
    ListModel
        .find({
            _uid: uid,
            state: 1
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
})

router.all('/paynotify', (req, res) => {
    res.render('test', {
        result: '111'
    })
})
router.get('/payreturn', (req, res) => {
    // 返回验签是否通过
    let state = Alipayment.signVerify(req)
    if (state) {
        res.render('test', {
            result: '222'
        })
    } else {
        res.render('test', {
            result: '非法'
        })
    }
})
module.exports = router
