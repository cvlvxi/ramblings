<template>
  <div>
    <b-calendar block locale="en-US"></b-calendar>
  </div>
</template>

<script>
export default {
  async mounted() {
    let rustwasm = await import("./hello-wasm/pkg/hello_wasm.js");
    rustwasm.greet("Hello From Rust Wasm");
  }
};
</script>

<style lang="scss" scoped></style>
