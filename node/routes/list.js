/*
 * 拍卖列表页路由
 * @Author: chen_huang
 * @Date: 2017-11-29 15:02:02
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-01 16:38:08
*/
const express = require('express')
const router = express.Router()
const List = require('../model/list')
const resState = require('../util/resState')

router.post('/getListInfos', (req, res) => {

    List.find({}, (err, doc) => {
        if (err) throw err
        res.json(doc)
    })
})

module.exports = router
