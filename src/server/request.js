/**
 * Created by zhangjinpei on 2017/6/27.
 */

import fetchUtil from './fetchUtil'
import Interface from './interface'

export default {
    // 获取用户
    getUser() {
        return fetchUtil.get(Interface.user)
    },
}