/**
 * Created by zjp on 2017/6/29.
 * Desc: 全局可用的样式
 */

import DimensionsUtil from '../../lib/DimensionsUtil';

const windowHeight = DimensionsUtil.getScreenHeight();
const windowWidth = DimensionsUtil.getScreenWidth();

export default {
    windowHeight,
    windowWidth,
    navBarHeight: 45,
    mainColor: '#d33a31',
    textColorMain: '#333333',
    textColorMiddle: '#666666',
    textColorGray: '#999999',
    bgColorBright: '#f2f4f5',
    bgColorGray: '#e7e9e9',

    borderColorLight: '#f1f1f1',
    borderColorDark: '#e1e1e1',
    border: function (borderStyle = 'solid', borderWidth = 1, borderColor = 'red') {
        return {
            borderStyle,
            borderWidth,
            borderColor
        }
    }
}