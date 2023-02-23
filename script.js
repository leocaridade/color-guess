const colorCircles = Object.values(document.getElementsByClassName('ball'));
const paragraph = document.getElementById('rgb-color');

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
  paragraph.innerHTML = arrayOfRGB[Math.floor(Math.random() * arrayOfRGB.length)].substr(3);
  console.log(arrayOfRGB);
};

window.onload = () => {
  paintCircles();
  createParagrah();
};
