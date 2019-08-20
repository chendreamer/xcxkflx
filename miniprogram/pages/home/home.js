// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showLoginButton : true,
    avatarUrl : '',
    nickName : ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    wx.getStorage({//查询是否已授权
      key: 'userInfo',
      success(res) {
        that.setData({
          showLoginButton: false,
          avatarUrl: res.data.avatarUrl,
          nickName: res.data.nickName
        });
        console.log(res.data);
      },
      fail(res) {
        that.setData({
          showLoginButton: true,
          avatarUrl: '',
          nickName: ''
        });
        console.log(res)
      }
    });

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    console.log(this.data.showLoginButton);
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  
  //获取授信
  onGotUserInfo: function(e) {
    var that = this;
    console.log(e);
    if (e.detail.errMsg === 'getUserInfo:ok'){
      that.setData({
        showLoginButton: false,
        avatarUrl: e.detail.userInfo.avatarUrl,
        nickName: e.detail.userInfo.nickName
      });
      wx.setStorage({
        key: "userInfo",
        data: e.detail.userInfo
      });
      wx.getStorage({
        key: 'userInfo',
        success(res) {
          console.log(res.data)
        }
      });
    }else{
      that.setData({
        showLoginButton: true,
        avatarUrl: '',
        nickName: ''
      });
    }
  },

  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null,
      showLoginButton: true,
      avatarUrl: '',
      nickName: ''
    })
  },
})