import xhr from './xhr/promise'

class LoginService {

    login (userData) {
        return xhr({
            url: '/api/user/login',
            data: userData
        })
    };

}

export default new LoginService()
