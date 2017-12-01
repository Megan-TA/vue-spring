/*
 * 商品路由
 * @Author: chen_huang
 * @Date: 2017-11-11 20:30:57
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-01 14:21:15
 */
const express = require('express')
const router = express.Router()

const Auction = require('../model/auction')
// model中间件
const _Auction = require('../model/middleware/_auction')
// utils中间件
const resState = require('../util/resState')
const upload = require('../util/middleware/upload')
const $token = require('../util/middleware/check_token')

router.post('/release', $token, (req, res) => {
    let { ObjectID, type, title, postage,
        price, priceStep, startTime,
        endTime, describe } = req.body
    let imgUrl = []
    for (var i = 0; i <= 999999; i++) {
        if (req.body['imgUrl[' + i + '][url]']) {
            imgUrl.push({
                url: req.body['imgUrl[' + i + '][url]']
            })
        } else {
            break
        }
    }
    Auction.findOne({
        uid: ObjectID
    }, (err, oldListInfo) => {
        if (err) throw err
        // 存在则更新
        if (oldListInfo) {
            oldListInfo._doc.list.push({
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
            oldListInfo.save((err) => {
                if (err) {
                    resState(res, false, '发布失败')
                    console.error(err)
                } else {
                    resState(res, true, '发布成功')
                }
            })
        } else {
            Auction.create({
                uid: ObjectID,
                list: {
                    type: type,
                    title: title,
                    postage: postage,
                    price: price,
                    priceStep: priceStep,
                    startTime: startTime,
                    endTime: endTime,
                    describe: describe,
                    imgUrl: imgUrl
                }
            }).then((info) => {
                
                // 中间件 用户创建商品信息同时生成_Auction
                let _newAuction = new _Auction({
                    _list: info._id
                })
                _newAuction.save((err) => {
                    if (err) throw err
                })
                resState(res, true, '发布成功！')
                
            })
        }
    })
})
// 上传图片
router.all('/release/upload/images', upload.single('images'), (req, res) => {
    res.json({
        success: true,
        message: '上传成功！',
        imgUrl: req.imgUrl
    })
})

module.exports = router
