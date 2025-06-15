// pages/index/index.js
Page({
  data: {
    // 页面的初始数据
  },
  onLoad: function (options) {
    // 页面加载时执行的函数
  },
  startTest: function () {
    // 点击"开始答题"按钮时执行的函数
    wx.navigateTo({
      url: '/pages/startTest/startTest',
    })
  }
})
