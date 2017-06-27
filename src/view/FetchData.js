/**
 * Created by zjp on 2017/6/27.
 * Desc:
 */
import React, {Component} from 'react';
import {
    ScrollView,
    Text,
    Image,
    View,
    StyleSheet,
    ToastAndroid,
} from 'react-native';
import request from '../server/request';

export default class FetchData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        }
    }

    // 获取用户
    requestUsers = () => {
        const that = this;
        request.getUser()
            .then((responseJson) => {
                    var users = responseJson;
                    console.log(users[3].id, 'users');
                    that.setState({
                        users: users,
                    })
                })
            .catch();
    };

    //页面渲染完成后会主动回调该方法
    componentDidMount() {
        this.requestUsers();
    }
    render() {
        return (
            <ScrollView>
                {
                    this.state.users.map((item, key) => {
                        return (
                            <View style={UserItemStyle.container_out} key={key}>
                                <Image style={UserItemStyle.image_UserAvatar} source={{uri: item.owner.avatar_url}}/>
                                <View style={UserItemStyle.container_right}>
                                    <Text style={UserItemStyle.text_UserID}>{item.name}</Text>
                                    <Text style={UserItemStyle.text_UserType}>{item.id}</Text>
                                </View>
                            </View>
                        );
                    })
                }
            </ScrollView>
        )
    }
}
const UserItemStyle = StyleSheet.create({
    container_out: {
        backgroundColor: "white",
        height: 100,
        flexDirection: "row",
        alignItems: "center"
    },
    container_right: {
        flexDirection: "column",
        height: 80,
        flexGrow: 1,
    },
    image_UserAvatar: {
        borderRadius: 80,
        width: 80,
        height: 80,
        resizeMode: "cover",
        marginHorizontal: 12
    },
    text_UserID: {
        color: "black",
        fontSize: 16,
        lineHeight: 24,
    },
    text_UserType: {
        color: "gray",
        fontSize: 12,
        lineHeight: 20,
    },
})