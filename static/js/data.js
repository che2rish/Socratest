// 질문
const qnaList = [
  {
    q: '1. 나른한 주말 오후, 당신은 잠에서 깼습니다.<br>\
           지금 당신의 기분은 어떤가요?  '
  }, 
  {
    q: '2. 일어나서 핸드폰을 확인해보니 연락이 쌓여있었습니다. <br>\
           이 때 당신은?' 
  },
  {
    q: '3. 점심을 먹고 강아지와 산책을 가려고 준비하고 있습니다. <br>\
           그런데 밖을 보니 갑자기 비가 옵니다. 당신은 어떻게 할건가요?' 
  },
  {
    q: '4. 출출해진 당신, 냉장고를 열어보니 냉장고가 비어있습니다. <br>\
          오늘 저녁은 어떻게 하고싶은가요?'
  },
  {
    q: '5. 하루를 마치고 침대에 누운 당신 <br>\
           오늘 하루는 어떤 하루였나요?'
  },
]  

// 결과
const infoList = [
  {
    name: '분노',
    desc: '버럭이가 찾아왔나요? 당신은 현재 "분노" 상태네요.<br>\
           지금 당신의 분노 상태 또한 하나의 밑거름이 될 수 있습니다.<br>\
           마음을 차분하게 가라앉힐 필요가 있어 보이네요.',
    saying:'화를 내면 주위의 사람들은 많은 상처를 입는다. <br>\
           그러나 그것보다 더 큰 상처를 입는 사람은 바로 화를 내는 당사자이다...'   
  },
  {
    name: '슬픔',
    desc: '당신의 마음에는 현재 "슬픔"이가 찾아왔네요.<br>\
           자신의 마음을 헤아려보고 알아차림으로써 당신의 마음을 위로해보세요.',
    saying:'행복이란 하늘이 파랗다는 걸 발견하는 것 만큼이나 쉬운 일이다.'       
  },
  {
    name: '걱정',
    desc: '당신은 지금 소심이가 찾아와 "걱정"이 많군요?<br>\
           때로는 걱정보다는 행동을 함으로써 그 걱정을 덜어보는건 어떠신가요?<br>\
           일단 저질러보기! 추천합니다!',
    saying:'방전된 우리에게 정말 필요한 것은 "더"하는게 아니라 "덜"하는게 아닐까? <br>\
            걱정도 좀 덜 하고,<br> 노력도 좀 덜 하고, <br> 후회도 좀 덜 하면 좋겠다. '   
  },
  {
    name: '중립',
    desc: '지금 당신의 마음상태는 조화롭군요?<br>\
           어느 한쪽으로 치우치지 않는 마음, 일상의 작은 즐거움을 찾아보시는건 어떤가요?',
    saying:'별거 없던 하루<br> 늘 그랬듯이 지나간 시간 <br> 시간이 지나면 문득 그리워질<br>\
            추억이 될 일상 <br> 평범해서 더 소중한 오늘이야.'       
  },
  {
    name: '행복',
    desc: '지금 당신은 "행복"한 상태군요.<br>\
           지금 이 상태를 온전히 즐겨보세요.<br>\
           자신의 해피 바이러스를 같이 나누어주는건 어때요? 당신의 그 행복이 널리 퍼질거에요.'  ,
    saying:'삶과 행복은 언제나 현재진행형입니다.'     
  },
]