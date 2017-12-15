/*
 * 总路由
 * @Author: chen_huang
 * @Date: 2017-11-11 12:02:32
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-15 16:36:39
 */
const user = require('./user')
const list = require('./list')
const auctionDetail = require('./auctionDetail')
let order = require('./order')

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.json({
            message: 'hello router'
        })
    })
    app.get('/index', (req, res) => {
        res.render('index.ejs')
    })
    // 用户路由
    app.use('/api/user', user)
    // 列表路由
    app.use('/api/list', list)
    // 拍品详情页路由
    app.use('/api/auctionDetail', auctionDetail)
    // 订单路由
    app.use('/api/order', order)
}
