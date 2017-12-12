/*
 * 拍卖列表页路由
 * @Author: chen_huang
 * @Date: 2017-11-29 15:02:02
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-12 14:28:45
*/
const express = require('express')
const router = express.Router()
const ListModel = require('../model/list')
const resState = require('../util/resState')

// 列表页
router.post('/getListInfos', (req, res) => {
    let pageStart = Number(req.body.pageStart) - 1
    let pageSize = 1
    let total = 0
    // 获取拍品总数量
    ListModel
        .find({})
        .count({})
        .then((count) => {
            total = count
            console.log(count)
        })
        .catch((err) => {
            console.log(err)
        })
    // 输出拍品数据
    ListModel
        .find({}, {
            _uid: 0,
            _v: 0
        })
        .limit(pageSize)
        .skip(pageStart)
        .exec((err, doc) => {
            if (err) resState(res, false, '获取列表信息失败')
            res.json({
                result: doc,
                total: total,
                success: true
            })
        })
})

module.exports = router
