/*
 * 申请卖家
 * @Author: chen_huang
 * @Date: 2017-12-18 16:58:28
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-18 17:00:47
*/

import xhr from 'services/xhr/promise'

class ApplyForBService {
    applyForB (userData) {
        return xhr({
            url: '/api/user/applyForB',
            data: userData
        })
    }
}

export default new ApplyForBService()
