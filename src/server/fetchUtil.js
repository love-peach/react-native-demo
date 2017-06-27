/**
 * Created by zhangjinpei on 2017/6/27.
 */

import common from '../common/common'

export function fetchUtil(url, data, method = 'get', options = {}) {
    url = method === 'get' ? common.mosaicUrl(url, data) : url;
    const init = {
        method,
        // body: JSON.stringify(data),
        ...options
    }
    const fetchPromise = new Promise((resolve, reject) => {
        fetch(url, init)
            .then(response => resolve(response.json()))
            .catch((error) => reject(error))
    });


    // const fetchPromise = new Promise((resolve, reject) => {
    //     instance({
    //         method,
    //         url,
    //         data,
    //         cancelToken: new CancelToken(c => cancel = c),
    //         ...options,
    //     }).then(response => {
    //         resolve(response.data.result || response.data || response, response.data);
    //     }).catch((error) => {
    //         reject(error);
    //
    //     })
    // });
    // fetchPromise.cancel = function () {
    //     cancel({
    //         canceled: true,
    //     });
    // };
    return fetchPromise;
}
export default {
    get(url, params, options) {
        return fetchUtil(url, params, 'get', options);
    },
    post(url, params, options) {
        return fetchUtil(url, params, 'post', options);
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