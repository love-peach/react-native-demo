/**
 * Created by zhangjinpei on 2017/6/28.
 */

import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';
import HeaderBar from '../framework/header-bar/HeaderBar';
import SidePanel from '../framework/side-panel/SidePanel';
import MineMusic from '../view/mine-music/MineMusic';
import Friend from '../view/friend/Friend';
import FoundMusic from '../view/found-music/FoundMusic'
import FetchData from '../view/FetchData';
import HelloWorld from '../view/HelloWorld';

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
        headerMode: 'none',
        activeTintColor: 'red',
        lazy: true,
    }
);

const UserInfoPanel = DrawerNavigator(
    {
        Home: {
            screen: SidePanel,
        },
    },
    {
        drawerWidth: 200, // 抽屉宽
        drawerPosition: 'left', // 抽屉在左边还是右边
        // contentComponent: CustomDrawerContentComponent,  // 自定义抽屉组件
        contentOptions: {
            initialRouteName: SidePanel, // 默认页面组件
            activeTintColor: 'white',  // 选中文字颜色
            activeBackgroundColor: '#ff8500', // 选中背景颜色
            inactiveTintColor: '#666',  // 未选中文字颜色
            inactiveBackgroundColor: '#fff', // 未选中背景颜色
            style: {  // 样式

            }
        }
    }
);

// 定义页面路由
const SimpleApp = StackNavigator(
    {
        Home: {
            screen: MainScreenNavigator
        },
        UserInfo: {
            screen: UserInfoPanel,
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
        headerMode: 'none',
    }
);

export default SimpleApp;