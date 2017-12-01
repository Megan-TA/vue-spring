/*
 * 基于mongoose用户模型
 * @Author: chen_huang
 * @Date: 2017-11-11 11:49:32
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-01 15:52:39
 */
const mongoose = require('mongoose')
const db = require('./config')
const Schema = mongoose.Schema
// const bcrypt = require('bcrypt')

const UserSchema = new Schema({
    userPhone: {
        type: String,
        unique: true,   // 不可重复约束
        require: true
    },
    userPassword: {
        type: String,
        require: true
    },
    token: {
        type: String
    },
    _list: [{
        type: Schema.Types.ObjectId,
        ref: 'list'
    }]
})

// 添加用户保存时中间件对userPassword进行bcrypt加密
// UserSchema.pre('save', (next) => {
//     let user = this
//     if (this.isModified('userPassword') || this.isNew) {
//         next()
//     } else {
//         return next()
//     }
// })

// 校验用户输入密码是否正确
UserSchema.methods.comparePassword = (passw, cb) => {
    // bcrypt.compare(passw, this.userPassword, (err, isMatch) => {
    //     if (err) return cb(err)
    //     cb(null, isMatch)
    // })
    cb(null, true)
}

module.exports = db.model('User', UserSchema, 'User')
