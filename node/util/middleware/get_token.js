/*
 * 解析token获取uid不做登录限制
 * @Author: chen_huang
 * @Date: 2017-12-06 10:25:44
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-08 17:11:17
*/
const jwt = require('jsonwebtoken')
const Settings = require('../../settings')
const resState = require('../resState')
module.exports = (req, res, next) => {
    let token = req.body.token || req.query.token || req.cookies.token || req.headers['x-access-token']
    if (token) {
        // 确认token
        jwt.verify(token, Settings.tokenSecret, (err, result) => {
            if (err) {
                if (err.message == 'jwt expired') {
                    resState(res, false, 'token已过期')
                } else {
                    resState(res, false, 'token信息错误')
                }
            } else {
                req.body.uid = result.uid
                next()
            }
            return
        })
    } else {
        req.body.uid = ''
        next()
    }
}
