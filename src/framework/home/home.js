/**
 * Created by zhangjinpei on 2017/7/7.
 */
/**
 * Created by zjp on 2017/7/7.
 * Desc:
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,

} from 'react-native';
import router from '../../router'

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: 'hello'
        };
    }

    render() {
        return (
            <View style={Styles.fullContainer} {...this.props}>
                <router />
            </View>
        );
    }
}

const Styles = StyleSheet.create({
    fullContainer: {
        flex: 1,
        backgroundColor: 'red',
    },
})