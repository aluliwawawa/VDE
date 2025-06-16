Page({
  data: {
    score: 0,
    total: 0,
    resultLevel: 0,
    resultText: '',
    strafeTotal: 0,
    lrTotal: 0,
    strafeText: '',
    lrText: ''
  },

  onLoad(options) {
    console.log('endTest options:', options) // 添加日志
    const score = parseInt(options.score) || 0
    const total = parseInt(options.total) || 0
    const strafeTotal = parseInt(options.strafeTotal) || 0
    const lrTotal = parseInt(options.lrTotal) || 0

    console.log('Parsed values:', { score, total, strafeTotal, lrTotal })
    
    let resultLevel = 0
    let resultText = ''
    let strafeText = ''
    let lrText = ''

    // 计算正确率
    const percentage = Math.round((score / total) * 100)

    // 计算罚款等级
    if (strafeTotal >= 10) {
      strafeText = '罚好多钱'
    } else if (strafeTotal > 3) {
      strafeText = '罚一点钱'
    } else {
      strafeText = '不会罚款'
    }

    // 计算生命危险等级
    if (lrTotal >= 10) {
      lrText = '生命危险'
    } else if (lrTotal > 3) {
      lrText = '可能受伤'
    } else {
      lrText = '比较安全'
    }

    // 计算总体等级
    if (score === 0) {
      resultLevel = 0
      resultText = '0%'
    } else if (score === 1) {
      resultLevel = 1
      resultText = '33%'
    } else if (score === 2) {
      resultLevel = 2
      resultText = '66%'
    } else {
      resultLevel = 3
      resultText = '100%'
    }

    this.setData({
      score,
      total,
      resultLevel,
      resultText,
      strafeTotal,
      lrTotal,
      strafeText,
      lrText
    })

    console.log('Final data set:', { strafeText, lrText, strafeTotal, lrTotal })
  },

  // 重新开始测试
  restartTest() {
    wx.redirectTo({
      url: '/pages/startTest/startTest'
    })
  },

  // 返回首页
  backToHome() {
    wx.redirectTo({
      url: '/pages/index/index'
    })
  }
}) 