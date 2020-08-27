// miniprogram/pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    str:"hello world",
    arr:['a','b','c','d','e'],
    num:0,
    objArr:[
      {
        name:"小a",
        age:18
      },
      {
        name:"小b",
        age:19
      },
      {
        name:"小c",
        age:16
      },
      {
        name:"小d",
        age:17
      }
    ]
  },
  goPageOne(){
    // wx.navigateTo({
    //   url: '../page_one/page_one?id=fellow41',
    // navigateTo:保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。使 用 wx.navigateBack 可以返回到原页面。小程序中页面栈最多十层
    // }) 
    wx.switchTab({
      url: '../page_one/page_one?id=test',
      // switchTab:跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
    }) 
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    console.log("com")
    setTimeout(()=>{
      wx.stopPullDownRefresh();
    },200)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("com")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})