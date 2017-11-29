/*
 * 拍卖列表页Service
 * @Author: chen_huang
 * @Date: 2017-11-29 15:52:03
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-11-29 17:55:57
*/
import xhr from 'services/xhr/promise'

class ListService {
    getListInfo (userData) {
        return xhr({
            url: '/api/list/getListInfos',
            data: userData
        })
    }
}

export default new ListService()
