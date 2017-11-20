/*
 * 封装接口返回状态值
 * @Author: chen_huang
 * @Date: 2017-11-20 15:49:39
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-11-20 15:54:49
*/

module.exports = function (res, flag, message) {
    res.json({
        success: flag || false,
        message: message
    })
}
