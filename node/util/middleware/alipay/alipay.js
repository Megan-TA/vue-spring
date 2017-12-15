/*
 * 封装alipay
 * @Author: chen_huang
 * @Date: 2017-12-14 14:03:29
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-15 17:14:41
*/
const APP_PRIVATE_KEY = 'MIIEwAIBADANBgkqhkiG9w0BAQEFAASCBKowggSmAgEAAoIBAQCqOOR5nImMT77T0md4+KtoJjsasgA9wEF+sHxtH7Fov2P97DMQLIe4p7zHVGr0uWemxtKxwKJHcUCWPMjJmzOXnEuO0t8SAklyElJM6l59IaBL6S50aSEOXYdUDIvNssgnlobVzrAOpg9ix8vy7S2q4wYa7CArtmC6S784twa7hJM2SJz2nCYyDMue6ewLSuVAplJxPIAmIBlSAvxxGYWon8Qbdh9W0qKHf3pd2J8QxuviIRfWewaNIyw4SViRcTz0hy4HmvFQcOu/jx5/Ear4JIxwnWT+WKJRcrEKezJVCyUhuk7BzvhsNiZLHQ0+X711BOdUUT7K9VCPcCt6+GD3AgMBAAECggEBAIakJaRDu1CuqyRlIs8+8mWZB9sfvK0bazLIakLudKeD65WnxOQgNOJMWzfXgBo+pMv4LCPJWRLlc87iGXfOOUrMp7868JMQGAQQleSc5UxY0q/4q3QMy8bPGAHVQqfbqBIYMGLh78RGeZkKrDlkfWDT3bph1zh8M5pn28MCkmKzObK6g5XvyIu6h81lVyEbsQNjAoVIvCf6m16QGmO/T/9Ks9SwRrSexZSRV0GQbD1XA2SiAEiGImoHahBwzo4p5epfTfEG5eZNsCN9PVwlqEKizZV9odUU/SfFOXk3zAFrwfnDw+PCDyRaf4uw+0FKB1zg6xHNgylLj+T1cpsF+AECgYEA344xH2ykoqZi3ZvUlKHD0qcyS08hQiPf4JDzIEYY5Nlxd1oZSVZ1b6QTlPBtDEZ+HChiojdX5Vgh3mQfciW7rmtvCATRA9G2vZ9m4ClqhJXguZmsk5BORCZWKz1M68dD6U832buE2GI9CCk+L9aeBPqUA0eSAhCPQaz1gYNFpgECgYEAwu0zFb//KoRyxPlKKSBxt9hMzBPgoBzdi2iJpc5eRcVM7DEPbHE68dKMEPNXz4ZJFZi/iBGylmBObrWy7XfTcadwqfcH9ckkXWQI1KeOpzUF+6tbkjvXh7eFF+ic0mzAQPDfXv3TRYyqljcLSV5eB5P9vvLRNV2mmRR9QPvBNvcCgYEA2Cj8VJ9PXbo2tIM9/O2hlGl4lxsPVI2tps1hWN6OqZGbRkWHV8NS0D09dfE37/ulawKdxK5wveEG9qunQE8993wIIx/NHr1Dznx4E93YEhV98til5xVMqFbNUQf3/a9yegDQRycrX7M1wlNmvwjtSHEmdzlX88khS+a6iJ1u1gECgYEAmXV6cVYdQdDSNiZ4bxZe0LjWBRhlEEiJVjZvn3xvlYg1/gDFvr8KA9WZdcLOT8/Ne9Yse6hLK74YIWqkufVLHsAOn5Ce0K6RFYEqvphHY3YIBtEqH19DWFJv0pnL1JHPbZD0melEyg1rQyWEmjdT2a116D1r3RKklQGfdmh8/ZMCgYEAuHpWmXhX/HlmgV0cJqSXFhQQAi75yRr51bM0PbibnilyKK8Qo80YJPN9977/srMpW31J6hhpCzIsQkZgQZZCHYzjEHdwzaiKCKg/BzA3lzD9Ex6vkbsb7wgtnEiTsEMAsFZpPgJ/B0tGmuViiEV2Hmve6ubQpaNP728OY7bdth8='
const ALIPAY_PUBLIC_KEY = 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsU/2wURLq+ROFTq9VzUq8vj5aWNeMjfnunePG2LrXFQ+xP140xvpI3lg76V9FGc4/xFEfIZ5F7Zw9y512dpWFhM+zNMwfrBUGStnqhenBjg++gOHOWqMIMbg+tsaGQ9pk+vS1CPGQ6Ae4wqnfVJGBandancExhPYGt/GgUiNcyNv46S3dhkT5hI1XMw7BdcLYm3ijEmAHn7UAwadUcnbJQwH2IqiDlPe+wJsrNarUURm2YGVeepXKGub3NEL1V1DRIf/esuNAgea3rvjrQUJw7CtM/MyOFQSNl4v4v+OYp4JBfYQc+KAdcsBqG+PfgFAaZRBhX5pWzO6l+3r4R5C8QIDAQAB'
const NOTIFY_URL = 'http://127.0.0.1:3000/paynotify'
const RETURNURL = 'http://127.0.0.1:3000/returnURL'
const FAST_INSTANT_TRADE_PAY = 'FAST_INSTANT_TRADE_PAY'
const APP_PRIVATE_KEY_PEM = '-----BEGIN PRIVATE KEY-----\n' + APP_PRIVATE_KEY + '\n-----END PRIVATE KEY-----'
const ALIPAY_PUBLIC_KEY_PEM = '-----BEGIN PUBLIC KEY-----\n' + ALIPAY_PUBLIC_KEY + '\n-----END PUBLIC KEY-----'
let AlipayUtils = require('../alipay/alipayUtils')
let moment = require('moment')

class Alipay {
    constructor (opts) {
        this.APPID = opts.APPID
        this.URL = opts.URL
        this.APP_PRIVATE_KEY = APP_PRIVATE_KEY_PEM
        this.ALIPAY_PUBLIC_KEY = ALIPAY_PUBLIC_KEY_PEM
        this.FORMAT = 'json'
        this.CHARSET = 'utf-8'
        this.SIGN_TYPE = 'RSA2'
    }
    /**
     * 构建公共请求参数
     * method 地址
     * bizContent 具体请求参数
     * 缺一个sign参数
     * @memberof Alipay
     */
    makeParams (method, bizContent) {
        return {
            app_id: this.APPID,
            method: method,
            format: this.FORMAT,
            charset: this.CHARSET,
            sign_type: this.SIGN_TYPE,
            timestamp: moment().format('YYYY-MM-DD HH:mm:ss'),
            notify_url: NOTIFY_URL,
            return_url: RETURNURL,
            version: '1.0',
            biz_content: JSON.stringify(bizContent)
        }
    }
    /**
     * 电脑支付
     * @param {any} opts
     * @memberof Alipay
     */
    pcPay (opts) {
        // 构建请求参数
        let bizContent = {
            body: opts.body,
            subject: opts.subject,
            out_trade_no: opts.out_trade_no,
            product_code: FAST_INSTANT_TRADE_PAY,
            total_amount: opts.total_amount
        }
        let params = this.makeParams('alipay.trade.page.pay', bizContent)
        return AlipayUtils.processParams(params, this.APP_PRIVATE_KEY, this.SIGN_TYPE)
    }

}

module.exports = Alipay
