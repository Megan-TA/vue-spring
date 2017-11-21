/*
 * token 权限验证
 * @Author: chen_huang
 * @Date: 2017-11-11 15:13:11
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-11-20 20:06:16
 */
const Strategy = require('passport-http-bearer').Strategy

const User = require('../user')

module.exports = (passport) => {
    passport.use(new Strategy(
        (token, done) => {
            User.findOne({
                token: token
            }, (err, user) => {
                if (err) {
                    return done(err)
                }
                if (!user) return done(null, false)
                return done(null, user)
            })
        }
    ))
}
