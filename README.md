# RNDemo

记录学习 RN 过程中遇到的问题

## 初始化项目

> react-native init RNDemo

## 运行项目

> cd RNDemo

> react-native run-android

## todo
-[x] 图标
-[x] 路由
-[x] 请求

## 调试

**模拟器调试 Genymothion**

* 安装好模拟器, 添加一个 Android 设备.
* 启动 ,设置开发者模式.连续点击手机版本 5 次,进入开发者模式.
* 用 `adb devices` 命令查看当前设备.
* 如果看不到,请尝试设置下 Genymotion. setting > adb > custom > 填写你下载sdk目录.
* command + m 调出菜单,设置 debug server host & port fro device eg: 192.168.31.101:8081

**真机调试**

* 手机设置开发者模式,连接电脑 (adb devices 查看)
* 启动项目 react-native run-android
* 设置 debug server host & port fro device

## 目录结构

## HTTP 请求 Fetch

[fetch用法说明][fetch用法说明 Link]

## 字体图标
参考这里:[React Native如何实现自定义字体][React Native如何实现自定义字体 Link]

## 打包apk

### 1.生成一个签名密钥
```
keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

过程如下：
```
输入密钥库口令:
再次输入新口令:
您的名字与姓氏是什么?
  [Unknown]:  zhangjinpei
您的组织单位名称是什么?
  [Unknown]:  乐窗实验室
您的组织名称是什么?
  [Unknown]:  前端小分队
您所在的城市或区域名称是什么?
  [Unknown]:  北京
您所在的省/市/自治区名称是什么?
  [Unknown]:  北京
该单位的双字母国家/地区代码是什么?
  [Unknown]:  CN
CN=zhangjinpei, OU=乐�窗窗实验室, O=前端小分队, L=北京, ST=北京, C=CN是否正确?
  [否]:  y
```

最后它会生成一个叫做 `my-release-key.keystore` 的密钥库文件。

在运行上面这条语句之后，密钥库里应该已经生成了一个单独的密钥，有效期为10000天。
--alias 参数后面的别名是你将来为应用签名时所需要用到的，所以记得记录这个别名。

**注意：** 请记得妥善地保管好你的密钥库文件，不要上传到版本库或者其它的地方。

参数说明：
* -genkey表示要创建一个新的密钥
* -dname表示密钥的Distinguished Names，
* CN=commonName
* OU=organizationUnit
* O=organizationName
* L=localityName
* S=stateName
* C=country
* Distinguished Names表明了密钥的发行者身份
* -keyalg使用加密的算法，这里是RSA
* -alias密钥的别名
* -keypass私有密钥的密码，这里设置为changeit
* -keystore 密钥保存在D:盘目录下的mykeystore文件中
* -storepass 存取密码，这里设置为changeit，这个密码提供系统从mykeystore文件中将信息取出
* -validity该密钥的有效期为 180天 (默认为90天)

### 2.设置gradle变量
1. 把 `my-release-key.keystore` 文件放到你工程中的 `android/app` 文件夹下。
2. 编辑 `~/.gradle/gradle.properties`（没有这个文件你就创建一个），添加如下的代码（注意把其中的****替换为相应密码）

**注意：** ~表示用户目录，比如windows上可能是C:\Users\用户名，而mac上可能是/Users/用户名。

```
MYAPP_RELEASE_STORE_FILE=my-release-key.keystore
MYAPP_RELEASE_KEY_ALIAS=my-key-alias
MYAPP_RELEASE_STORE_PASSWORD=*****
MYAPP_RELEASE_KEY_PASSWORD=*****
```
上面的这些会作为全局的gradle变量，我们在后面的步骤中可以用来给应用签名。

**关于密钥库的注意事项:**

一旦你在Play Store发布了你的应用，如果想修改签名，就必须用一个不同的包名来重新发布你的应用（这样也会丢失所有的下载数和评分）。所以请务必备份好你的密钥库和密码。

### 3.添加签名到项目的gradle配置文件
编辑你项目目录下的 `android/app/build.gradle` ，添加如下的签名配置：

```
...
android {
    ...
    defaultConfig { ... }
    signingConfigs {
        release {
            storeFile file(MYAPP_RELEASE_STORE_FILE)
            storePassword MYAPP_RELEASE_STORE_PASSWORD
            keyAlias MYAPP_RELEASE_KEY_ALIAS
            keyPassword MYAPP_RELEASE_KEY_PASSWORD
        }
    }
    buildTypes {
        release {
            ...
            signingConfig signingConfigs.release
        }
    }
}
...
```

### 4.生成发行APK包
> cd android && ./gradlew assembleRelease

具体步骤参考 [打包APK][打包APK Link]



## 参考链接
[给所有开发者的React Native详细入门指南][给所有开发者的React Native详细入门指南 Link]


## 感谢
- [Marno][Marno Link]

[fetch用法说明 Link]:https://segmentfault.com/a/1190000007019545
[React Native如何实现自定义字体 Link]:http://blog.csdn.net/qq_31280709/article/details/73441128
[打包APK Link]:http://reactnative.cn/docs/0.45/signed-apk-android.html#content
[给所有开发者的React Native详细入门指南 Link]:http://www.jianshu.com/p/fa0874be0827

[Marno Link]: https://github.com/MarnoDev