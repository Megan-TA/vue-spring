/*
 * 拍品详情页
 * @Author: chen_huang
 * @Date: 2017-12-01 14:46:30
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-12 14:26:51
*/
const express = require('express')
const router = express.Router()
const $token = require('../util/middleware/check_token')
const ListModel = require('../model/list')
const $getToken = require('../util/middleware/get_token')
const resState = require('../util/resState')

// 获取拍品详细信息
router.post('/getDetailInfos', $getToken, (req, res) => {
    let { coinId, uid } = req.body
    ListModel.findOne({
        _id: coinId
    }, {
        _id: 0,
        __v: 0
    })
    .exec((err, doc) => {
        if (err) {
            return console.log(err)
        }
        doc._doc.isLogin = true
        doc._doc.showOffer = true
        if (!uid) {
            doc._doc.isLogin = false
        }
        if (doc._uid == uid) {
            doc._doc.showOffer = false
        }
        delete doc._doc._uid
        res.json({
            result: doc,
            success: true
        })
    })
})

// 拍品详情页报价
router.post('/nowOffer', $token, (req, res) => {
    let {uid, offer, userName, coinId} = req.body
    let nowDate = new Date()
    let nowDate2Time = nowDate.getTime()
    // 批量更新数据
    ListModel.bulkWrite([
        {
            updateMany: {
                filter: {
                    _id: coinId
                },
                update: {
                    $push: {
                        record: {
                            name: userName,
                            offerCreateDate: nowDate2Time,
                            offer: offer,
                            offerUid: uid
                        }
                    },
                    $set: {
                        offer: offer
                    }
                }
            }
        }
    ]).then((handleResult) => {
        if (handleResult.isOk()) {
            res.json({
                success: true,
                result: {
                    name: userName,
                    offer: offer,
                    offerCreateDate: nowDate,
                    message: '报价成功'
                }
            })
        } else {
            res.json({
                success: false,
                message: '报价失败'
            })
        }
    })
})

module.exports = router
