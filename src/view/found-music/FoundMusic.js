/**
 * Created by zjp on 2017/6/29.
 * Desc:
 */
import React, {Component} from 'react'
import { TouchableOpacity, View, Text, Button} from 'react-native'
import { Content } from "native-base"
import ScrollableTabView from 'react-native-scrollable-tab-view'
import PageFirst from '../../framework/page-first/PageFirst'
import CustomTabBar from '../../components/custom-tab-bar/CustomTabBar'
import AnchorRdio from './anchor-radio/AnchorRadio';
import Ranking from './ranking/Ranking';
import Recommendation from './recommendation/Recommendation';
import SongListView from './song-list/SongListView';

export default class FoundMusic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabNames: ['个性推荐', '歌单', '主播电台', '排行榜'],
        };
    }
    render() {
        const { navigation } = this.props;
        const { tabNames, tabIconNames } = this.state;
        return(
            <PageFirst>
                <ScrollableTabView
                    renderTabBar={() => <CustomTabBar tabNames={tabNames}/>}
                    tabBarUnderlineColor='#FF0000'
                    tabBarBackgroundColor='#FFFFFF'
                    tabBarActiveTextColor='#9B30FF'
                    tabBarInactiveTextColor='#7A67EE'
                    tabBarTextStyle={{fontSize: 18, paddingBottom: 0}}
                >
                    <Recommendation navigation={navigation} tabLabel='个性推荐'/>
                    <SongListView navigation={navigation} tabLabel='歌单'/>
                    <AnchorRdio navigation={navigation} tabLabel='主播电台'/>
                    <Ranking navigation={navigation} tabLabel='排行榜'/>
                </ScrollableTabView>
            </PageFirst>
        );
    }
}