/**
 * Created by zjp on 2017/6/29.
 * Desc: 顶部 banner
 */
import React, {Component} from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';
import GlobalStyles from '../../../asssets/style/GlobalStyles';
const bannerHeight = 160;
export default class Banner extends Component {
    constructor (props) {
        super(props)
        this.state = {
            isShowSwiper: false,
            items: []
        }
    }

    componentDidMount () {
        setTimeout(() => {
            this.setState({
                isShowSwiper: true,
            });
        }, 100)
        this.setState({
            items: [
                { title: 'Hello Swiper', css: styles.slide1 },
                { title: 'Beautiful', css: styles.slide2 },
                { title: 'And simple', css: styles.slide3 },
                { title: 'Captain', css: styles.slide4},
                { title: 'Ocean', css: styles.slide5},
            ]
        })
    }

    renderSwiper = () => {
        const { isShowSwiper } = this.state;
        if(isShowSwiper) {
            return (
                <Swiper
                    height={bannerHeight}
                    loop={true}
                    index={0}
                    lazyLoad={true}
                    autoplay={true}
                    autoplayTimeout={5}
                    dotColor="rgba(0,0,0,.2)"
                    activeDotColor={GlobalStyles.mainColor}
                    paginationStyle={{bottom: 10}}
                >
                    {this.state.items.map((item, key) => {
                        return (
                            <View key={key} style={item.css}>
                                <Text style={styles.text}>{item.title}</Text>
                            </View>
                        )
                    })}
                </Swiper>
            );
        } else {
            return (
                <View style={{height: bannerHeight}}><Text>fe</Text></View>
            );
        }
    }

    render() {
        return (
            this.renderSwiper()
        );
    }
}

var styles = StyleSheet.create({
    wrapper: {
        height: 160,
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    slide4: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#C7CEB2',
    },
    slide5: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6a5e5e',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    dot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        marginRight: 3,
        marginLeft: 3,
        backgroundColor: 'rgba(0,0,0,.2)',
    },
    activeDot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        marginRight: 3,
        marginLeft: 3,
        backgroundColor: GlobalStyles.mainColor,
    }
})