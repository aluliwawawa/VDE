// pages/startTest/startTest.js
Page({
  data: {
    questions: [],
    currentQuestionIndex: 0,
    score: 0,
    totalQuestions: 15,
    testCompleted: false
  },
  onLoad: function (options) {
    this.loadQuestions()
  },
  loadQuestions: function () {
    // 这里应该从后端API获取题目，为了演示，我们使用模拟数据
    const mockQuestions = [
      { id: 1, question: "1+1=?", answer: 2 },
      { id: 2, question: "2+2=?", answer: 4 },
      // ... 添加更多题目，直到15个
    ]
    this.setData({
      questions: mockQuestions
    })
  },
  checkAnswer: function (e) {
    const userAnswer = parseInt(e.currentTarget.dataset.answer)
    const correctAnswer = this.data.questions[this.data.currentQuestionIndex].answer
    if (userAnswer === correctAnswer) {
      this.setData({
        score: this.data.score + 1
      })
    }
    if (this.data.currentQuestionIndex < this.data.totalQuestions - 1) {
      this.setData({
        currentQuestionIndex: this.data.currentQuestionIndex + 1
      })
    } else {
      this.setData({
        testCompleted: true
      })
    }
  },
  viewScore: function () {
    wx.showModal({
      title: '得分',
      content: `您的得分是：${this.data.score}/${this.data.totalQuestions}`,
      showCancel: false,
      success (res) {
        if (res.confirm) {
          wx.navigateBack()
        }
      }
    })
  }
})
