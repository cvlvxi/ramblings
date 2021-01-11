<template>
  <div>
    <canvas id="helloworld"></canvas>
  </div>
</template>

<script>
export default {
  async mounted() {
    await import("./app2.js");
  }
};
</script>

<style scoped>
#helloworld {
  height: 100%;
  width: 100%;
}
</style>
