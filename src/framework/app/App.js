/**
 * Created by zhangjinpei on 2017/6/29.
 */
/**
 * Created by zjp on 2017/6/29.
 * Desc: 框架级组件 所有页面 组件都继承这个页面
 */
import React, {Component} from "react";
import {
    Container,
} from "native-base";

export default class App extends Component {
    render() {
        return (
            <Container>
                {this.props.children}
            </Container>
        )
    }
}
