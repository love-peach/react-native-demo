/**
 * Created by zjp on 2017/6/30.
 * Desc:
 */
import React, {Component} from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import GlobalStyles from '../../../asssets/style/GlobalStyles';

export default class HorizontalRanking extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: 'hello'
        };
    }

    renderRankingItems = () => {
        const { dataSource } = this.props;
        return dataSource.map((item, key) => {
            return (
                <View style={[styles.itemWrap]} key={key}>
                    <View style={{height: GlobalStyles.windowWidth/3}}>
                        <Image square source={{uri: item.imgPic + '?param=100y100'}} style={{width: null, flex: 1, height: GlobalStyles.windowWidth/3}} />
                    </View>
                    <View style={{height: 40}}>
                        <Text>{item.text}</Text>
                    </View>
                </View>
            )
        })
    }

    render() {
        const { dataSource } = this.props;
        return (
            <View style={styles.listWrap}>
                {this.renderRankingItems()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    listWrap: {
        display: 'flex',
        overflow: 'hidden',
        marginRight: -3,
        marginLeft: -3,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'stretch',
    },
    itemWrap: {
        height: 'auto',
        width: GlobalStyles.windowWidth/3,
        marginRight: 1,
        marginLeft: 1,
    },
})