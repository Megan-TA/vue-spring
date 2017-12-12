/*
 * @Author: chen_huang
 * @Date: 2017-08-06 14:10:45
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-11 19:45:55
 */

/* eslint-disable no-undef, no-unused-vars */
import axios from 'axios'
import qs from 'qs'

const xhr = ({ method = 'post', url, data = null, header = {} }) => {
    const promise = new Promise((resolve, reject) => {
        axios({
            method: method,
            headers: header,
            url: url,
            data: qs.stringify(data)
        })
        .then(res => {
            const {
                result = res.data.result,
                message = res.data.message,
                success = res.data.success
            } = res
            if (success) {
                resolve(res.data)
            } else {
                reject(message)
            }
        })
        .catch(err => {
            reject(err)
        })
    })

    return promise
}

export default xhr
