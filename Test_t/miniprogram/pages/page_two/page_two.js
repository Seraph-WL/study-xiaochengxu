const db = wx.cloud.database();//初始化数据库
const fellowDb = db.collection("test_db");//获取数据库中某个集合
const _ = db.command //定义查询指令
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inpVal:""
  },
  //获取文本框中的值
  getInpVal(e){
    this.setData({
      inpVal:e.detail.value
    })
  },
  //像数据库中添加数据
  addHandle(){
    fellowDb.add({
      data:{
        inpVal:this.data.inpVal,
        isDone:true
      }
    }).then((res)=>{
      console.log(res);
    })
  },
  //获取数据
  getHandle(){
    //获取集合中的全部数据
    // fellowDb.get().then((res)=>{
    //   console.log(res);
    // })
    //获取集合中的部分数据（isDone 为 true 的数据）
    // fellowDb.where({
    //   isDone:true
    // }).get().then((res)=>{
    //   console.log(res);
    // })

    //获取集合中的部分数据利用指令（inpVal 中 等于 你好和1221212 数据）
    fellowDb.where({
      inpVal:_.in(["你好","1221212"])
    }).get().then((res)=>{
      console.log(res);
    })

    //获取具体某一条记录 (根据id)
    // fellowDb.doc("aa133ce55f44fb76003d01d63e9cf21a").get().then((res)=>{
    //   console.log(res);
    // })
  },
  //更新数据
  updateHandle(){
    // fellowDb.doc("aa133ce55f44fb76003d01d63e9cf21a").update({
    //   data:{
    //     isDone:false
    //   }
    // }).then((res)=>{
    //   console.log(res);
    // })

    // fellowDb.doc("aa133ce55f44fb76003d01d63e9cf21a").update({
    //   data:{
    //     like:_.inc(1)
    // inc  原子自增字段值
    //   }
    // }).then((res)=>{
    //   console.log(res);
    // })
    fellowDb.doc("7498b5fe5f44fbae004f5b504b3a8b30").update({
      data:{
        arr:_.push("hello")
        // 添加
      }
    }).then((res)=>{
      console.log(res);
    })
  },
  //删除
  deleteHandle(){
    fellowDb.doc("aa133ce55f44fb76003d01d63e9cf21a").remove().then((res)=>{
      console.log(res);
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