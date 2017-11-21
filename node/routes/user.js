/*
 * 用户路由
 * @Author: chen_huang
 * @Date: 2017-11-11 12:06:20
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-11-21 14:11:04
 */
const express = require('express')
const User = require('../model/user')
const jwt = require('jsonwebtoken')
const settings = require('../settings')
// const passport = require('passport')
const router = express.Router()
// 验证token中间件
const $token = require('../model/middle_check_token/middle_check_token')

// require('../model/passport/passport')(passport)

// 注册
router.post('/register', (req, res) => {
    let { userPhone, userPassword } = req.body
    if (!userPhone || !userPassword) {
        res.json({
            success: false,
            message: '请输入您的账号密码'
        })
    } else {
        let newUser = new User({
            userPhone: userPhone,
            userPassword: userPassword
        })
        newUser.save((err) => {
            if (err) {
                res.json({
                    success: false,
                    message: '用户已存在'
                })
            } else {
                res.json({
                    success: true,
                    message: '创建成功'
                })
            }
            return
        })
    }
})

// 登录
router.post('/login', (req, res) => {
    let { userPhone, userPassword } = req.body
    User.findOne({
        userPhone: userPhone
    }, (err, user) => {
        if (err) throw err
        if (!user) {
            res.json({
                success: false,
                message: '认证失败, 用户不存在'
            })
        } else if (user) {
            // 检查密码是否正确
            user.comparePassword(userPassword, (err, isMatch) => {
                if (isMatch && !err) {
                    let token = jwt.sign({
                        ObjectID: user._id.toString()
                    }, settings.tokenSecret, {
                        expiresIn: 7 * 24 * 60 * 60
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
                    res.json({
                        success: false,
                        message: '认证失败, 密码错误'
                    })
                }
            })
        }
    })
})

router.post('/info', $token, (req, res) => {
    let ObjectID = req.body.ObjectID
    res.json({
        success: true,
        ObjectID: ObjectID
    })
})

module.exports = router
