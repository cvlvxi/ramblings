let canvas = document.getElementById("backgroundcanvas");
let ctx = canvas.getContext("2d");
let width = null;
let height = null;
let matrixA = null;
let matrixB = null;
let frameLoopA = null;
let frameLoopB = null;

async function nextFrame() {
  return new Promise((resolve) => {
    window.requestAnimationFrame((timeMs) => resolve(timeMs));
  });
}

async function draw() {
  for (;;) {
    let timeMs = await nextFrame();
    // Do stuff here!
    frame(timeMs);
  }
}

export default function main() {
  init();
  draw();
}

function init() {
  width = innerWidth;
  height = innerHeight;
  canvas.width = width;
  canvas.height = height;
  ctx.globalCompositeOperation = "screen";
  frameLoopA = frameLoopGenerator();
  frameLoopB = frameLoopGenerator();
  frameLoopA.next(0);
  frameLoopB.next(0);
}

function* frameLoopGenerator() {
  let froms = [createMatrix(), createMatrix()];
  let from = createMatrix();
  let tos = [createMatrix(), createMatrix()];
  let to = createMatrix();
  let matrix = createMatrix();
  while (true) {
    let time = yield matrix;
    const fraction = (Math.sin(time / 2000) + 1) / 2;
    if (fraction > 0.9999) {
      froms = [createMatrix(), createMatrix()];
    } else if (fraction < -0.001) {
      tos = [createMatrix(), createMatrix()];
    }

    interpolate(froms[0], froms[1], Math.sin(time / 3000), from);
    interpolate(tos[0], tos[1], Math.sin(time / 4000), to);
    interpolate(from, to, fraction, matrix);
  }
}

function interpolate(a, b, t, out) {
  for (let i = 0; i < out.length; ++i) {
    for (let j = 0; j < out[i].length; ++j) {
      out[i][j] = a[i][j] + (b[i][j] - a[i][j]) * t;
    }
  }
}

function frame(time) {
  matrixA = frameLoopA.next(time).value;
  matrixB = frameLoopB.next(time).value;
  render();
}

function range(n) {
  const result = [];
  for (let i = 0; i < n; ++i) {
    result.push(i);
  }
  return result;
}

function deviate(x) {
  return (Math.random() * 2 - 1) * x;
}

function createMatrix() {
  return range(2).map(() => range(2).map(() => deviate(2)));
}

function render() {
  const interval = 32;
  ctx.clearRect(0, 0, width, height);
  ctx.save();
  ctx.translate(width / 2, height / 2);
  ctx.lineWidth = 3;
  for (let x = -width / 2; x <= width / 2; x += interval) {
    for (let y = -height / 2; y <= height / 2; y += interval) {
      const phase = 0;
      // const phase = performance.now() / 200;
      // const fraction = 4 * (x**2 + y**2) / (width ** 2 + height ** 2);
      const fraction = 1 / 2 + (x + y) / (width + height);
      ctx.strokeStyle = `hsla(${phase +
        fraction * 45}deg, 100%, 50%, 0.25)`;
      ctx.beginPath();
      ctx.moveTo(
        // x, y
        matrixA[0][0] * x + matrixA[0][1] * y,
        matrixA[1][0] * x + matrixA[1][1] * y,
      );
      ctx.lineTo(
        matrixB[0][0] * x + matrixB[0][1] * y,
        matrixB[1][0] * x + matrixB[1][1] * y,
      );
      ctx.stroke();
    }
  }
  ctx.restore();
}

window.onresize = init;

main();
