/*
 * token中间件
 * @Author: chen_huang
 * @Date: 2017-11-11 17:58:48
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-11-21 14:10:32
 */
let jwt = require('jsonwebtoken')
let Settings = require('../../settings')
module.exports = (req, res, next) => {
    let token = req.body.token || req.query.token || req.cookies.token || req.headers['x-access-token']
    if (token) {
        // 确认token
        jwt.verify(token, Settings.tokenSecret, (err, result) => {
            if (err) {
                if (err.message == 'jwt expired') {
                    return res.json({
                        success: false,
                        message: 'token已过期'
                    })
                }
                return res.json({
                    success: false,
                    message: 'token信息错误'
                })
            } else {
                req.body.ObjectID = result.ObjectID
                next()
            }
        })
    } else {
        res.json({
            success: false,
            message: '必须提供token'
        })
    }
}
