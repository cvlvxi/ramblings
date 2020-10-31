<template>
  <div>
    <b-jumbotron bg-variant="dark" text-variant="white" border-variant="dark">
      <template #header>Ramblings</template>

      <template #lead>
        Ramble: First Blog & Ramble: First Blog Part II
      </template>

      <hr class="my-4" />

      <b-button v-b-toggle.sidebar-backdrop>Blogs</b-button> &nbsp;
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
      github: "https://github.com/cvlvxi"
    };
  }
};
</script>

<style scoped></style>
