/**
 * Created by zjp on 2017/6/29.
 * Desc: 自定义的 tabBar 需要结合 react-native-scrollable-tab-view 组件使用
 */
import React, {Component} from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Animated } from 'react-native';
import { Icon} from "native-base";
import GlobalStyles from '../../asssets/style/GlobalStyles';

export default class CustomTabBar extends Component {
    static propTypes = {
        goToPage: React.PropTypes.func, // 跳转到对应tab的方法
        activeTab: React.PropTypes.number, // 当前被选中的tab下标
        tabs: React.PropTypes.array, // 所有tabs集合

        tabNames: React.PropTypes.array, // 保存Tab名称
        tabIconNames: React.PropTypes.array, // 保存Tab图标
    }

    setAnimationValue({value}) {
        console.log(value);
    }

    componentDidMount() {
        // Animated.Value监听范围 [0, tab数量-1]
        this.props.scrollValue.addListener(this.setAnimationValue);
    }

    renderTabOption(tab, i) {
        let color = this.props.activeTab == i ? GlobalStyles.mainColor : GlobalStyles.textColorMiddle; // 判断i是否是当前选中的tab，设置不同的颜色
        return (
            <TouchableOpacity onPress={()=>this.props.goToPage(i)} style={styles.tab} key={tab}>
                <View style={styles.tabItem}>
                    {
                        this.props.tabIconNames ? (
                            <Icon
                                name={this.props.tabIconNames[i]} // 图标
                                size={30}
                                color={color}/>
                        ) : null
                    }
                    <Text style={{color: color}}>
                        {this.props.tabNames[i]}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        const containerWidth = this.props.containerWidth;
        const numberOfTabs = this.props.tabs.length;
        const tabUnderlineStyle = {
            position: 'absolute',
            width: containerWidth / numberOfTabs,
            height: 2,
            backgroundColor: GlobalStyles.mainColor,
            bottom: 0,
        };

        const translateX = this.props.scrollValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0,  containerWidth / numberOfTabs],
        });

        return (
            <View style={styles.tabs}>
                {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
                <Animated.View
                    style={[
                        tabUnderlineStyle, {
                            transform: [
                                {
                                    translateX
                                },
                            ]
                        },
                        this.props.underlineStyle,
                      ]}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tabs: {
        flexDirection: 'row',
        height: 35,
    },

    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    tabItem: {
        flexDirection: 'column',
        alignItems: 'center',
    },
});