const time = document.getElementById("time-left");
const score = document.getElementById("score");
const squares = document.querySelectorAll(".square");
const len = squares.length;

let position;
let scoreValue = 0;
let currentTime = 30;
let countTimer;
let moleTimer;

const moveMole = () => {
  moleTimer = setInterval(() => {
    squares.forEach((e) => e.classList.remove("mole"));
    const random = squares[Math.floor(Math.random() * len)];
    random.classList.add("mole");
    position = random.id;
  }, 500);
};

const count = () => {
  currentTime--;
  time.innerHTML = currentTime;
  if (currentTime === 0) {
    clearInterval(countTimer);
    clearInterval(moleTimer);
  }
};

countTimer = setInterval(count, 1000);

moveMole();

squares.forEach((e) =>
  e.addEventListener("click", () => {
    if (e.id === position) {
      scoreValue++;
      score.innerHTML = scoreValue;
    }
  })
);
