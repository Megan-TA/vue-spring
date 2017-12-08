/*
 * 拍品详情页
 * @Author: chen_huang
 * @Date: 2017-12-01 14:46:30
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-08 11:55:16
*/
const express = require('express')
const router = express.Router()
const $token = require('../util/middleware/check_token')
const ListModel = require('../model/list')
const $getToken = require('../util/middleware/get_token')
const resState = require('../util/resState')

router.post('/getDetailInfos', $getToken, (req, res) => {
    let { coinId, uid } = req.body
    ListModel
        .findOne({
            'list._id': coinId
        })
        .exec((err, doc) => {
            if (err) throw err
            if (doc.length == 0) {
                resState(res, false, '获取信息失败')
            }
            let listInfo = doc.list
            let isLogin = true
            let showOffer = true
            // uid不存在
            if (!uid) {
                isLogin = false
            }
            // 当前用户进入自己发布商品详情页不展示报价相关按钮
            if (doc._uid == uid) {
                showOffer = false
            }
            // 由于取出来的是一条文档数据 需要额外匹配修改list值
            for (let i = 0; i <= listInfo.length; i++) {
                if (listInfo[i]._id == coinId) {
                    let nowTime = new Date()
                    if (listInfo[i].endTime <= nowTime && listInfo[i].state == 0) {
                        console.log('竞拍已结束')
                        updateState(doc)
                    }
                    // 额外输出一些不存数据库的临时数据
                    doc.list[i]._doc.isLogin = isLogin
                    doc.list[i]._doc.showOffer = showOffer
                    res.json({
                        result: doc._doc.list[i],
                        success: true
                    })
                    break
                }
            }
        })
    // 更新拍品state
    function updateState (doc) {
        doc.list.map((item) => {
            if (item._id == coinId) {
                item.state = 1
            }
        })
        doc.save((err) => {
            if (err) throw err
            console.log('state修改成功')
        })
    }
})

module.exports = router
