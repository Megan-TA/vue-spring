/*
 * 用户登录状态模型
 * @Author: chen_huang
 * @Date: 2017-10-19 17:19:41
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-11-09 09:36:24
*/
const MONGODB = require('./db')

const USERINFO = 'user'

const state = {
    err: {
        state: 500,
        message: '内部错误'
    }
}

class User {
    constructor (userPhone, userPassWord, updateUserInfo) {
        this.userPhone = userPhone
        this.userPassWord = userPassWord
        this.updateUserInfo = updateUserInfo || {}
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
            if (err) return callback(null, state.err)
            // 读取 users 集合
            db.collection(USERINFO, (err, collection) => {
                if (err) {
                    db.close()
                    return callback(null, state.err)
                }
                collection.findOne({
                    userPhone: userInfo.userPhone,
                    userPassWord: userInfo.userPassWord
                }, (err, docs) => {
                    db.close()
                    if (err) return callback(null, state.err)
                    // if (result == null) return callback(null, {state: 400, message: '内部错误'})
                    return callback(null, {
                        state: 200,
                        message: '获取成功'
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
            if (err) return callback(null, err)
            db.collection(USERINFO, (err, collection) => {
                if (err) {
                    db.close()
                    return callback(err)
                }
                collection.find({
                    userPhone: userInfo.userPhone
                }).toArray((err, docs) => {
                    if (err) return callback(null, state.err)
                    if (docs.length > 0) return callback(null, {state: 304, message: '用户已注册'})

                    collection.insert(userInfo, {
                        safe: true
                    }, (err, docs) => {
                        MONGODB.close()
                        if (err) return callback(null, state.err)
                        if (docs == null) return callback(null, {state: 400, message: '插入数据成功'})
                        console.log('插入数据成功！')
                        return callback(null, {
                            state: 200,
                            message: '注册成功'
                        })
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
                    'userPhone': this.userPhone
                }, {
                    $set: this.updateUserInfo
                }, (err, docs) => {
                    MONGODB.close()
                    if (err) return callback(null, {state: 500, message: '内部数据错误'})
                    return callback(null, {
                        state: 200,
                        message: '更新成功'
                    })
                })
            })
        })
    }
}

module.exports = User
