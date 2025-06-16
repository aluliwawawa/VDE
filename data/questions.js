const questions = [
  {
    id: 1,
    frage: "在德国，行人过马路时应该注意什么？",
    auswahl: [
      "直接过马路",
      "等待绿灯",
      "看到没车就可以过",
      "以上都不对"
    ],
    antwortung: 1,
    image: "/images/questions/1.png",
    Kat: "行人交通",
    erklaerung: "在德国，行人必须遵守交通信号灯。红灯时禁止过马路，必须等待绿灯。即使在绿灯时，也要注意观察来往车辆，确保安全。",
    strafe: 5,
    LR: 5
  },
  {
    id: 2,
    frage: "在德国，骑自行车时是否需要戴头盔？",
    auswahl: [
      "必须戴",
      "建议戴但不强制",
      "不需要戴",
      "只在夜间需要戴"
    ],
    antwortung: 1,
    image: "/images/questions/2.png",
    Kat: "自行车交通",
    erklaerung: "在德国，骑自行车时戴头盔不是强制性的，但强烈建议佩戴。头盔可以显著降低头部受伤的风险，特别是在发生事故时。",
    strafe: 5,
    LR: 5
  },
  {
    id: 3,
    frage: "在德国，驾驶时使用手机是否违法？",
    auswahl: [
      "完全合法",
      "停车时可以使用",
      "等红灯时可以使用",
      "完全禁止使用"
    ],
    antwortung: 1,
    image: "/images/questions/3.png",
    Kat: "驾驶规则",
    erklaerung: "在德国，驾驶时完全禁止使用手机，包括等红灯时。违反规定将面临罚款和扣分。只有在车辆完全停止且发动机熄火的情况下才可以使用手机。",
    strafe: 5,
    LR: 5
  },
  {
    id: 4,
    frage: "在德国，高速公路上的最低限速是多少？",
    auswahl: [
      "没有最低限速",
      "60公里/小时",
      "80公里/小时",
      "100公里/小时"
    ],
    antwortung: 1,
    image: "/images/questions/4.png",
    Kat: "高速公路规则",
    erklaerung: "德国高速公路没有最低限速，但建议车速不低于60公里/小时。过慢的行驶可能会影响交通流畅度，并可能被罚款。",
    strafe: 5,
    LR: 5
  }
];

module.exports = questions; 