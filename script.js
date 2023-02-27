const rgbParagraph = document.getElementById('rgb-color');
const resetScore = document.getElementById('reset-score');
const answerParagraph = document.getElementById('answer');
const section = document.querySelector('section');
const resetButton = document.getElementById('reset-game');
const scoreSpan = document.getElementById('score-number');
const selectDifficulty = document.getElementById('change-difficulty');
const initialText = 'Choose a color';

resetScore.addEventListener('click', () => {
  scoreSpan.innerHTML = 0;
});

const createCircles = (num) => {
  const newCircles = [];
  for (let index = 0; index < num; index += 1) {
    const circles = document.createElement('div');
    circles.classList.add('ball');
    section.appendChild(circles);
    newCircles.push(circles);
  }
  return newCircles;
};
let colorCircles = createCircles(6);

const createRGB = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
};

const paintCircles = () => colorCircles
  .forEach((circle) => {
    const circleColor = circle;
    circleColor.style.backgroundColor = createRGB();
  });

const createParagrah = () => {
  const arrayOfRGB = colorCircles.map((circle) => circle.style.backgroundColor);
  rgbParagraph.innerHTML = arrayOfRGB[Math.floor(Math.random() * arrayOfRGB.length)];
};

const changeParagraph = (rgb) => {
  if (rgb === rgbParagraph.innerHTML) {
    answerParagraph.innerHTML = 'Good job!';
    scoreSpan.innerHTML = Number(scoreSpan.innerHTML) + 3;
    colorCircles.forEach((circle) => circle.removeEventListener('click', handleClick));
  } else {
    answerParagraph.innerHTML = 'Oops!! Try again...';
    scoreSpan.innerHTML = Number(scoreSpan.innerHTML) - 1;
  }
};

const handleClick = (event) => {
  const rgb = event.target.style.backgroundColor;
  changeParagraph(rgb);
};

const addClickEvents = () => {
  colorCircles.forEach((circle) => {
    circle.addEventListener('click', handleClick);
  });
};

resetButton.addEventListener('click', () => {
  paintCircles();
  createParagrah();
  addClickEvents();
  answerParagraph.innerHTML = initialText;
});

const changeDifficulty = (num) => {
  colorCircles.forEach((circle) => circle.remove());
  colorCircles = createCircles(num);
  paintCircles();
  createParagrah();
  answerParagraph.innerHTML = initialText;
  scoreSpan.innerHTML = 0;
  addClickEvents();
};

selectDifficulty.addEventListener('change', () => {
  if (selectDifficulty.value === 'Hard') {
    changeDifficulty(9);
  } else if (selectDifficulty.value === 'Easy') {
    changeDifficulty(3);
  } else if (selectDifficulty.value === 'Medium') {
    changeDifficulty(6);
  }
});

window.onload = () => {
  paintCircles();
  createParagrah();
  answerParagraph.innerHTML = initialText;
  scoreSpan.innerHTML = 0;
  addClickEvents();
};
