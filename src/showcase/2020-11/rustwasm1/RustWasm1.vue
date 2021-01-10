<template>
  <div align="center" style="color: white">
    This is running via rust / wasm
    <button id="play-pause"></button>
    <div id="fps"></div>
    <canvas id="game-of-life-canvas"></canvas>
  </div>
</template>

<script>
export default {
  async mounted() {
    await import("./index.js");
  }
};
</script>

<style lang="scss" scoped></style>
