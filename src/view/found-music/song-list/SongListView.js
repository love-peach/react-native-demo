/**
 * Created by zjp on 2017/6/29.
 * Desc:
 */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import FetchData from '../../FetchData';

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
                <FetchData />
            </View>
        );
    }
}