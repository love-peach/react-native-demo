/**
 * Created by zjp on 2017/6/27.
 * Desc: 为了兼容Android和iOS设置统一程序入口
 */
import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    AppRegistry,
    Platform,
    Text,
    Alert,
    TouchableOpacity,
} from 'react-native'

import {
    isFirstTime,
    isRolledBack,
    packageVersion,
    currentVersion,
    checkUpdate,
    downloadUpdate,
    switchVersion,
    switchVersionLater,
    markSuccess,
} from 'react-native-update';

import _updateConfig from '../update.json';
const {appKey} = _updateConfig[Platform.OS];

import Router from './router';

export default class App extends Component {
    componentWillMount(){
        if (isFirstTime) {
            Alert.alert('提示', '这是当前版本第一次启动,是否要模拟启动失败?失败将回滚到上一版本', [
                {text: '是', onPress: ()=>{throw new Error('模拟启动失败,请重启应用')}},
                {text: '否', onPress: ()=>{markSuccess()}},
            ]);
        } else if (isRolledBack) {
            Alert.alert('提示', '刚刚更新失败了,版本被回滚.');
        }
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <Router />
            </View>
        );
    }
}
