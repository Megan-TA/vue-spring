/*
 * 用户信息Service
 * @Author: chen_huang
 * @Date: 2017-12-08 13:09:44
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-08 13:16:15
*/
import xhr from 'services/xhr/promise'

class UserInfoService {
    getUserInfo (userData) {
        return xhr({
            url: 'api/user/getUserInfo',
            data: userData
        })
    }
}

export default new UserInfoService()
