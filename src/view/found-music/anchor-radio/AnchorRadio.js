/**
 * Created by zjp on 2017/6/29.
 * Desc:
 */
import React, { Component } from 'react';
import { Container, Header, Left, Button, Body, Title, Icon, Right, Content, ActionSheet, Text } from 'native-base';
var BUTTONS = [
    'Option 0',
    'Option 1',
    'Option 2',
    'Delete',
    'Cancel',
];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

export default class AnchorRadio extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <Content padder>
                <Button onPress={()=> ActionSheet.show({
                        options: BUTTONS,
                        cancelButtonIndex: CANCEL_INDEX,
                        destructiveButtonIndex: DESTRUCTIVE_INDEX,
                        title: '选项'
                    },
                    (buttonIndex) => {
                        this.setState({ clicked: BUTTONS[buttonIndex] });
                    })}
                >
                    <Text>弹框选项</Text>
                </Button>
            </Content>
        );
    }
}