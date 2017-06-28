/**
 * Created by zjp on 2017/6/27.
 * Desc:
 */
import React, {Component} from 'react';
import { Container, Content, Spinner, List, ListItem, Thumbnail, Text, Body } from 'native-base';
import { View } from 'react-native';
import request from '../server/request';

export default class FetchData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playLists: [],
        }
    }

    // 搜索
    requestSearch = () => {
        const params = {
            s: '张国荣',
            limit: 20,
            offset: 0,
            type: 1000,
        }

        request.searchByWord(params)
            .then((responseJson) => {
                this.setState({
                    playLists: responseJson.result.playlists,
                });
            })
            .catch()
    };

    // 获取歌单详情
    requestSongListDetail = () => {
        const params = {
            id: 462356530,
            updateTime: -1,
            limit: 11,
            offset: 0,
        }
        request.getSongListDetail(params)
            .then((responseJson) => {
                console.log(responseJson.result.tracks.length, 'responseJson');
            })
            .catch((err) => {
                console.log(err)
            })
    };

    // 获取歌词
    requestSingWord = () => {
        const params = {
            os: 'mobile',
            id: 93922,
            lv: -1,
            kv: -1,
            tv: -1,
        }
        request.getSingWord(params)
            .then((responseJson) => {
                console.log(responseJson, 'responseJson111')
            })
            .catch();
    };

    //页面渲染完成后会主动回调该方法
    componentDidMount() {
        // this.requestSingWord();
        this.requestSearch();
        this.requestSongListDetail();
    }
    //绘制界面
    render() {
        let playLists = this.state.playLists;
        const placeholderContent =  (
            <View>
                <Spinner color='green'/>
                <Text style={{textAlign: "center", fontSize: 16}}>加载中...</Text>
            </View>
        )
        const playListsItems = (
            <List>
                {
                    this.state.playLists.map((item, key) => {
                        return (
                            <ListItem key={key}>
                                <Thumbnail square size={80} source={{ uri: item.coverImgUrl }} />
                                <Body>
                                    <Text>{item.name}</Text>
                                    <Text note>{item.trackCount} 首</Text>
                                </Body>
                            </ListItem>
                        );
                    })
                }
            </List>
        );

        return (
            <Container>
                <Content>
                    {
                        playLists.length > 0 ? playListsItems : placeholderContent
                    }
                </Content>
            </Container>
        )
    }
}