/*
 * 用户登录状态模型
 * @Author: chen_huang
 * @Date: 2017-10-19 17:19:41
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-10-19 19:27:26
*/
const MONGODB = require('./db')

const USERINFO = 'userInfo'

class User {
    constructor (userName, passWord) {
        this.userName = userName
        this.passWord = passWord
    }

    /**
     * 通过userName读取信息
     * @param {any} userName
     * @param {any} callback
     * @memberof User
     */
    get (userName, callback) {
        MONGODB.open((err, db) => {
            if (err) return callback(err)
            // 读取 users 集合
            db.collection(USERINFO, (err, collection) => {
                if (err) {
                    db.close()
                    return callback(err)
                }
                collection.findOne({
                    userName: userName
                }, (err, userInfo) => {
                    db.close()
                    if (err) return callback(err)
                    return callback(null, userInfo)
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
            userName: this.userName,
            passWord: this.passWord
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
                    if (err) return callback(err)
                    console.log('保存成功！')
                    return callback(null)
                })
            })
        })
    }

    /**
     * 更新用户信息
     * @param {any} userName
     * @param {any} updateUserInfo
     * @param {any} callback
     * @memberof User
     */
    update (userName, updateUserInfo, callback) {
        MONGODB.open((err, db) => {
            if (err) return callback(db)
            db.collection(USERINFO, (err, collection) => {
                if (err) {
                    db.close()
                    return callback(err)
                }
                collection.update({
                    'userName': userName
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
