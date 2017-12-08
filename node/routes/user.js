/*
 * 用户路由
 * @Author: chen_huang
 * @Date: 2017-11-11 12:06:20
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-08 15:31:19
 */
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = require('../model/user')
const List = require('../model/list')
const jwt = require('jsonwebtoken')
const settings = require('../settings')
// const passport = require('passport')
const resState = require('../util/resState')
// 验证token中间件
const $token = require('../util/middleware/check_token')
// 上传图片中间件
const upload = require('../util/middleware/upload')
// xss
const $xss = require('../util/middleware/xss')

// require('../model/passport/passport')(passport)

// 注册
router.post('/register', (req, res) => {
    let { userName, userPhone, userPassword } = req.body
    if (!userPhone || !userPassword || !userName) {
        resState(res, false, '请输入您的账号密码')
    } else {
        let newUser = new User({
            userPhone: userPhone,
            userPassword: userPassword,
            userName: userName
        })
        newUser.save((err) => {
            if (err) {
                resState(res, false, '用户已存在')
            } else {
                resState(res, true, '创建成功')
            }
        })
    }
    return
})

// 登录
router.post('/login', (req, res) => {
    let { userPhone, userPassword } = req.body
    User.findOne({
        userPhone: userPhone
    }, (err, user) => {
        if (err) throw err
        if (!user) {
            resState(res, false, '认证失败, 用户不存在')
        } else if (user) {
            // 检查密码是否正确
            user.comparePassword(userPassword, (err, isMatch) => {
                if (isMatch && !err) {
                    let token = jwt.sign({
                        uid: user._id.toString(),
                        userName: user.userName
                    }, settings.tokenSecret, {
                        expiresIn: 2 * 24 * 60 * 60
                    })
                    user.token = token
                    user.save((err) => {
                        if (err) res.send(err)
                        res.json({
                            success: true,
                            message: '验证成功',
                            token: token,
                            userPhone: userPhone
                        })
                    })
                } else {
                    resState(res, false, '认证失败, 密码错误')
                }
            })
        }
    })
    return
})
// 退出
router.post('/logout', $token, (req, res) => {
    let ObjectID = req.body.ObjectID
    res.json({
        success: true,
        ObjectID: ObjectID
    })
})

router.post('/info', $token, (req, res) => {
    let ObjectID = req.body.ObjectID
    res.json({
        success: true,
        ObjectID: ObjectID
    })
})

// 发布商品
router.post('/release', $token, $xss, (req, res) => {
    let { uid, type, title, postage,
        price, priceStep, startTime,
        endTime, describe } = req.body
    let offer = Number(price) + Number(priceStep)
    let imgUrl = []
    // 上传图片可能多张 需要转换
    for (var i = 0; i <= 999999; i++) {
        if (req.body['imgUrl[' + i + '][url]']) {
            imgUrl.push({
                url: req.body['imgUrl[' + i + '][url]']
            })
        } else {
            break
        }
    }
    List.findOne({
        _uid: uid
    }, (err, oldListInfo) => {
        if (err) throw err
        // 创建新的List
        function createList () {
            List.create({
                _uid: uid,
                list: {
                    type: type,
                    title: title,
                    postage: postage,
                    price: price,
                    priceStep: priceStep,
                    startTime: startTime,
                    endTime: endTime,
                    describe: describe,
                    imgUrl: imgUrl,
                    offer: offer
                }
            }).then((info) => {
                if (info == null) throw info
                // 先创建列表页商品信息 之后再更新用户表关联商品表
                User.findOne({
                    _id: uid
                }, (err, doc) => {
                    if (err) {
                        console.log(err)
                        throw err
                    } else {
                        doc._list.push(info._id)
                        doc.save((err) => {
                            if (err) {
                                console.log(err)
                                throw err
                            } else {
                                console.log('联系人信息更新成功')
                                resState(res, true, '发布成功！')
                            }
                        })
                    }
                })
            })
        }
        // 更新List信息
        function updateList (oldListInfo) {
            List.update({
                _uid: uid
            }, {
                $push: {
                    'list': {
                        type: type,
                        title: title,
                        postage: postage,
                        price: price,
                        priceStep: priceStep,
                        startTime: startTime,
                        endTime: endTime,
                        describe: describe,
                        imgUrl: imgUrl,
                        offer: offer,
                        record: []
                    }
                }
            }, (err, doc) => {
                if (err) {
                    resState(res, false, '发布失败')
                    console.error(err)
                } else {
                    resState(res, true, '发布成功')
                }
            })
        }
        // 存在则更新
        if (oldListInfo) {
            updateList()
        } else {
            createList()
        }
    })
})

// 上传图片
router.all('/release/upload/images', upload.single('images'), (req, res) => {
    res.json({
        success: true,
        message: '上传成功！',
        imgUrl: req.body.imgUrl
    })
})
// 获取用户信息
router.post('/getUserInfo', $token, (req, res) => {
    let { uid } = req.body
    User.findOne({
        '_id': uid
    })
    .select('userPhone')
    .exec((err, doc) => {
        if (err) throw err
        res.json({
            result: doc,
            success: true
        })
    })
})

module.exports = router
