import React, {Component} from "react";
import {
    Container,
    Header,
    Title,
    Left,
    Right,
    Content,
    Body,
    Button,
    Icon
} from "native-base";
import FetchData from "./FetchData";

export default class NativeBase extends Component {
    render() {
        return (
            <Container>
                <Header>
                        <Button transparent>
                            <Icon name='ios-arrow-back'/>
                        </Button>

                    <Body>
                        <Title>Header</Title>
                    </Body>

                    <Right>
                        <Button transparent>
                            <Icon name='ios-menu'/>
                        </Button>
                    </Right>

                </Header>

                <Content>
                    <FetchData/>
                </Content>
            </Container>
        )
    }
}
