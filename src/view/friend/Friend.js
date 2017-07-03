/**
 * Created by zjp on 2017/6/29.
 * Desc:
 */
import React, {Component} from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

export default class Friend extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: 'hello'
        };
    }

    render() {
        const { navigation } = this.props;
        return (
            <Container>
                <Content style={{padding: 10}}>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={require('../../asssets/images/logo.png')}/>
                                <Body>
                                <Text>NativeBase</Text>
                                <Text note>GeekyAnts</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={require('../../asssets/images/image1.jpg')} style={{height: 200, width: null, flex: 1}}/>
                        </CardItem>
                        <CardItem>
                            <Button transparent>
                                <Icon active name="thumbs-up" />
                                <Text>12 Likes</Text>
                            </Button>
                            <Button transparent>
                                <Icon active name="chatbubbles" />
                                <Text>4 Comments</Text>
                            </Button>
                            <Text>11h ago</Text>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={require('../../asssets/images/logo.png')}/>
                                <Body>
                                <Text>NativeBase</Text>
                                <Text note>GeekyAnts</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={require('../../asssets/images/image1.jpg')} style={{height: 200, width: null, flex: 1}}/>
                        </CardItem>
                        <CardItem>
                            <Button transparent>
                                <Icon active name="thumbs-up" />
                                <Text>12 Likes</Text>
                            </Button>
                            <Button transparent>
                                <Icon active name="chatbubbles" />
                                <Text>4 Comments</Text>
                            </Button>
                            <Text>11h ago</Text>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={require('../../asssets/images/logo.png')}/>
                                <Body>
                                <Text>NativeBase</Text>
                                <Text note>GeekyAnts</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={require('../../asssets/images/image1.jpg')} style={{height: 200, width: null, flex: 1}}/>
                        </CardItem>
                        <CardItem>
                            <Button transparent>
                                <Icon active name="thumbs-up" />
                                <Text>12 Likes</Text>
                            </Button>
                            <Button transparent>
                                <Icon active name="chatbubbles" />
                                <Text>4 Comments</Text>
                            </Button>
                            <Text>11h ago</Text>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}