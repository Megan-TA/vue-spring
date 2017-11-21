var util = {
    /**
     * cookie 方法封装
     * cname key值
     * cvalue value值
     * exdays 天数
     * @param {any} cname
     * @param {any} cvalue
     * @param {any} exdays
     */
    setCookie (cname, cvalue, exdays) {
        let time = new Date()
        time.setTime(time.getTime() + (exdays * 24 * 60 * 60 * 1000))
        let expires = 'expires=' + time
        document.cookie = cname + '=' + cvalue + '; ' + expires
    },
    getCookie (cname) {
        let name = cname + '='
        let reg = new RegExp('(^| )' + name + '([^;]*)(;|$)')
        let arr = document.cookie.match(reg)
        if (arr) {
            return arr[2]
        } else {
            return null
        }
    },
    delCookie (cname) {
        this.setCookie(cname, '', -1)
    },
    /**
     * 解析url查询参数
     * ?a=1&b=2
     * @returns
     */
    urlParse () {
        let url = window.location.search
        let reg = /[?g][^?g]+=[^?g]+/g
        let arr = url.match(reg)
        let obj = {}
        if (arr) {
            arr.forEach((item) => {
                let temp = item.substring(1).split('=')
                let key = temp[0]
                let value = temp[1]
                obj[key] = value
            })
        }
        return obj
    }
}
export default util
