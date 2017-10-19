/*
 * 路由配置
 * @Author: chen_huang
 * @Date: 2017-10-19 13:54:10
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-10-19 19:27:28
*/
let UserModel = require('../model/userModel')

module.exports = (app) => {
    app.get('/api/test/userName=:userName', (req, res) => {
        let User = new UserModel()
        User.get(req.params.userName, (err, result) => {
            if (err) return res.end('失败')
            res.json(result)
        })
    })
}

