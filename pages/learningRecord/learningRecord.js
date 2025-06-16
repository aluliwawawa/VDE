// pages/learningRecord/learningRecord.js
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'),
    records: []
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
    this.loadRecords()
  },
  onShow() {
    this.loadRecords()
  },
  getUserProfile(e) {
    wx.getUserProfile({
      desc: '展示用户信息',
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  loadRecords() {
    const records = wx.getStorageSync('testRecords') || []
    // 只保留最近5条记录
    const recentRecords = records.slice(-5)
    this.setData({
      records: recentRecords
    })
  },
  clearRecords() {
    wx.showModal({
      title: '确认清除',
      content: '确定要清除所有学习记录吗？',
      success: (res) => {
        if (res.confirm) {
          wx.removeStorageSync('testRecords')
          this.setData({
            records: []
          })
          wx.showToast({
            title: '记录已清除',
            icon: 'success'
          })
        }
      }
    })
  },
  shareRecord: function () {
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    })
  }
})
