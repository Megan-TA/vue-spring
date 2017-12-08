/*
 * xss攻击防范
 * @Author: chen_huang
 * @Date: 2017-12-07 12:31:47
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-07 13:46:19
*/
let xss = require('xss')
module.exports = (req, res, next) => {
    for (let i in req.body) {
        req.body[i] = xss(req.body[i])
    }
    console.log(req.body)
    next()
}

