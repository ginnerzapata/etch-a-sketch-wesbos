// Select the elements on the page
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');

// set up our canvas for drawing
const MOVE_AMMOUNT = 10;

// const { width } = canvas;
// const { height } = canvas;

const { width, height } = canvas;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

console.log(width, height);
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMMOUNT;

ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// write a draw function

function draw({ key }) {
  console.log(key);

  ctx.beginPath();
  ctx.moveTo(x, y);

  switch (key) {
    case 'ArrowUp':
      y -= MOVE_AMMOUNT;
      break;
    case 'ArrowRight':
      x += MOVE_AMMOUNT;
      break;
    case 'ArrowDown':
      y += MOVE_AMMOUNT;
      break;
    case 'ArrowLeft':
      x -= MOVE_AMMOUNT;
      break;
    default:
      break;
  }

  // x -= MOVE_AMMOUNT;
  // y -= MOVE_AMMOUNT;
  ctx.lineTo(x, y);
  ctx.stroke();
}

// write a handler for the keys

function handleKey(e) {
  if (e.key.includes('Arrow')) {
    e.preventDefault();
    draw({ key: e.key });
  }
}

// clear/shake function

// listen for arrows

window.addEventListener('keydown', handleKey);
