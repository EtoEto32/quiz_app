// クイズデータの配列

const quiz=[
  {
    "question":"1+1は?",
    "choices":["1","2","3","4"],
    "answer":2
  },
  {
    "question":"ドラゴンボールの主人公は?",
    "choices":["孫悟空","ルフィ","うずまきナルト","犬夜叉"],
    "answer":"孫悟空"
  },
  {
    "question":"マリオシリーズの登場人物ではないのは？",
    "choices":["ルイージ","ワリオ","ワルイージ","カービィー"],
    "answer":"カービィー"
  },
  //　こっからさらに問題を追加出来る。
]

//現在の問題のインデックス
let currentQuiz=0;

//最終的なスコア
let score=0;

//DOM要素の取得
const questionEl=document.getElementById("question");
const choicesEl=document.getElementById("choices");
const resultEl=document.getElementById("result");
const nextBtn=document.getElementById("next-btn");

// クイズをロードする関数
function loadQuiz(){
  
}