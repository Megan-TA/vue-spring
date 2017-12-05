/*
 * 拍卖列表页路由
 * @Author: chen_huang
 * @Date: 2017-11-29 15:02:02
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-05 19:00:37
*/
const express = require('express')
const router = express.Router()
const List = require('../model/list')
const resState = require('../util/resState')
const $token = require('../util/middleware/check_token')

// 列表页
router.post('/getListInfos', (req, res) => {
    List.find({}, (err, doc) => {
        if (err) throw err
        res.json(doc)
    })
})

// 拍品详情页报价
router.post('/nowOffer', $token, (req, res) => {
    let {uid, offer, title} = req.body
    let nowDate = new Date()
    let nowDate2Time = nowDate.getTime()
    let name = 'test'
    // 批量更新数据
    List.bulkWrite([
        {
            updateMany: {
                filter: {
                    'list.title': title
                },
                update: {
                    $push: {
                        'list.$.record': {
                            name: name,
                            date: nowDate2Time,
                            offer: offer,
                            offerUid: uid
                        }
                    },
                    $set: {
                        'list.$.offer': offer
                    }
                }
            }
        }
    ]).then((handleResult) => {
        if (handleResult.isOk()) {
            res.json({
                success: true,
                result: {
                    name: 'test',
                    offer: offer,
                    date: nowDate,
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

    // List.update({
    //     'list.title': title
    // }, {
    //     $push: {
    //         'list.$.record': {
    //             name: 'test',
    //             date: nowDate.getTime(),
    //             offer: offer,
    //             offerUid: uid
    //         }
    //     },
    //     $set: {
    //         offer: offer
    //     }
    // })
    // .then((doc) => {
    //     res.json({
    //         success: true,
    //         message: '报价成功',
    //         result: {
    //             date: nowDate,
    //             offer: offer,
    //             name: 'test'
    //         }
    //     })
    // })
    // .catch((err) => {
    //     resState(res, false, '报价失败')
    //     console.log(err)
    // })
})

module.exports = router
