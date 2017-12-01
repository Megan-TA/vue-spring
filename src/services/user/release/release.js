/*
 * 个人中心-发布商品
 * @Author: chen_huang
 * @Date: 2017-11-20 16:08:10
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-01 16:16:16
*/
import xhr from 'services/xhr/promise'

class ReleaseService {
    release (userData) {
        return xhr({
            url: 'api/user/release',
            data: userData
        })
    }
}

export default new ReleaseService()

