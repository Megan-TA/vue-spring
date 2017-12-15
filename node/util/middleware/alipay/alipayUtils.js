/*
 * 封装alipay一些静态方法
 * @Author: chen_huang
 * @Date: 2017-12-14 15:36:17
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-15 17:17:27
*/
let crypto = require('crypto')
let qs = require('querystring')

class AlipayUtils {
    /**
     * 对请求参数进行组装+编码,签名 然后返回已组装好签名的参数字符串
     * params 请求参数
     * @memberof AlipayUtils
     */
    processParams (params, privateKey, signType) {
        let spliceResult = this.spliceParams(params)
        let signResult = this.sign(spliceResult, privateKey, signType)
        params.sign = signResult
        return qs.stringify(params)
    }
    /**
     * 对请求参数进行组装
     * params 请求参数json
     * @memberof AlipayUtils
     */
    spliceParams (params) {
        let keys = []
        let unencodeStr = ''
        // 将请求参数key值塞入到数组便于编码 排序
        for (let key in params) {
            if (params[key] != null && params[key] != '') keys.push(key)
        }
        keys.sort()
        // 输出编码的字符和未编码的字符
        keys.forEach((keyItem, index) => {
            unencodeStr += `${keyItem}=${params[keyItem]}&`
        })
        unencodeStr = unencodeStr.slice(0, -1)
        return unencodeStr
    }
    /**
     * 对拼接请求参数后字符串进行私钥签名
     * privateKey 商户应用私钥
     * signType 加密类型 alipay推荐RSA2
     * @memberof AlipayUtils
     */
    sign (str, privateKey, signType) {
        let createSign
        if (signType == 'RSA2') {
            createSign = crypto.createSign('RSA-SHA256')
        } else {
            createSign = crypto.createSign('RSA-SHA1')
        }
        createSign.update(str, 'utf8')
        return createSign.sign(privateKey, 'base64')
    }
    /**
     * 对从支付宝返回过来的数据做验证 以识别身份真假
     * str 要验证的字符串
     * sign 要验证的签名
     * publicKey 支付宝公钥
     * @memberof AlipayUtils
     */
    signVerify (str, sign, publicKey, signType) {
        let createSign
        if (signType == 'RSA2') {
            createSign = crypto.createSign('RSA-SHA256')
        } else {
            createSign = crypto.createSign('RSA-SHA1')
        }
        createSign.update(str, 'utf-8')
        return createSign.verify(publicKey, sign, 'base64')
    }

}

module.exports = new AlipayUtils()
