/**
 * Created by zjp on 2017/6/29.
 * Desc:
 */
import React, {Component} from 'react';
import { ScrollView, View, Text } from 'react-native';
import Banner from './Banner';
import Article from '../../Article';

export default class Recommendation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: 'hello'
        };
    }
    static navigationOptions = {
        tabBarLabel: 'Home',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    };

    handleScroll() {
        //在滚动的过程中，每帧最多调用一次此回调函数。
        // 调用的频率可以用scrollEventThrottle属性来控制。
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView
                ref="scrollView"
                horizontal={false}//设置是否是横向滚动
                onScroll={this.handleScroll}
                removeClippedSubviews={false}//实验特性，可以优化滚动性能,会引起react-swiper 第一次不显示的bug
                showsVerticalScrollIndicator={false}//是否显示垂直滚动条
            >
                <Banner />
                <Article />
            </ScrollView>
        );
    }
}