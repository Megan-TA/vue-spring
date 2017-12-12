/*
 * 用户路由
 * @Author: chen_huang
 * @Date: 2017-11-11 12:06:20
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-12 10:40:53
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
        if (req.body[`imgUrl[${i}][url]`]) {
            imgUrl.push({
                url: req.body[`imgUrl[${i}][url]`]
            })
        } else {
            break
        }
    }

    List.create({
        _uid: uid,
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
    }).then((info) => {
        if (info == null) throw info
        return info
    }).then((info) => {
        // 更新当前用户List下商品信息
        User.update({
            _id: uid
        }, {
            $push: {
                _list: info._id
            }
        }).exec((err, doc) => {
            if (err) {
                return console.log(err)
            }
            resState(res, true, '发布成功')
        })
    })
    .catch((err) => {
        console.log(err)
        resState(res, false, '发布失败')
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
