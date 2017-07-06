import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableNativeFeedback, TouchableOpacity } from 'react-native';
import GlobalStyles from '../asssets/style/GlobalStyles'

export default class IconFont extends Component  {
    constructor(props) {
        super(props);
    }

    renderIconFont = () => {
        if(this.props.waves) {
            return (
                <TouchableOpacity
                    style={styleObj.button}
                    onPress={this.props.onPress}
                >
                    <Text style={[ styles.icon, this.props.style]}>
                        {this.props.font}
                    </Text>
                </TouchableOpacity>
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
        justifyContent: 'center',
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