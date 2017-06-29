/**
 * Created by zjp on 2017/6/29.
 * Desc:
 */
import React, {Component} from 'react';
import {Text} from 'react-native';

export default class AnchorRadio extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: 'hello'
        };
    }

    render() {
        return (
            <Text>AnchorRadio 页面</Text>
        );
    }
}