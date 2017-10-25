/*
 * 路由配置
 * @Author: chen_huang
 * @Date: 2017-10-19 13:54:10
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-10-26 00:26:54
*/
const UserModel = require('../model/userModel')

module.exports = (app) => {
    // app.get('/api/test/userName=:userName', (req, res) => {
    //     UserModel.get(req.params.userName, (err, result) => {
    //         if (err) return res.end('失败')
    //         res.json(result)
    //     })
    // })
    app.get('/', (req, res) => {
        res.json({
            state: 'suceess'
        })
    })

    app.post('/api/register', (req, res) => {
        let { userPhone, userPassWord } = req.body
        let User = new UserModel(userPhone, userPassWord)
        User.save((err, result) => {
            if (err) return res.end('失败')
            res.json(result)
        })
    })
}

