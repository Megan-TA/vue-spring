/*
 * 拍品详情页服务层
 * @Author: chen_huang
 * @Date: 2017-12-01 15:06:42
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-12 12:56:24
*/
import xhr from 'services/xhr/promise'

class AuctionDetailService {
    getAuctionDetailInfo (userData) {
        return xhr({
            url: '/api/auctionDetail/getDetailInfos',
            data: userData
        })
    }
    nowOffer (userData) {
        return xhr({
            url: '/api/auctionDetail/nowOffer',
            data: userData
        })
    }
}

export default new AuctionDetailService()
