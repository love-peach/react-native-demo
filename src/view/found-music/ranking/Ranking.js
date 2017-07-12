/**
 * Created by zjp on 2017/6/29.
 * Desc:
 */
import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
import HorizontalRanking from './HorizontalRanking';

export default class Ranking extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rankingGlobal: [
                {
                    imgPic: 'http://p3.music.126.net/4mh2HWH-bd5sRufQb-61bg==/3302932937414659.jpg',
                    imgDes: '每周五更新',
                    text: '云音乐电音榜',
                    typeId: ''
                }, {
                    imgPic: 'http://p3.music.126.net/A61n94BjWAb-ql4xpwpYcg==/18613632348448741.jpg',
                    imgDes: '每周四更新',
                    text: 'Beatport全球电子舞曲榜',
                    typeId: ''
                }, {
                    imgPic: 'http://p3.music.126.net/vttjtRjL75Q4DEnjRsO8-A==/18752170813539664.jpg',
                    imgDes: '每周四更新',
                    text: '云音乐ACG音乐榜',
                    typeId: ''
                }, {
                    imgPic: 'http://p3.music.126.net/Rgqbqsf4b3gNOzZKxOMxuw==/19029247741938160.jpg',
                    imgDes: '每周三更新',
                    text: '日本Oricon周榜',
                    typeId: ''
                }, {
                    imgPic: 'http://p3.music.126.net/BzSxoj6O1LQPlFceDn-LKw==/18681802069355169.jpg',
                    imgDes: '每周四更新',
                    text: '云音乐古典音乐榜',
                    typeId: ''
                }, {
                    imgPic: 'http://p4.music.126.net/VQOMRRix9_omZbg4t-pVpw==/18930291695438269.jpg',
                    imgDes: '每周一更新',
                    text: 'UK排行榜周榜',
                    typeId: ''
                }, {
                    imgPic: 'http://p4.music.126.net/EBRqPmY8k8qyVHyF8AyjdQ==/18641120139148117.jpg',
                    imgDes: '每周三更新',
                    text: '美国Billboard周榜',
                    typeId: ''
                }, {
                    imgPic: 'http://p3.music.126.net/6O0ZEnO-I_RADBylVypprg==/109951162873641556.jpg',
                    imgDes: '每周五更新',
                    text: '法国 NRJ Vos Hits 周榜',
                    typeId: ''
                }, {
                    imgPic: 'http://p3.music.126.net/83pU_bx5Cz0NlcTq-P3R3g==/18588343581028558.jpg',
                    imgDes: '每周一更新',
                    text: 'iTunes榜',
                    typeId: ''
                }, {
                    imgPic: 'http://p3.music.126.net/54vZEZ-fCudWZm6GH7I55w==/19187577416338508.jpg',
                    imgDes: '每周一更新',
                    text: 'Hit FM Top榜',
                    typeId: ''
                }, {
                    imgPic: 'http://p3.music.126.net/H4Y7jxd_zwygcAmPMfwJnQ==/19174383276805159.jpg',
                    imgDes: '每周五更新',
                    text: 'KTV唛榜',
                    typeId: ''
                }, {
                    imgPic: 'http://p3.music.126.net/wqi4TF4ILiTUUL5T7zhwsQ==/18646617697286899.jpg',
                    imgDes: '每周一更新',
                    text: '台湾Hito排行榜',
                    typeId: ''
                }, {
                    imgPic: 'http://p4.music.126.net/JPh-zekmt0sW2Z3TZMsGzA==/18967675090783713.jpg',
                    imgDes: '每周一更新',
                    text: '中国TOP排行榜（港台榜）',
                    typeId: ''
                }, {
                    imgPic: 'http://p4.music.126.net/2klOtThpDQ0CMhOy5AOzSg==/18878614648932971.jpg',
                    imgDes: '每周一更新',
                    text: '中国TOP排行榜（内地榜）',
                    typeId: ''
                }, {
                    imgPic: 'http://p3.music.126.net/YQsr07nkdkOyZrlAkf0SHA==/18976471183805915.jpg',
                    imgDes: '每周五更新',
                    text: '香港电台中文歌曲龙虎榜',
                    typeId: ''
                }, {
                    imgPic: 'http://p4.music.126.net/8gUF9TrXGNoRO6cKVaCzrQ==/5972547162256485.jpg',
                    imgDes: '每周五更新',
                    text: '中国嘻哈榜',
                    typeId: ''
                }
            ],
        };
    }

    handleScroll() {
        //在滚动的过程中，每帧最多调用一次此回调函数。
        // 调用的频率可以用scrollEventThrottle属性来控制。
    }

    render() {
        const { rankingGlobal } = this.state;
        return (
            <ScrollView
                ref="scrollView"
                horizontal={false}//设置是否是横向滚动
                onScroll={this.handleScroll}
                removeClippedSubviews={true}//实验特性，可以优化滚动性能,会引起react-swiper 第一次不显示的bug
                showsVerticalScrollIndicator={false}//是否显示垂直滚动条
            >
                <HorizontalRanking dataSource={rankingGlobal}/>
            </ScrollView>
        );
    }
}