Page({
  data: {
    score: 0,
    total: 0,
    passed: false,
    resultLevel: 0, // 0-3 四个等级
    resultText: '',
    resultImage: ''
  },

  onLoad(options) {
    const { score, total } = options
    let resultLevel = 0
    let resultText = ''
    let resultImage = ''

    // 计算正确率
    const percentage = Math.round((score / total) * 100)

    if (score === 0) {
      resultLevel = 0
      resultText = '0%'
      resultImage = '/images/results/level0.png'
    } else if (score === 1) {
      resultLevel = 1
      resultText = '33%'
      resultImage = '/images/results/level1.png'
    } else if (score === 2) {
      resultLevel = 2
      resultText = '66%'
      resultImage = '/images/results/level2.png'
    } else {
      resultLevel = 3
      resultText = '100%'
      resultImage = '/images/results/level3.png'
    }

    this.setData({
      score,
      total,
      resultLevel,
      resultText,
      resultImage
    })
  },

  // 重新开始测试
  restartTest: function() {
    wx.redirectTo({
      url: '/pages/startTest/startTest'
    });
  },

  // 返回首页
  goToHome: function() {
    wx.redirectTo({
      url: '/pages/index/index'
    });
  }
}); 