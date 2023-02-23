const rgbParagraph = document.getElementById('rgb-color');
const answerParagraph = document.getElementById('answer');
const section = document.querySelector('section');
const resetButton = document.getElementById('reset-game');
const scoreSpan = document.getElementById('score-number');
const difficultyBtn = document.getElementById('difficulty');
const initialText = 'Escolha uma cor';

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
  rgbParagraph.innerHTML = arrayOfRGB[Math.floor(Math.random() * arrayOfRGB.length)].substr(3);
};

const changeParagraph = (rgb) => {
  if (rgb === rgbParagraph.innerHTML) {
    answerParagraph.innerHTML = 'Acertou!';
    scoreSpan.innerHTML = Number(scoreSpan.innerHTML) + 3;
  } else {
    answerParagraph.innerHTML = 'Errou! Tente novamente!';
    scoreSpan.innerHTML = Number(scoreSpan.innerHTML) - 1;
  }
};

const addClickEvents = () => {
  colorCircles.forEach((circle) => {
    circle.addEventListener('click', (event) => {
      const rgb = event.target.style.backgroundColor;
      const rgbNumbers = rgb.substr(3);
      changeParagraph(rgbNumbers);
    });
  });
};

resetButton.addEventListener('click', () => {
  paintCircles();
  createParagrah();
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

difficultyBtn.addEventListener('click', () => {
  if (colorCircles.length === 6) {
    changeDifficulty(9);
  } else if (colorCircles.length === 9) {
    changeDifficulty(3);
  } else if (colorCircles.length === 3) {
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
