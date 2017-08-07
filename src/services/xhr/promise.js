/*
 * @Author: chen_huang 
 * @Date: 2017-08-06 14:10:45 
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-08-08 00:54:59
 */

/* eslint-disable no-undef, no-unused-vars */
import axios from 'axios';
import qs from 'qs';

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
            } = res;
            if (code === '666') {
                console.warn('调用成功！');
                resolve(res.data);
            } else if (code === '500' || code === '400') {
                console.warn('系统内部原因！');
            } else {
                console.warn(resultMsg);
            };
        })
        .catch(error => {
            console.error('调用api错误！');
            reject(error);
        });
    });

    return promise;
    
};

export default xhr;
