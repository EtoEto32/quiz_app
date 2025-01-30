// クイズデータの配列
const quizData = [
  {
    question: "1+1は?",
    choices: ["1", "2", "3", "4"],
    answer: "2"
  },
  {
    question: "ドラゴンボールの主人公は?",
    choices: ["孫悟空", "ルフィ", "うずまきナルト", "犬夜叉"],
    answer: "孫悟空"
  },
  {
    question: "マリオシリーズの登場人物ではないのは？",
    choices: ["ルイージ", "ワリオ", "ワルイージ", "カービィー"],
    answer: "カービィー"
  }
];

// 現在の問題のインデックス
let currentQuestion = 0;

// 最終的なスコア
let score = 0;

// DOM要素の取得
const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const resultEl = document.getElementById("result");
const nextBtn = document.getElementById("next-btn");

// クイズをロードする関数
function loadQuiz() {
  // 結果と次へボタンを初期化
  resultEl.textContent = "";
  nextBtn.style.display = "none";

  // 全ての問題が終了したら結果を表示
  if (currentQuestion>=quizData.length) {
    showFinalResult();
    return;
  }

  // 現在の問題を取得
  const currentQuiz = quizData[currentQuestion];
  questionEl.textContent = currentQuiz.question;
  choicesEl.innerHTML = "";

  // 選択肢のボタンを作成
  currentQuiz.choices.forEach(choice => {
    const button = document.createElement("button");
    button.textContent = choice;
    button.addEventListener("click", () => selectAnswer(choice));
    choicesEl.appendChild(button);
  });
}

// 答えを選択したときの処理
function selectAnswer(selected) {
  const currentQuiz = quizData[currentQuestion];

  // 正誤判定
  if (selected == currentQuiz.answer) {
    resultEl.textContent = "正解！";
    resultEl.style.color = "green";
    score++;
  } else {
    resultEl.textContent = `不正解、正解は ${currentQuiz.answer} です。`;
    resultEl.style.color = "red";
  }

  // 次へボタンを表示
  nextBtn.style.display = "block";
}

// 結果表示画面
function showFinalResult() {
  questionEl.textContent = "クイズ終了！";
  choicesEl.innerHTML = "";
  resultEl.textContent = `あなたのスコアは ${score} 点です。`;
  resultEl.style.color = "blue";
  nextBtn.textContent = "もう一度";
  nextBtn.style.display = "block";
}

// 問題を更新する関数
nextBtn.addEventListener("click", () => {
  // クイズをリスタートする
  if (currentQuestion <= quizData.length) {
    currentQuestion++;
  }
  loadQuiz();
});

// クイズを初期化
loadQuiz();
