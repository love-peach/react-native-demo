/**
 * Created by zjp on 2017/6/29.
 * Desc: 顶部的 header 导航
 */
import React, {Component} from "react";
import { StyleSheet, Text, ScrollView, View, StatusBar} from 'react-native';
import GlobalStyles from '../../asssets/style/GlobalStyles';
import IconFont from '../../components/IconFont'

export default class HeaderBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'FoundMusic'
        }
    }

    handleJumpPage = (type) => {
        this.setState({
            activeTab: type
        });
        this.props.navigation.navigate(type);
    }

    render() {
        const { navigation } = this.props;
        const { activeTab } = this.state;
        return (
            <View>
                <StatusBar
                    backgroundColor={GlobalStyles.mainColor}
                />
                <View style={styles.wrap}>
                    <View style={styles.left}>
                        <IconFont
                            waves
                            font="&#xe614;"
                            style={[styles.icon, styles.iconMenu]}
                            onPress={() => {navigation.navigate('DrawerOpen')} }
                        />
                    </View>
                    <View style={styles.content}>
                        <IconFont
                            waves
                            font="&#xe6b7;"
                            style={[styles.icon, styles.iconTab, activeTab === 'MineMusic' ? styles.activeTab : '']}
                            onPress={() => this.handleJumpPage('MineMusic') }
                        />
                        <IconFont
                            waves
                            font="&#xe601;"
                            style={[styles.icon, styles.iconTab, activeTab === 'FoundMusic' ? styles.activeTab : '']}
                            onPress={() => this.handleJumpPage('FoundMusic') }
                        />
                        <IconFont
                            waves
                            font="&#xe60d;"
                            style={[styles.icon, styles.iconTab, activeTab === 'Friend' ? styles.activeTab : '']}
                            onPress={() => this.handleJumpPage('Friend') }
                        />
                    </View>
                    <View style={styles.right}>
                        <IconFont
                            waves
                            font="&#xe640;"
                            style={[styles.icon, styles.iconSearch]}
                            onPress={() => this.handleJumpPage() }
                        />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrap: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        height: GlobalStyles.navBarHeight,
        backgroundColor: GlobalStyles.mainColor,
    },
    left: {
        paddingRight: 35,
    },
    right: {
        paddingLeft: 35,
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: GlobalStyles.navBarHeight,
    },
    icon: {
        textAlign: 'center',

        fontSize: 22,
    },
    iconMenu: {
        color: 'rgba(255,255,255,.9)',
        fontSize: 26,
    },
    iconSearch: {
        color: 'rgba(255,255,255,.9)',
        fontSize: 22,
    },
    iconTab: {
        color: 'rgba(255,255,255,.6)',
        paddingRight: 3,
        paddingLeft: 3
    },
    activeTab: {
        color: '#ffffff',
    }
});