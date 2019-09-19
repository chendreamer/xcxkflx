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
        console.log(res);
        that.setData({
          showLoginButton: false,
          avatarUrl: res.data.avatarUrl,
          nickName: res.data.nickName
        });
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
    // wx.request({
    //   url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx304185111a7fca04&secret=b2896a9a10f43ebeb101f0e2f75c0fb8&js_codelgDnkD6+CJmKPFKEoK7SfIw+WHwIXdZvfeHC2mKYAAiFHgrG7/tZHUGSdfJ/XigCc5UA5ullpwFyjl3S2curx5Rof2r7TXYg/np3kPRgajc7tAlL60N9mYuuQLJPvAz0OuWfXC+nepS0jluNtC1yrHrNEXYHABXJP04w4+D5cUYWZ30g3eHJmUp8PjimKB5ilTXQ0uqqWJcptBXyArOZhHCLPQQVbLAkrOn7dLyFavZEqRD71Ba9ETPU12UxOqr8hz5iJ+UQDK29RlIYHTiT4HhtZdobBf5WVOEUMc515i8fajxYEiPRsLPkknqCNWspTcrYbXiBZiEFWWoF5gbzmthUCpabzyxQx+r32UxOO9uCCmDC88VaNOblwiCF5H7wQ/+krM61bPQujCHp3lYk6X0kMW+3joGkbf24c/Rrzt8BTX4aMkOESq/Pw8U6vW3nhHfn4O4f9SKMnDFqTKRWPdNEWGrHcVR3hP4hqbqlKMA=&grant_type=authorization_code', //仅为示例，并非真实的接口地址
    //   method: 'Get',
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success(res) {
    //     console.log(res.data)
    //   }
    // })
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