/**
 * Created by zjp on 2017/6/29.
 * Desc:
 */
import React, {Component} from 'react';
import { Text, View, Platform, Linking, Alert, ActivityIndicator, StyleSheet, Button } from 'react-native';

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
import _updateConfig from '../../../update.json';
const {appKey} = _updateConfig[Platform.OS];
import GlobalStyles from '../../asssets/style/GlobalStyles';

export default class Friend extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false
        };
    }
    doUpdate = info => {
        downloadUpdate(info).then(hash => {
            Alert.alert('提示', '下载完毕,是否重启应用?', [
                {text: '是', onPress: ()=>{switchVersion(hash);}},
                {text: '否',},
                {text: '下次启动时', onPress: ()=>{switchVersionLater(hash);}},
            ]);
        }).catch(err => {
            Alert.alert('提示', '更新失败.');
        });
    };
    checkUpdate = () => {
        checkUpdate(appKey).then(info => {
            if (info.expired) {
                Alert.alert('提示', '您的应用版本已更新,请前往应用商店下载新的版本', [
                    {text: '确定', onPress: ()=>{info.downloadUrl && Linking.openURL(info.downloadUrl)}},
                ]);
            } else if (info.upToDate) {
                Alert.alert('提示', '您的应用版本已是最新.');
            } else {
                Alert.alert('提示', '检查到新的版本'+info.name+',是否下载?\n'+ info.description, [
                    {text: '是', onPress: ()=>{this.doUpdate(info)}},
                    {text: '否',},
                ]);
            }
        }).catch(err => {
            Alert.alert('提示', '更新失败.');
        });
    };

    render() {
        const { navigation } = this.props;
        return (
            <View>
                <Text>这是版本二 </Text>
                <Text>当前包版本号 {packageVersion} </Text>
                <Text>当前版本Hash: {currentVersion||'(空)'}</Text>
                <View style={Styles.button}>
                    <Button title="检查更新" onPress={this.checkUpdate} color={GlobalStyles.mainColor} />
                </View>
            </View>
        );
    }
}
const Styles = StyleSheet.create({
    loading: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        height: 80,
    },
    button: {
        width: 100,
        alignItems: 'center',
        margin: 10,
    }
});
