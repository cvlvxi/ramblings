<template>
  <div>
    <canvas id="mycanvas"></canvas>
  </div>
</template>

<script>
export default {
  async mounted() {
    await import("./app.js");
  },
  deactivated() {
    console.log("HERE");
  },
  destroyed() {
    console.log("DOG");
  }
};
</script>

<style lang="scss" scoped></style>
