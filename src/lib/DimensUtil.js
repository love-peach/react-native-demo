/**
 * Created by zjp on 2017/6/27
 * Desc:屏幕尺寸辅助类
 */

import {Dimensions} from 'react-native';

export default class DimenUtil {

    static getScreenWidth() {
        return Dimensions.get('window').width;
    }
}