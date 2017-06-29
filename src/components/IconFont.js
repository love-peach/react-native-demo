import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Button } from 'native-base'
import GlobalStyles from '../asssets/style/GlobalStyles'

export default class IconFont extends Component  {
    constructor(props) {
        super(props);
    }

    renderIconFont = () => {
        if(this.props.waves) {
            return (
                <Button transparent onPress={this.props.onPress} style={styleObj.button}>
                    <Text style={[styles.icon, this.props.style]}>
                        {this.props.font}
                    </Text>
                </Button>
            );
        } else {
            return (
                <Text
                    style={[styles.icon, this.props.style]}
                    onPress={this.props.onPress}
                >
                    {this.props.font}
                </Text>
            );
        }
    }

    render() {
        return this.renderIconFont()
    }
}

const styleObj = {
    button: {
        paddingTop: 0,
        paddingBottom: 0,
        paddingRight: 15,
        paddingLeft: 15,
        height: GlobalStyles.navBarHeight,
    }
}

const styles = StyleSheet.create({
    icon: {
        fontFamily:'iconfont',
        color: '#000',
        textAlign: 'center'
    },
})