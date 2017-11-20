/*
 * 个人中心-发布商品
 * @Author: chen_huang
 * @Date: 2017-11-20 16:08:10
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-11-20 16:29:20
*/
import xhr from 'services/xhr/promise'

class AuctionService {
    release (userData) {
        return xhr({
            url: 'api/auction/release',
            data: userData
        })
    }
}

export default new AuctionService()

