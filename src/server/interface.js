/**
 * Created by zhangjinpei on 2017/6/27.
 */
const baseUrl = 'http://music.163.com/api'
export default {
    // 搜索
    search: `${baseUrl}/search/get/`,
    
    // 获取歌词
    getSingWord: `${baseUrl}/song/lyric/`,

    // 获取歌单详情
    getSongListDetail: `${baseUrl}/playlist/detail`
}