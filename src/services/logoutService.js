import xhr from './xhr/promise'

class LogoutService {

    logout (userData) {
        return xhr({
            url: '/api/user/logout',
            data: userData
        })
    };

}

export default new LogoutService()
