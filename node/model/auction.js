/*
 * 用户中心-发布拍品模型
 * @Author: chen_huang
 * @Date: 2017-11-14 09:17:43
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-11-14 09:20:59
 */
import xhr from './xhr/promise'

class Auction {
    release (userData) {
        return xhr({
            url: 'api/merchandise/auction/release',
            data: userData
        })
    }
}
export default new Auction()
