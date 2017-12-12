/*
 * 订单
 * @Author: chen_huang
 * @Date: 2017-12-12 14:41:08
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-12 16:15:30
*/
import xhr from 'services/xhr/promise'

class OrderService {
    getOrder (userData) {
        return xhr({
            url: '/api/order/getOrder',
            data: userData
        })
    }
    payment (userData) {
        return xhr({
            url: '/api/order/payment',
            data: userData
        })
    }
}

export default new OrderService()
