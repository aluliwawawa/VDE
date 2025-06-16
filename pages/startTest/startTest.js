// pages/startTest/startTest.js
const questions = require('../../data/questions.js')

Page({
  data: {
    currentQuestionIndex: 0,
    questions: [],
    score: 0,
    totalQuestions: 0,
    progressPercentage: 0,
    showDialog: false,
    isCorrect: false,
    currentImage: '',
    strafeTotal: 0,
    lrTotal: 0,
    currentAnswer: null,
    testCompleted: false
  },

  onLoad() {
    console.log('startTest onLoad called')
    // 随机选择3个问题
    const shuffledQuestions = [...questions].sort(() => Math.random() - 0.5)
    const selectedQuestions = shuffledQuestions.slice(0, 3)

    console.log('Selected questions:', selectedQuestions.length)

    this.setData({
      questions: selectedQuestions,
      totalQuestions: selectedQuestions.length
    })

    // 初始化进度
    this.updateProgress()
  },

  updateProgress() {
    const percentage = this.data.totalQuestions > 0
      ? Math.round(((this.data.currentQuestionIndex + 1) / this.data.totalQuestions) * 100)
      : 0
    console.log('Progress update:', {
      currentQuestionIndex: this.data.currentQuestionIndex,
      totalQuestions: this.data.totalQuestions,
      percentage
    })
    this.setData({
      progressPercentage: percentage
    })
  },

  handleAnswer(e) {
    const answer = e.detail.value
    const currentQuestion = this.data.questions[this.data.currentQuestionIndex]
    const isCorrect = answer === currentQuestion.antwortung - 1

    // 如果答错了，累加罚款和生命危险分数
    if (!isCorrect) {
      this.setData({
        strafeTotal: this.data.strafeTotal + currentQuestion.strafe,
        lrTotal: this.data.lrTotal + currentQuestion.LR
      })
    }

    this.setData({
      showDialog: true,
      isCorrect,
      currentImage: isCorrect ? '/images/correct.png' : '/images/wrong.png',
      currentAnswer: answer
    })

    if (isCorrect) {
      this.setData({
        score: this.data.score + 1
      })
    }
  },

  closeDialog() {
    this.setData({
      showDialog: false,
      currentAnswer: null,
      currentImage: ''
    })
    
    if (this.data.currentQuestionIndex < this.data.totalQuestions - 1) {
      this.setData({
        currentQuestionIndex: this.data.currentQuestionIndex + 1
      })
      this.updateProgress()
    } else {
      // 测试结束，跳转到结果页面
      this.setData({
        testCompleted: true
      })
      const url = `/pages/endTest/endTest?score=${this.data.score}&total=${this.data.totalQuestions}&strafeTotal=${this.data.strafeTotal}&lrTotal=${this.data.lrTotal}`
      console.log('Redirecting to:', url) // 添加日志
      wx.redirectTo({ url })
    }
  },

  viewScore() {
    const url = `/pages/endTest/endTest?score=${this.data.score}&total=${this.data.totalQuestions}&strafeTotal=${this.data.strafeTotal}&lrTotal=${this.data.lrTotal}`
    wx.redirectTo({ url })
  }
})
