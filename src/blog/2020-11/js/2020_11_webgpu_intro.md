<!-- vscode-markdown-toc -->
* 1. [Links](#Links)
* 2. [Get Chrome Canary](#GetChromeCanary)
* 3. [Do the examples work?](#Dotheexampleswork)
* 4. [Canvas Targetting](#CanvasTargetting)
* 5. [Initalisation](#Initalisation)
	* 5.1. [Setup Adapter and Device](#SetupAdapterandDevice)
	* 5.2. [Swap chain](#Swapchain)
	* 5.3. [Pipeline](#Pipeline)
	* 5.4. [Shaders](#Shaders)
* 6. [BabylonJS  + WebGPU](#BabylonJSWebGPU)

<!-- vscode-markdown-toc-config
	numbering=true
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->


# WebGPU Intro

##  1. <a name='Links'></a>Links


- [https://www.willusher.io/graphics/2020/06/15/0-to-gltf-triangle](https://www.willusher.io/graphics/2020/06/15/0-to-gltf-triangle)
- [GPUWeb Implementations](https://github.com/gpuweb/gpuweb/wiki/Implementation-Status)
- [https://developers.google.com/web/updates/2019/08/get-started-with-gpu-compute-on-the-web](https://developers.google.com/web/updates/2019/08/get-started-with-gpu-compute-on-the-web)
- [Web GPU Samples](https://austineng.github.io/webgpu-samples/?wgsl=0#helloTriangle)


##  2. <a name='GetChromeCanary'></a>Get Chrome Canary

And enable webgpu experimental flag 

Go to [chrome://flags/#enable-unsafe-webgpu](chrome://flags/#enable-unsafe-webgpu)


##  3. <a name='Dotheexampleswork'></a>Do the examples work? 

- https://austineng.github.io/webgpu-samples/?wgsl=0#helloTriangle

##  4. <a name='CanvasTargetting'></a>Canvas Targetting

We can use webgpu and target the canvas similar to webgl / webgl2

context: `gpupresent`

```js
    const canvas = document.createElement('canvas');
	const context = canvas.getContext("gpupresent");
```

##  5. <a name='Initalisation'></a>Initalisation

###  5.1. <a name='SetupAdapterandDevice'></a>Setup Adapter and Device

```js
  const adapter = await navigator.gpu.requestAdapter();
  const device = await adapter.requestDevice();
  const glslang = await glslangModule();
```

- See [docs](https://gpuweb.github.io/gpuweb/#adapters)

###  5.2. <a name='Swapchain'></a>Swap chain

```js
  const swapChainFormat = "bgra8unorm";

  const swapChain = context.configureSwapChain({
    device,
    format: swapChainFormat,
  });
```

###  5.3. <a name='Pipeline'></a>Pipeline

```js
  const pipeline = device.createRenderPipeline({
    vertexStage: {
      module: useWGSL
        ? device.createShaderModule({
            code: wgslShaders.vertex,
          })
        : device.createShaderModule({
            code: glslShaders.vertex,
            transform: (glsl) => glslang.compileGLSL(glsl, "vertex"),
          }),
      entryPoint: "main",
    },
    fragmentStage: {
      module: useWGSL
        ? device.createShaderModule({
            code: wgslShaders.fragment,
          })
        : device.createShaderModule({
            code: glslShaders.fragment,
            transform: (glsl) => glslang.compileGLSL(glsl, "fragment"),
          }),
      entryPoint: "main",
    },

    primitiveTopology: "triangle-list",

    colorStates: [
      {
        format: swapChainFormat,
      },
    ],
  });
```

Using the pipeline

```js
  function frame() {
    const commandEncoder = device.createCommandEncoder();
    const textureView = swapChain.getCurrentTexture().createView();

    const renderPassDescriptor: GPURenderPassDescriptor = {
      colorAttachments: [
        {
          attachment: textureView,
          loadValue: { r: 0.0, g: 0.0, b: 0.0, a: 1.0 },
        },
      ],
    };

    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
    passEncoder.setPipeline(pipeline);
    passEncoder.draw(3, 1, 0, 0);
    passEncoder.endPass();

    device.defaultQueue.submit([commandEncoder.finish()]);
  }

  return frame;
```


###  5.4. <a name='Shaders'></a>Shaders

- We can use wgsl or glsl shaders
- wgsl shader's are 'rust like' and look something like this


```js

export const wgslShaders = {
  vertex: `
const pos : array<vec2<f32>, 3> = array<vec2<f32>, 3>(
    vec2<f32>(0.0, 0.5),
    vec2<f32>(-0.5, -0.5),
    vec2<f32>(0.5, -0.5));

[[builtin(position)]] var<out> Dog : vec4<f32>;
[[builtin(vertex_idx)]] var<in> VertexIndex : i32;

[[stage(vertex)]]
fn main() -> void {
  Dog = vec4<f32>(pos[VertexIndex], 0.0, 1.0);
  return;
}
`,
  fragment: `
[[location(0)]] var<out> outColor : vec4<f32>;

[[stage(fragment)]]
fn main() -> void {
  outColor = vec4<f32>(1.0, 0.0, 0.0, 1.0);
  return;
}
`,
};

```


##  6. <a name='BabylonJSWebGPU'></a>BabylonJS  + WebGPU
- [https://doc.babylonjs.com/advanced_topics/webGPU](https://doc.babylonjs.com/advanced_topics/webGPU)
- [https://github.com/BabylonJS/Babylon.js/issues/6443](https://github.com/BabylonJS/Babylon.js/issues/6443)
- [https://playground.babylonjs.com/indexWebGPU.html](https://playground.babylonjs.com/indexWebGPU.html)
