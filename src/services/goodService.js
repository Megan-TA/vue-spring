import xhr from './xhr/promise'

class GoodService {
    getGoodsList (userData) {
        return xhr({
            url: '/api/goods',
            data: userData
        })
    }
}

export default new GoodService()
