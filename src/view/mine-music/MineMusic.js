/**
 * Created by zjp on 2017/6/29.
 * Desc:
 */
import React, {Component} from 'react';
import { Text } from 'react-native';

export default class MineMusic extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: 'hello'
        };
    }

    render() {
        const { navigation } = this.props;
        return (
            <Text>我的音乐</Text>
        );
    }
}