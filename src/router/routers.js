/**
 * Created by zhangjinpei on 2017/6/28.
 */

import HelloWorld from '../view/HelloWorld';
import FetchData from '../view/FetchData';
import MineMusic from '../view/mine-music/MineMusic';
import Friend from '../view/friend/Friend';
import FoundMusic from '../view/found-music/FoundMusic'

export default ({
    Home: {
        name: '首页',
        description: 'hello world',
        screen: HelloWorld,
    },
    FetchData: {
        name: '异步请求',
        description: 'ajax request',
        screen: FetchData,
    },
    MineMusic: {
        name: '我的音乐',
        description: '',
        screen: MineMusic,
    },
    FoundMusic: {
        name: '发现音乐',
        description: '',
        screen: FoundMusic,
    },
    Friend: {
        name: '朋友圈',
        description: '',
        screen: Friend,
    },
});
