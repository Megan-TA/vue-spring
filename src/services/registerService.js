import xhr from './xhr/promise'

class RegisterService {
    register (userData) {
        return xhr({
            url: '/auction/user/goRegister',
            data: userData
        })
    }
}

export default new RegisterService()
