/**
 * Created by zhangjinpei on 2017/6/27.
 */

import common from '../lib/common'
var qs = require('qs');

export function fetchUtil(url, params, method = 'get', options = {}) {
    const isGetMethod = method === 'get'
    const headers = options.headers ? {...options.headers} : null
    url = isGetMethod ? common.mosaicUrl(url, params) : url;
    const init = {
        method,
        headers,
        body: isGetMethod ? null : qs.stringify(params),
        ...options
    }
    const fetchPromise = new Promise((resolve, reject) => {
        fetch(url, init)
            .then(response => resolve(response.json()))
            .catch((error) => reject(error))
    });
    return fetchPromise;
}
export default {
    get(url, params, options) {
        return fetchUtil(url, params, 'get', options);
    },
    post(url, params, options) {
        return fetchUtil(url, params, 'POST', options);
    },
    put(url, params, options) {
        return fetchUtil(url, params, 'put', options);
    },
    patch(url, params, options) {
        return fetchUtil(url, params, 'patch', options);
    },
    del(url, params, options) {
        return fetchUtil(url, params, 'delete', options);
    },
}