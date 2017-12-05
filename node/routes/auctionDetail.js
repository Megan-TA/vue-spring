/*
 * 拍品详情页
 * @Author: chen_huang
 * @Date: 2017-12-01 14:46:30
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-05 14:14:51
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
            let listInfo = doc[0].list
            for (let i = 0; i <= listInfo.length; i++) {
                if (listInfo[i]._doc._id.toString() == coinId) {
                    res.json({
                        result: listInfo[i],
                        success: true
                    })
                    break
                }
            }
        })
})

module.exports = router
