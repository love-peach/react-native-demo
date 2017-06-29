/**
 * Created by zhangjinpei on 2017/6/29.
 */

/**
 * Created by zjp on 2017/6/29.
 * Desc:
 */
import React, {Component} from 'react';
import { View } from 'react-native';
import { Container } from "native-base";
import HeaderBar from '../header-bar/HeaderBar'

export default class PageFirst extends Component {
    render() {
        return (
            <Container>
                <HeaderBar />
                <View style={{ flex: 1}}>
                    {this.props.children}
                </View>
            </Container>
        )
    }
}