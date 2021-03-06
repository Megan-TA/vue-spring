/*
 * token中间件（强校验）
 * @Author: chen_huang
 * @Date: 2017-11-11 17:58:48
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-08 15:31:44
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
                req.body.userName = result.userName
                next()
            }
            return
        })
    } else {
        resState(res, false, '必须提供token')
    }
}
