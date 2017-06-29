/**
 * Created by zjp on 2017/6/29.
 * Desc:
 */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { Button } from 'native-base';

export default class SongListView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: 'hello'
        };
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{flex: 1}}>
                <Text>SongListView 页面</Text>
                <View style={{position: 'absolute', bottom: 30, left: 10,right: 10}}>
                    <Button small rounded info block onPress={() => navigate('FetchData')}>
                        <Text>子页面跳转</Text>
                    </Button>
                </View>
            </View>
        );
    }
}