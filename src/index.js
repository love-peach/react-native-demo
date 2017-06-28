/**
 * Created by zjp on 2017/6/27.
 * Desc: 为了兼容Android和iOS设置统一程序入口
 */
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import './lib/StorageUtils';

import Router from './router'

// import HelloWorld from './view/HelloWorld';
// import FetchData from './view/FetchData';
// import NativeBase from './view/NativeBase';


// 注意，这里用引号括起来的'RNDemo'必须和你 init 时创建的项目名一致
AppRegistry.registerComponent('RNDemo', () => Router);