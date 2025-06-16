// pages/startTest/startTest.js
const app = getApp()
const { questions } = require('../../data/questions.js')

Page({
  data: {
    currentQuestionIndex: 0,
    questions: [],
    totalQuestions: 3,
    score: 0,
    showDialog: false,
    isCorrect: false,
    currentAnswer: '',
    currentExplanation: '',
    currentImage: '',
    showResult: false
  },

  onLoad() {
    this.loadQuestions()
  },

  loadQuestions() {
    // 随机选择3道题目
    const shuffled = [...questions].sort(() => 0.5 - Math.random())
    const selected = shuffled.slice(0, this.data.totalQuestions)
    this.setData({
      questions: selected
    })
  },

  checkAnswer(e) {
    const { value } = e.detail
    const currentQuestion = this.data.questions[this.data.currentQuestionIndex]
    const isCorrect = value === currentQuestion.antwortung - 1  // 因为答案是从1开始的，而value是从0开始的

    this.setData({
      showDialog: true,
      isCorrect,
      currentAnswer: currentQuestion.auswahl[value],
      currentExplanation: currentQuestion.erklaerung,
      currentImage: isCorrect ? '/images/correct.png' : '/images/wrong.png',
      score: isCorrect ? this.data.score + 1 : this.data.score
    })
  },

  closeDialog() {
    this.setData({
      showDialog: false
    })

    // 检查是否是最后一题
    if (this.data.currentQuestionIndex === this.data.totalQuestions - 1) {
      // 保存测试记录
      const records = wx.getStorageSync('testRecords') || []
      const now = new Date()
      const date = `${now.getMonth() + 1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}`
      records.push({
        date: date,
        score: this.data.score
      })
      wx.setStorageSync('testRecords', records)

      // 跳转到结果页
      wx.redirectTo({
        url: `/pages/endTest/endTest?score=${this.data.score}&total=${this.data.totalQuestions}`
      })
    } else {
      // 进入下一题
      this.setData({
        currentQuestionIndex: this.data.currentQuestionIndex + 1
      })
    }
  }
})
