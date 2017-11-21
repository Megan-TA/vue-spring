import xhr from './xhr/promise'

class RegisterService {
    register (userData) {
        return xhr({
            url: '/api/user/register',
            data: userData
        })
    }
}

export default new RegisterService()
