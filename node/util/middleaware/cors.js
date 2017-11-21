/*
 * cors中间层
 * @Author: chen_huang
 * @Date: 2017-11-21 17:54:00
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-11-21 17:55:47
*/
module.exports = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', '*')
    res.header('Access-Control-Allow-Headers', '*')
    next()
}
