/**
 * Created by zhangjinpei on 2017/6/28.
 */

import React from 'react';
import {
    Platform,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import routers from './routers'

const MainScreen = ({ navigation }) => (
    <ScrollView>
        {Object.keys(routers).map((routeName: string) => (
            <TouchableOpacity
                key={routeName}
                onPress={() => {
                    const { path, params, screen } = routers[routeName];
                    const { router } = screen;
                    const action = path && router.getActionForPathAndParams(path, params);
                    navigation.navigate(routeName, {}, action);
                }}
            >
                <View style={styles.item}>
                    <Text style={styles.title}>{routers[routeName].name}</Text>
                    <Text style={styles.description}>
                        {routers[routeName].description}
                    </Text>
                </View>
            </TouchableOpacity>
        ))}
    </ScrollView>
);

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#ddd',
    },
    image: {
        width: 120,
        height: 120,
        alignSelf: 'center',
        marginBottom: 20,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#444',
    },
    description: {
        fontSize: 13,
        color: '#999',
    },
});

export default StackNavigator(
    {
        ...routers,
        Index: {
            screen: MainScreen,
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