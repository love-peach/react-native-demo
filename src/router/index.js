/**
 * Created by zhangjinpei on 2017/6/28.
 */

import React from 'react';
import { Platform, ScrollView, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import routers from './routers'
import FoundMusic from '../view/found-music/FoundMusic'

export default StackNavigator(
    {
        ...routers,
        Index: {
            screen: FoundMusic,
        },
    },
    {
        initialRouteName: 'Index',
        headerMode: 'none',

        /*
         * Use modal on iOS because the card mode comes from the right,
         * which conflicts with the drawer example gesture
         */
        // mode: Platform.OS === 'ios' ? 'modal' : 'card',
    }
);