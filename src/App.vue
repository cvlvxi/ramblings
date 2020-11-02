<template>
  <div>
    <b-jumbotron
      bg-variant="dark"
      text-variant="white"
      border-variant="dark"
      class="center"
    >
      <template #header>Ramblings</template>

      <template #lead>
        Ramble: First Blog & Ramble: First Blog Part II
      </template>

      <hr class="my-4" />

      <b-button :href="this.blog">Blog</b-button> &nbsp;
      <b-button :href="this.github">Github</b-button>

      <b-sidebar id="sidebar-backdrop" :backdrop-variant="dark" backdrop shadow>
        <div class="px-3 py-2"></div>
      </b-sidebar>
    </b-jumbotron>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      github: "https://github.com/cvlvxi",
      blog: "https://cvlvxi.github.io/ramblings"
    };
  }
};
</script>

<style scoped>
.center {
  text-align: center;
}
</style>
