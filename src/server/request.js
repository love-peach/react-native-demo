/**
 * Created by zhangjinpei on 2017/6/27.
 */

import fetchUtil from './fetchUtil'
import Interface from './interface'

export default {
    // 搜索
    searchByWord(params) {
        const options = {
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
            }
        }
        return fetchUtil.post(Interface.search, params, options)
    },
    
    // 获取歌词
    getSingWord(params) {
        return fetchUtil.get(Interface.getSingWord, params);
    },
    
    // 获取歌单详情
    getSongListDetail(params) {
        return fetchUtil.get(Interface.getSongListDetail, params);
    },
}