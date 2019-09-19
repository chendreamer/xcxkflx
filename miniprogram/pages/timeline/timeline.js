Page({
  data: {
    openid: '',
    list: []
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    const db = wx.cloud.database();
    // 查询当前用户所有的 counters
    db.collection('record').get({
      success: res => {
        this.setData({
          list: res.data
        })
        //console.log('[数据库] [查询记录] 成功: ', res)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '查询记录失败'
        })
        console.error('[数据库] [查询记录] 失败：', err)
      }
    })
  },


});