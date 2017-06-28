/**
 * Created by zhangjinpei on 2017/6/28.
 */

import HelloWorld from '../view/HelloWorld';
import FetchData from '../view/FetchData';

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
});
