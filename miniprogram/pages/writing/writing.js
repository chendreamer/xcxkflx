// miniprogram/pages/writing.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'',
    note:'',
    time: '12:01',
    date: '2018-12-25',
    modalName: null,
    textareaBValue: ''
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

  },

  TimeChange(e) {
    this.setData({
      time: e.detail.value
    })
  },
  DateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },
  textareaBInput(e) {
    this.setData({
      textareaBValue: e.detail.value
    })
  },
  titleInput(e) {
    this.setData({
      title: e.detail.value
    })
  },
  noteInput(e) {
    this.setData({
      note: e.detail.value
    })
  },
  publish(){//发布
    // console.log(this.data.title);
    // console.log(this.data.note);
    // console.log(this.data.time);
    // console.log(this.data.date);
    // console.log(this.data.textareaBValue);

    const db = wx.cloud.database()
    db.collection('record').add({
      data: {
        title: this.data.title,
        note: this.data.note,
        time: this.data.time,
        date: this.data.date,
        textareaBValue: this.data.textareaBValue
      },
      success: res => {
        // 在返回结果中会包含新创建的记录的 _id
        this.setData({
          counterId: res._id
        })
        wx.showToast({
          title: '新增记录成功',
        })
        console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '新增记录失败'
        })
        console.error('[数据库] [新增记录] 失败：', err)
      }
    })


  }
})