/**
 * Created by zjp on 2017/6/27.
 * Desc:
 */
import React, {Component} from 'react';
import { ActivityIndicator, StyleSheet, TouchableNativeFeedback, TouchableOpacity, TouchableHighlight, ListView, View, Image,Text } from 'react-native';
import request from '../server/request';
import GlobalStyles from '../asssets/style/GlobalStyles';

export default class FetchData extends Component {
    constructor(props) {
        super(props);
        let defaultDS = new ListView.DataSource({rowHasChanged: (prevRowData, nextRowData)=>prevRowData !== nextRowData});
        this.state = {
            dataSource: defaultDS,
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

    listViewRenderRow = (rowData, sectionId, rowId) => {
        return (
            <View style={Styles.listItem}>
                <Image style={Styles.itemImage} source={{ uri: rowData.coverImgUrl }} />
                <View style={{flex: 1}}>
                    <Text style={Styles.itemName} numberOfLines={1} ellipsizeMode="tail">{rowData.name}</Text>
                    <Text style={Styles.itemDec} >{rowData.trackCount} 首</Text>
                </View>
            </View>
        );
    }
    //绘制界面
    render() {
        const { dataSource, playLists} = this.state;
        const placeholderContent =  (
            <View>
                <ActivityIndicator
                    animating={true}
                    style={Styles.loading}
                    size="large"
                    color={GlobalStyles.mainColor}
                />
                <Text style={{textAlign: "center", fontSize: 16}}>加载中...</Text>
            </View>
        );
        const playListsItems = (
            <ListView
                style={Styles.listWrap}
                initialListSize={10}
                dataSource={dataSource.cloneWithRows(playLists)}
                renderRow={this.listViewRenderRow}
            >
            </ListView>
        );

        return (
            <View>
                {
                    playLists.length > 0 ? playListsItems : placeholderContent
                }
            </View>
        )
    }
}
const Styles = StyleSheet.create({
    loading: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        height: 80,
    },
    listWrap: {
        paddingLeft: 10,
    },
    listItem: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 10,
        borderStyle: 'solid',
        borderBottomWidth: 0.5,
        borderBottomColor: GlobalStyles.borderColorDark,

    },
    itemImage: {
        height: 60,
        width: 60,
        marginRight: 10,
    },
    itemName: {
        color: GlobalStyles.textColorMain,
        fontSize: 16
    },
    itemDec: {
        color: GlobalStyles.textColorGray,
        fontSize: 14
    }
})