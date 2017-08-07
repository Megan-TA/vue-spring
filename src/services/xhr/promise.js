/*
 * @Author: chen_huang 
 * @Date: 2017-08-06 14:10:45 
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-08-07 00:59:18
 */

/* eslint-disable no-undef, no-unused-vars */
import axios from 'axios';
import qs from 'qs';

const xhr = ({ method = 'post', url, data = null }) => {
    axios({
        method: method,
        url: url,
        data: qs.stringify(data)
    })
    .then(res => {
        const { code, resultMsg } = res;
        if (code === '666') {
            return console.warn('调用成功！');
        } else if (code === '500' || code === '400') {
            return console.warn('系统内部原因！');
        } else {
            return console.warn(resultMsg);
        }
    });
};

export default xhr;
