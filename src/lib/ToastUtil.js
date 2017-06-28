import React, {Component} from 'react';
import {ToastAndroid} from 'react-native';
/**
 * Created by zjp on 2017/6/27
 * Desc:Toast工具类
 */
export default class ToastUtil {

    static show(hint) {
        ToastAndroid.show(hint, ToastAndroid.SHORT);
    }

}