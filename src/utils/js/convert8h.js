/*
 * 处理返回结果转成+8
 * @Author: chen_huang
 * @Date: 2017-12-05 18:31:42
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-05 19:01:32
*/
let moment = require('moment')

module.exports = (time) => {
    return moment(time).format('YYYY-MM-DD HH:mm:ss')
}
