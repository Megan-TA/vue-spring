/*
 * 拍品详情页
 * @Author: chen_huang
 * @Date: 2017-12-01 14:46:30
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-04 14:03:42
*/
const express = require('express')
const router = express.Router()
const $token = require('../util/middleware/check_token')
const ListModel = require('../model/list')

router.post('/getDetailInfos', (req, res) => {
    let { coinId } = req.body
    ListModel
        .find({
            'list._id': coinId
        })
        .exec((err, doc) => {
            if (err) throw err
            doc[0].list.filter((item) => {
                if (item._doc._id == coinId) {
                    res.json({
                        result: item
                    })
                }
            })
        })
})

module.exports = router
