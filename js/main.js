const select = document.querySelector(".select");
const text = document.querySelector(".text1");
const input = document.querySelector(".input");
const time = document.querySelector("#time");
const score1 = document.querySelector(".score1");
const hightscore = document.querySelector(".hightscore");
const modal = document.querySelector(".modal");
const score2 = document.querySelector(".score2");

const words = [
  "abreact",
  "abreacted",
  "abreacting",
  "abreaction",
  "abreactions",
  "paltrier",
  "paltriest",
  "paltrily",
  "paltriness",
  "paltrinesses",
  "paltry",
  "paludal",
  "paludism",
  "shiv",
  "shiva",
  "shivah",
  "shivahs",
  "shivaree",
  "shivareed",
  "shivareeing",
];

var randomText;
var num = 0;
var gameTime = 10;
var HScore = localStorage.getItem("HScore") ? 
localStorage.getItem("HScore") : 0

select.value = localStorage.getItem("selectValue") ?
localStorage.getItem("selectValue") : "Easy"
localStorage.setItem("selectValue", select.value)

select.addEventListener("change", ()=>{
  localStorage.setItem("selectValue", select.value)
})
const writeText = () => {
  var index = Math.floor(Math.random() * words.length);
  randomText = words[index];
  text.textContent = randomText;
};
writeText();

input.addEventListener("input", () => {
  if (randomText == input.value) {
    writeText();
    input.value = "";
    num++;
    score1.textContent = num;
    var level = select.value

    if(level == "Easy"){
      gameTime += 5
      time.textContent += "+5"
    }else if(level == "Medium"){
      gameTime += 3
      time.textContent += "+3"
    }else{
      gameTime += 2
      time.textContent += "+2"
    }
  }
});

const interval = setInterval(() => {
  if (gameTime == 0) {
    clearInterval(interval);
    modal.classList.add("active");
    score2.textContent = num;
    if(num>HScore){
      localStorage.setItem("HScore", num)
      HScore = localStorage.getItem("HScore")
    }
    hightscore.textContent = HScore
    
  } else {
    gameTime--;
    time.textContent = gameTime;
  }
}, 1000);
hightscore.textContent = HScore
