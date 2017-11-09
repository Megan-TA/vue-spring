/*
 * 商品列表模型
 * @Author: chen_huang
 * @Date: 2017-11-07 00:01:31
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-11-07 00:32:51
 */
const MONGODB = require('./db')

const USERGOOD = 'user_good'

const STATE = {
    err: {
        state: 500,
        message: '内部错误'
    }
}

class UserGood {
    constructor (userGoodInfo) {
        this.userPhone = userGoodInfo.userPhone
        this.type = userGoodInfo.type
        this.title = userGoodInfo.title
        this.postage = userGoodInfo.postage
        this.price = userGoodInfo.price
        this.startTime = userGoodInfo.startTime
        this.endTime = userGoodInfo.endTime
        this.priceStep = userGoodInfo.priceStep
        this.describe = userGoodInfo.describe
        this.imgUrl = userGoodInfo.imgUrl
    }

    save (callback) {
        MONGODB.open((err, db) => {
            if (err) {
                db.close()
                return callback(null, STATE.err)
            }
            db.collection(USERGOOD, (err, collection) => {
                if (err) {
                    db.close()
                    return callback(null, STATE.err)
                }
                collection.insert({
                    userPhone: this.userPhone,
                    type: this.type,
                    title: this.title,
                    postage: this.postage,
                    price: this.price,
                    startTime: this.startTime,
                    endTime: this.endTime,
                    priceStep: this.priceStep,
                    describe: this.describe,
                    imgUrl: this.imgUrl
                }, (err, docs) => {
                    if (err) {
                        db.close()
                        return callback(null, STATE.err)
                    }
                    return callback(null, {
                        state: 200,
                        message: '插入成功'
                    })
                })
            })
        })
    }

}
