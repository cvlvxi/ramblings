<template>
  <div align="center">
    <b-calendar locale="en-US" @context="onContext"></b-calendar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      context: null
    };
  },
  methods: {
    onContext(ctx) {
      this.context = ctx;
      console.log(ctx);
    }
  }
};
</script>

<style lang="scss" scoped></style>
