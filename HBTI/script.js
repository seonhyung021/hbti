// script.js

const questions = [
  { q: "친구를 처음 만났을 때 나는?", a1: "먼저 다가가서 말을 건다", a2: "기다리며 눈치를 본다", type: "EI", value1: "E", value2: "I" },
  { q: "사람 많은 모임이 있을 때 나는?", a1: "에너지 넘치고 즐겁다", a2: "지치고 빨리 끝났으면 좋겠다", type: "EI", value1: "E", value2: "I" },
  { q: "혼자 있는 시간이 많으면?", a1: "심심하고 외롭다", a2: "오히려 편하다", type: "EI", value1: "E", value2: "I" },

  { q: "정보를 받아들일 때 나는?", a1: "현실적이고 구체적인 게 좋다", a2: "상상하고 추론하는 게 좋다", type: "SN", value1: "S", value2: "N" },
  { q: "설명서를 볼 때 나는?", a1: "차근차근 단계적으로 본다", a2: "대충 훑고 감으로 한다", type: "SN", value1: "S", value2: "N" },
  { q: "친구 얘기를 들을 때 나는?", a1: "사실부터 묻는다", a2: "전체 분위기부터 느낀다", type: "SN", value1: "S", value2: "N" },

  { q: "친구가 고민 상담을 하면 나는?", a1: "논리적으로 해결책을 제안한다", a2: "공감하고 위로해준다", type: "TF", value1: "T", value2: "F" },
  { q: "갈등 상황에서 나는?", a1: "사실과 원칙을 중시한다", a2: "상대 기분을 먼저 고려한다", type: "TF", value1: "T", value2: "F" },
  { q: "감정을 표현할 때 나는?", a1: "표현 잘 안 하는 편", a2: "감정 표현에 솔직한 편", type: "TF", value1: "T", value2: "F" },

  { q: "일정을 관리할 때 나는?", a1: "미리 계획을 세우고 지킨다", a2: "그때그때 유동적으로 한다", type: "JP", value1: "J", value2: "P" },
  { q: "시험 전날 나는?", a1: "계획대로 복습한다", a2: "촉이 오는 대로 공부한다", type: "JP", value1: "J", value2: "P" },
  { q: "여행 갈 때 나는?", a1: "동선부터 미리 정리해둔다", a2: "즉흥적으로 움직인다", type: "JP", value1: "J", value2: "P" }
];

const resultMap = {
  ENFP: { name: "꿈돌이 햄찌", desc: "감성적이고 상상력이 풍부한 자유로운 영혼!", img: "img/enfp.png" },
  ENTP: { name: "아이디어 햄찌", desc: "창의적이고 재치 넘치는 토론왕 햄스터!", img: "img/entp.png" },
  INFJ: { name: "평화주의 햄찌", desc: "조용하지만 내면은 뜨거운 이상주의 햄스터!", img: "img/infj.png" },
  INFP: { name: "눈물 가득 햄찌", desc: "감정에 충실하고 따뜻한 공감 햄스터!", img: "img/infp.png" },
  ESTJ: { name: "원칙주의 햄찌", desc: "체계적이고 이성적인 리더 햄스터!", img: "img/estj.png" },
  ESFJ: { name: "인싸 햄찌", desc: "주변을 잘 챙기고 협동을 좋아하는 햄스터!", img: "img/esfj.png" },
  ISTJ: { name: "꼼꼼이 햄찌", desc: "계획적이고 신중한 현실주의자 햄스터!", img: "img/istj.png" },
  ISFJ: { name: "포근포근한 햄찌", desc: "조용하고 성실하며 남을 잘 도와주는 햄스터!", img: "img/isfj.png" },
  ESTP: { name: "즉흥적인 햄찌", desc: "즉흥적이고 모험을 즐기는 에너지 넘치는 햄스터!", img: "img/estp.png" },
  ESFP: { name: "흥부자 햄찌", desc: "분위기 메이커! 자유로운 영혼의 즐거운 햄찌!", img: "img/esfp.png" },
  ISTP: { name: "조용 섬세한 햄찌", desc: "냉철하고 고독을 즐기는 햄스터!", img: "img/istp.png" },
  ISFP: { name: "예술가 햄찌", desc: "감성적이고 유연한 자유로운 표현자 햄찌!", img: "img/isfp.png" },
  INTJ: { name: "전략가 햄찌", desc: "계획적이고 독립적인 분석 햄스터!", img: "img/intj.png" },
  INTP: { name: "논리왕 햄찌", desc: "이론을 좋아하고 지적 호기심이 많은 햄찌!", img: "img/intp.png" },
  ENTJ: { name: "지휘관 햄찌", desc: "야망 있고 주도적인 리더 햄스터!", img: "img/entj.png" },
  ENFJ: { name: "따뜻한 리더 햄찌", desc: "카리스마와 공감력을 갖춘 사회적 햄찌!", img: "img/enfj.png" }

};
const matchData = {
  ENFP: {
    good: { name: "평화주의 햄찌", img: "img/infj.png" },
    bad: { name: "꼼꼼이 햄찌", img: "img/istj.png" }
  },
  ENTP: {
    good: { name: "전략가 햄찌", img: "img/intj.png" },
    bad: { name: "포근포근한 햄찌", img: "img/isfj.png" }
  },
  INFJ: {
    good: { name: "꿈돌이 햄찌", img: "img/enfp.png" },
    bad: { name: "즉흥적인 햄찌", img: "img/estp.png" }
  },
  INFP: {
    good: { name: "따뜻한 리더 햄찌", img: "img/enfj.png" },
    bad: { name: "원칙주의 햄찌", img: "img/estj.png" }
  },
  ESTJ: {
    good: { name: "포근포근한 햄찌", img: "img/isfj.png" },
    bad: { name: "눈물 가득 햄찌", img: "img/infp.png" }
  },
  ESFJ: {
    good: { name: "예술가 햄찌", img: "img/isfp.png" },
    bad: { name: "논리왕 햄찌", img: "img/intp.png" }
  },
  ISTJ: {
    good: { name: "흥부자 햄찌", img: "img/esfp.png" },
    bad: { name: "꿈돌이 햄찌", img: "img/enfp.png" }
  },
  ISFJ: {
    good: { name: "인싸 햄찌", img: "img/esfj.png" },
    bad: { name: "아이디어 햄찌", img: "img/entp.png" }
  },
  ESTP: {
    good: { name: "조용 섬세한 햄찌", img: "img/istp.png" },
    bad: { name: "평화주의 햄찌", img: "img/infj.png" }
  },
  ESFP: {
    good: { name: "예술가 햄찌", img: "img/isfp.png" },
    bad: { name: "전략가 햄찌", img: "img/intj.png" }
  },
  ISTP: {
    good: { name: "즉흥적인 햄찌", img: "img/estp.png" },
    bad: { name: "따뜻한 리더 햄찌", img: "img/enfj.png" }
  },
  ISFP: {
    good: { name: "흥부자 햄찌", img: "img/esfp.png" },
    bad: { name: "지휘관 햄찌", img: "img/entj.png" }
  },
  INTJ: {
    good: { name: "아이디어 햄찌", img: "img/entp.png" },
    bad: { name: "흥부자 햄찌", img: "img/esfp.png" }
  },
  INTP: {
    good: { name: "아이디어 햄찌", img: "img/entp.png" },
    bad: { name: "인싸 햄찌", img: "img/esfj.png" }
  },
  ENTJ: {
    good: { name: "논리왕 햄찌", img: "img/intp.png" },
    bad: { name: "예술가 햄찌", img: "img/isfp.png" }
  },
  ENFJ: {
    good: { name: "눈물 가득 햄찌", img: "img/infp.png" },
    bad: { name: "조용 섬세한 햄찌", img: "img/istp.png" }
  }
};

let current = 0;
let score = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

const startBtn = document.getElementById("start-btn");
const quizScreen = document.getElementById("quiz-screen");
const startScreen = document.getElementById("start-screen");
const resultScreen = document.getElementById("result-screen");
const questionText = document.getElementById("question-text");
const btnA1 = document.getElementById("btn-a1");
const btnA2 = document.getElementById("btn-a2");

startBtn.addEventListener("click", () => {
  startScreen.style.display = "none";
  quizScreen.style.display = "block";
  showQuestion();
});

function showQuestion() {
  const q = questions[current];
  questionText.innerText = q.q;
  btnA1.innerText = q.a1;
  btnA2.innerText = q.a2;
  btnA1.onclick = () => choose(q.value1);
  btnA2.onclick = () => choose(q.value2);
}

function choose(value) {
  score[value]++;
  current++;
  if (current >= questions.length) {
    showResult();
  } else {
    showQuestion();
  }
}

function showResult() {
  quizScreen.style.display = "none";
  resultScreen.style.display = "block";
  const mbti =
    (score.E > score.I ? "E" : "I") +
    (score.S > score.N ? "S" : "N") +
    (score.T > score.F ? "T" : "F") +
    (score.J > score.P ? "J" : "P");
  const result = resultMap[mbti] || { name: "알 수 없는 햄찌", desc: "데이터 부족!", img: "img/default.png" };
  document.getElementById("result-type").innerText = result.name;
  document.getElementById("result-desc").innerText = result.desc;
  document.getElementById("result-img").src = result.img;

  const goodMatch = matchData[mbti].good;
  const badMatch = matchData[mbti].bad;

  document.getElementById('match-good-img').src = goodMatch.img;
  document.getElementById('match-good-name').textContent = goodMatch.name;

  document.getElementById('match-bad-img').src = badMatch.img;
  document.getElementById('match-bad-name').textContent = badMatch.name;

  function getKeyByValue(obj, value) {
  return Object.keys(obj).find(key => obj[key].img === value);
}
  // 퍼센트 계산
const eiTotal = score.E + score.I;
const snTotal = score.S + score.N;
const tfTotal = score.T + score.F;
const jpTotal = score.J + score.P;

const ePercent = Math.round((score.E / eiTotal) * 100);
const iPercent = 100 - ePercent;
const sPercent = Math.round((score.S / snTotal) * 100);
const nPercent = 100 - sPercent;
const tPercent = Math.round((score.T / tfTotal) * 100);
const fPercent = 100 - tPercent;
const jPercent = Math.round((score.J / jpTotal) * 100);
const pPercent = 100 - jPercent;

// 스타일에 퍼센트 반영
document.querySelector('.e-bar').style.width = `${ePercent}%`;
document.querySelector('.i-bar').style.width = `${iPercent}%`;
document.querySelector('.s-bar').style.width = `${sPercent}%`;
document.querySelector('.n-bar').style.width = `${nPercent}%`;
document.querySelector('.t-bar').style.width = `${tPercent}%`;
document.querySelector('.f-bar').style.width = `${fPercent}%`;
document.querySelector('.j-bar').style.width = `${jPercent}%`;
document.querySelector('.p-bar').style.width = `${pPercent}%`;
// 퍼센트 텍스트 표시
document.querySelector(".e-percent").innerText = `E: ${ePercent}%`;
document.querySelector(".i-percent").innerText = `I: ${iPercent}%`;
document.querySelector(".s-percent").innerText = `S: ${sPercent}%`;
document.querySelector(".n-percent").innerText = `N: ${nPercent}%`;
document.querySelector(".t-percent").innerText = `T: ${tPercent}%`;
document.querySelector(".f-percent").innerText = `F: ${fPercent}%`;
document.querySelector(".j-percent").innerText = `J: ${jPercent}%`;
document.querySelector(".p-percent").innerText = `P: ${pPercent}%`;
}
document.getElementById("restart-btn").addEventListener("click", () => {
  // 점수 초기화
  for (let key in score) {
    score[key] = 0;
  }
  current = 0;

  // 화면 전환
  resultScreen.style.display = "none";
  startScreen.style.display = "block";
});