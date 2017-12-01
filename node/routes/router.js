/*
 * 总路由
 * @Author: chen_huang
 * @Date: 2017-11-11 12:02:32
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-01 15:06:01
 */
const user = require('./user')
const auction = require('./auction')
const list = require('./list')
const auctionDetail = require('./auctionDetail')

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.json({
            message: 'hello router'
        })
    })
    // 用户路由
    app.use('/api/user', user)
    // 商品路由
    app.use('/api/auction', auction)
    // 列表路由
    app.use('/api/list', list)
    // 拍品详情页路由
    app.use('/api/auctionDetail', auctionDetail)
}
