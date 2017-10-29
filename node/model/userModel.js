/*
 * 用户登录状态模型
 * @Author: chen_huang
 * @Date: 2017-10-19 17:19:41
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-10-30 00:48:48
*/
const MONGODB = require('./db')

const USERINFO = 'user'

class User {
    constructor (userPhone, userPassWord) {
        this.userPhone = userPhone
        this.userPassWord = userPassWord
    }

    /**
     * 通过userPhone读取信息
     * @param {any} userPhone
     * @param {any} callback
     * @memberof User
     */
    get (callback) {
        let userInfo = {
            userPhone: this.userPhone,
            userPassWord: this.userPassWord
        }
        MONGODB.open((err, db) => {
            if (err) return callback(err)
            // 读取 users 集合
            db.collection(USERINFO, (err, collection) => {
                if (err) {
                    db.close()
                    return callback(err)
                }
                collection.findOne({
                    userPhone: userInfo.userPhone,
                    userPassWord: userInfo.userPassWord
                }, (err, result) => {
                    db.close()
                    if (err) return callback(null, {state: 500})
                    if (result == null) return callback(null, {state: 400})
                    return callback(null, {
                        state: 200
                    })
                })
            })
        })
    }

    /**
     * 保存用户信息
     * @param {any} callback
     * @memberof User
     */
    save (callback) {
        let userInfo = {
            userPhone: this.userPhone,
            userPassWord: this.userPassWord
        }
        MONGODB.open((err, db) => {
            if (err) return callback(err)
            db.collection(USERINFO, (err, collection) => {
                if (err) {
                    db.close()
                    return callback(err)
                }
                collection.insert(userInfo, {
                    safe: true
                }, (err, result) => {
                    MONGODB.close()
                    if (err) return callback(null, {state: 500})
                    if (result == null) return callback(null, {state: 400})
                    console.log('保存成功！')
                    return callback(null, {
                        state: 200
                    })
                })
            })
        })
    }

    /**
     * 更新用户信息
     * @param {any} userPhone
     * @param {any} updateUserInfo
     * @param {any} callback
     * @memberof User
     */
    update (userPhone, updateUserInfo, callback) {
        MONGODB.open((err, db) => {
            if (err) return callback(db)
            db.collection(USERINFO, (err, collection) => {
                if (err) {
                    db.close()
                    return callback(err)
                }
                collection.update({
                    'userPhone': userPhone
                }, {
                    $set: updateUserInfo
                }, (err, result) => {
                    MONGODB.close()
                    if (err) return callback(err)
                    return callback(null)
                })
            })
        })
    }
}

module.exports = User
