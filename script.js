const colorCircles = Object.values(document.getElementsByClassName('ball'));
const rgbParagraph = document.getElementById('rgb-color');
const answerParagraph = document.getElementById('answer');
const resetButton = document.getElementById('reset-game');
const scoreSpan = document.getElementById('score-number');

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

colorCircles.forEach((circle) => {
  circle.addEventListener('click', (event) => {
    const rgb = event.target.style.backgroundColor;
    const rgbNumbers = rgb.substr(3);
    changeParagraph(rgbNumbers);
  });
});

resetButton.addEventListener('click', () => {
  paintCircles();
  createParagrah();
  answerParagraph.innerHTML = 'Escolha uma cor';
});

window.onload = () => {
  paintCircles();
  createParagrah();
  answerParagraph.innerHTML = 'Escolha uma cor';
  scoreSpan.innerHTML = 0;
};
