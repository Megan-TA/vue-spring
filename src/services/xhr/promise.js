/*
 * @Author: chen_huang
 * @Date: 2017-08-06 14:10:45
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-08-29 22:32:52
 */

/* eslint-disable no-undef, no-unused-vars */
import axios from 'axios'
import qs from 'qs'

const xhr = ({ method = 'post', url, data = null }) => {
    const promise = new Promise((resolve, reject) => {
        axios({
            method: method,
            url: url,
            data: qs.stringify(data)
        })
        .then(res => {
            const {
                data = res.data,
                code = res.data.code,
                resultMsg = res.data.resultMsg,
                status = res.data.status
            } = res
            resolve(data)
        })
        .catch(err => {
            reject(err)
        })
    })

    return promise
}

export default xhr
