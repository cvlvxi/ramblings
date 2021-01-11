<template>
    <div>
        <canvas id="mycanvas"></canvas>
    </div>
</template>

<script>
export default {
  async mounted() {
      await import("./app.js");
  }
};
</script>

<style lang="scss" scoped></style>
