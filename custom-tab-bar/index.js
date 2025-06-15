Component({
  data: {
    value: 0,
    list: [
      { value: 'index', label: '首页', icon: 'home' },
      { value: 'basicKnowledge', label: '基础知识', icon: 'bookmark' },
      { value: 'learningRecord', label: '学习记录', icon: 'chart' }
    ]
  },

  methods: {
    onChange(e) {
      const value = e.detail.value;
      this.setData({ value });
      wx.switchTab({
        url: `/pages/${value}/${value}`
      });
    }
  }
}); 