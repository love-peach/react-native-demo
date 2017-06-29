/**
 * Created by zjp on 2017/6/29.
 * Desc: 顶部的 header 导航
 */
import React, {Component} from "react";
import { StyleSheet, Text, ScrollView, View, StatusBar} from 'react-native';
import { Header, Title, Left, Right, Body, Icon, Button, Tab, Tabs} from "native-base";
import GlobalStyles from '../../asssets/style/GlobalStyles';
import IconFont from '../../components/IconFont'

export default class HeaderBar extends Component {
    constructor(props) {
        super(props);
    }

    handleJumpPage = () => {
        alert("我只是个字体图标")
    }

    render() {
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
                            onPress={() => this.handleJumpPage() }
                        />
                    </View>
                    <View style={styles.content}>
                        <IconFont
                            waves
                            font="&#xe6b7;"
                            style={[styles.icon, styles.iconTab]}
                            onPress={() => this.handleJumpPage() }
                        />
                        <IconFont
                            waves
                            font="&#xe601;"
                            style={[styles.icon, styles.iconTab]}
                            onPress={() => this.handleJumpPage() }
                        />
                        <IconFont
                            waves
                            font="&#xe60d;"
                            style={[styles.icon, styles.iconTab]}
                            onPress={() => this.handleJumpPage() }
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
        color: 'rgba(255,255,255,.7)',
        fontSize: 24,
    },
    iconMenu: {
        fontSize: 26,
    },
    iconSearch: {
        fontSize: 22,
    },
    iconTab: {
        paddingRight: 3,
        paddingLeft: 3
    }
});