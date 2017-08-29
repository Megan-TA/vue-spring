import xhr from './xhr/promise'

class LoginService {

    login (userData) {
        return xhr({
            url: '/auction/user/goLogin',
            data: userData
        })
    };

}

export default new LoginService()
