/**
 * Created by zjp on 2017/6/29.
 * Desc:
 */
import React, {Component} from 'react';
import {} from 'react-native';
import { Content, List, ListItem, Text, Icon, Left, Body, Right, Switch } from 'native-base';
import PageFirst from '../../framework/page-first/PageFirst';

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
            <PageFirst navigation={navigation}>
                <Content>
                    <List>
                        <ListItem icon>
                            <Left>
                                <Icon name="plane" />
                            </Left>
                            <Body>
                            <Text>Airplane Mode</Text>
                            </Body>
                            <Right>
                                <Switch value={false} />
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name="wifi" />
                            </Left>
                            <Body>
                            <Text>Wi-Fi</Text>
                            </Body>
                            <Right>
                                <Text>GeekyAnts</Text>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name="bluetooth" />
                            </Left>
                            <Body>
                            <Text>Bluetooth</Text>
                            </Body>
                            <Right>
                                <Text>On</Text>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </PageFirst>
        );
    }
}