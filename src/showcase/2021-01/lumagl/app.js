import { Model } from "@luma.gl/engine";
import { Buffer, clear } from "@luma.gl/webgl";
import { instrumentGLContext } from "@luma.gl/gltools";

const canvas = document.getElementById("mycanvas");
canvas.width = 800;
canvas.height = 600;

const gl = instrumentGLContext(canvas.getContext("webgl"));

const colorShaderModule = {
  name: "color",
  vs: `
    varying vec3 color_vColor;

    void color_setColor(vec3 color) {
      color_vColor = color;
    }
  `,
  fs: `
    varying vec3 color_vColor;

    vec3 color_getColor() {
      return color_vColor;
    }
  `,
};

const positionBuffer = new Buffer(
  gl,
  new Float32Array([
    -0.2,
    -0.2,
    0.2,
    -0.2,
    0.0,
    0.2,
  ]),
);

const colorBuffer = new Buffer(
  gl,
  new Float32Array([
    1.0,
    0.0,
    0.0,
    0.0,
    1.0,
    0.0,
    0.0,
    0.0,
    1.0,
    1.0,
    1.0,
    0.0,
  ]),
);

const offsetBuffer = new Buffer(
  gl,
  new Float32Array([
    0.5,
    0.5,
    -0.5,
    0.5,
    0.5,
    -0.5,
    -0.5,
    -0.5,
  ]),
);

const model = new Model(gl, {
  vs: `
        attribute vec2 position;
        attribute vec3 color;
        attribute vec2 offset;

        void main() {
          color_setColor(color);
          gl_Position = vec4(position + offset, 0.0, 1.0);
        }
      `,
  fs: `
        void main() {
          gl_FragColor = vec4(color_getColor(), 1.0);
        }
      `,
  modules: [colorShaderModule],
  attributes: {
    position: positionBuffer,
    color: [colorBuffer, { divisor: 1 }],
    offset: [offsetBuffer, { divisor: 1 }],
  },
  vertexCount: 3,
  instanceCount: 4,
  instanced: true,
});

async function nextFrame() {
  return new Promise((resolve) => {
    window.requestAnimationFrame((timeMs) => resolve(timeMs));
  });
}

async function main(model) {
  for (;;) {
    // let timeMs: number = await nextFrame();
    await nextFrame();
    clear(gl, { color: [0, 0, 0, 1] });
    model.draw();
  }
}

main(model);
