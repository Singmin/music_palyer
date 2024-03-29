// pages/zhuanji/zhuanji.js
import request from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerList:[],//轮播图数据
    zhuanjilist:[],
    topList:[],//排行榜数据
    name:[
      '小时榜',
      '日榜',
      '周榜',
      '月榜',
      '总榜'
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {

    let bannerListData = await request('/banner', {type:2});
    this.setData({
      bannerList: bannerListData.banners
    })

    let zhuanjiDate = await request('/album/newest')
    this.setData({
      zhuanjilist : zhuanjiDate.albums
    })

    let index = 0;
    let resultArr = [];
    while(index<5){
      let topListData = await request('/top/list', {idx:index++});
      let topListItem = {name: topListData.playlist.name, tracks: topListData.playlist.tracks.slice(0, 3)};
      resultArr.push(topListItem);
      //拿到数据就渲染到页面，但是渲染次数多
      this.setData({
        topList: resultArr
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})