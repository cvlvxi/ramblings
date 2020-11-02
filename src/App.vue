<template>
  <div>
    <b-jumbotron
      bg-variant="dark"
      text-variant="white"
      border-variant="dark"
      class="center"
    >

      <template #header>RAMBLINGS</template>

      <template #lead>
        Ramble: First Blog & Ramble: First Blog Part II
      </template>

      <hr class="my-4" />

      <b-button href="/ramblings/">Blog</b-button> &nbsp; &nbsp;
      <b-button :href="this.github">Github</b-button> &nbsp; &nbsp;
      <b-button :href="this.youtube">Youtube</b-button>

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
      youtube: "https://www.youtube.com/channel/UCPO09wwR62bd4ovPjtcl3WQ"
    };
  }
};
</script>

<style scoped>
.center {
  text-align: center;
}
</style>
