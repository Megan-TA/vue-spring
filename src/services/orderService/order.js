/*
 * 订单
 * @Author: chen_huang
 * @Date: 2017-12-12 14:41:08
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-18 16:47:24
*/
import xhr from 'services/xhr/promise'

class OrderService {
    getOrder (userData) {
        return xhr({
            url: '/api/order/getOrder',
            data: userData
        })
    }
    // -------买入订单相关----
    payment (userData) {
        return xhr({
            url: '/api/order/payment',
            data: userData
        })
    }
    getInAllOrder (userData) {
        return xhr({
            url: '/api/order/getInAllOrder',
            data: userData
        })
    }
    getInNopayOrder (userData) {
        return xhr({
            url: '/api/order/getNopayOrder',
            data: userData
        })
    }
    // -------卖出订单相关----
    getOutAllOrder (userData) {
        return xhr({
            url: '/api/order/getOutAllOrder',
            data: userData
        })
    }
}

export default new OrderService()
