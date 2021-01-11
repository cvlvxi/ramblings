<template>
  <div>
    <canvas id="helloworld"></canvas>
  </div>
</template>

<script>
import AppAnimationLoop from "./app3.js";
import { instrumentGLContext } from "@luma.gl/gltools";
export default {
  async mounted() {
    const canvas = document.getElementById("helloworld");
    let gl = instrumentGLContext(canvas.getContext("webgl"));
    this.animationLoop = new AppAnimationLoop({ gl: gl });
    this.animationLoop.start({ canvas: "helloworld" });
  },
  destroyed() {
    this.animationLoop.stop();
  },
  data() {
    return {
      animationLoop: null
    };
  }
};
</script>

<style scoped>
#helloworld {
  height: 100%;
  width: 100%;
}
</style>
