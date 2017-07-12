/**
 * Created by zhangjinpei on 2017/6/28.
 */
import react from 'react';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';
import HeaderBar from '../framework/header-bar/headerBar';
import SidePanel from '../framework/side-panel/sidePanel';
import MineMusic from '../view/mine-music/mineMusic';
import Friend from '../view/friend/friend';
import FoundMusic from '../view/found-music/foundMusic'
import FetchData from '../view/fetchData';
import HelloWorld from '../view/helloWorld';

// 定义主屏幕三个 Tab 切换页面
const MainScreenNavigator = TabNavigator(
    {
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
    },
    {
        initialRouteName: 'FoundMusic',
        tabBarComponent: HeaderBar,
        lazy: true,
    }
);

// 定义页面路由 带 tab 切换(大Tab) 带侧边栏
const PageRouters = DrawerNavigator(
    {
        Home: {
            screen: MainScreenNavigator,
        },
        MineMusic: {
            name: '我的音乐',
            description: '',
            screen: MineMusic,
        },
        FetchData: {
            name: '异步请求',
            description: 'ajax request',
            screen: FetchData,
        },
        HelloWorld: {
            name: '欢迎页面',
            description: '',
            screen: HelloWorld,
        }
    },
    {
        initialRouteName: 'Home',
        // headerMode: 'none',
        drawerWidth: 265, // 抽屉宽
        drawerPosition: 'left', // 抽屉在左边还是右边
        contentComponent: HelloWorld,  // 自定义抽屉组件
    }
);

// 定义页面路由 带 tab 切换(大Tab)
const SimpleApp = StackNavigator(
    {
        Home: {
            screen: MainScreenNavigator
        },
        FetchData: {
            name: '异步请求',
            description: 'ajax request',
            screen: FetchData,
        },
        HelloWorld: {
            name: '欢迎页面',
            description: '',
            screen: HelloWorld,
        }
    },
    {
        // headerMode: 'none',
    }
);

export default PageRouters;