<template>
  <div class="all">
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
      <b-dropdown id="dropdown-1" text="Tags" class="m-md-2">
        <b-dropdown-item v-for="tagKey in tagKeys" :key="tagKey"
          >{{ tagKey }}
        </b-dropdown-item>
      </b-dropdown>

    </b-jumbotron>
    <router-view />
  </div>
</template>

<script>
import { tags } from "./tags.js";

export default {
  name: "App",
  data() {
    return {
      github: "https://github.com/cvlvxi",
      youtube: "https://www.youtube.com/channel/UCPO09wwR62bd4ovPjtcl3WQ",
      tagKeys: Object.keys(tags)
    };
  }
};
</script>

<style>
.center {
  text-align: center;
}

.all {
  background-color: #1a1110;
  height: 100%;
}
body {
  height: 100%;
}

html {
  background-color: #1a1110;
  height: 100%;
}
</style>
