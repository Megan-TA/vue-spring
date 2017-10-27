/*
 * 路由配置
 * @Author: chen_huang
 * @Date: 2017-10-19 13:54:10
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-10-27 09:22:12
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
        let session = req.session
        if (session.user) {
            res.json({
                state: 'suceess'
            })
        } else {
            session.user = 1
        }
    })

    app.post('/api/register', (req, res) => {
        let { userPhone, userPassWord } = req.body
        let User = new UserModel(userPhone, userPassWord)
        let session = req.session
        if (session.user) {
            console.log('session: ' + session.user)
        } else {
            session.user = 1
        }
        User.save((err, result) => {
            if (err) return res.end('失败')
            res.json(result)
        })
    })
}

