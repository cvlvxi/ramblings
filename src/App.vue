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
        Ramble: First Blog Part <span style="color: red">II</span>
      </template>

      <hr class="my-4" />

      <b-button :href="this.github">Github</b-button> &nbsp; &nbsp;
      <b-button :href="this.youtube">Youtube</b-button> <br /><br />
      <b-button href="/ramblings/">Blog</b-button> &nbsp; &nbsp;
      <b-dropdown split id="dropdown-1" text="Tags" class="m-md-2">
        <b-dropdown-item
          @click="selectedTag = tagKey"
          v-for="tagKey in tagKeys"
          :key="tagKey"
          >{{ tagKey }}
        </b-dropdown-item>
      </b-dropdown>
      &nbsp;
      <b-button @click="toggleAwesome">Awesome!</b-button>
    </b-jumbotron>
    <router-view v-if="!this.showAwesome" :selected-tag="this.selectedTag" />
  </div>
</template>

<script>
import { tags } from "./tags.js";

export default {
  name: "App",
  components: {
  },
  data() {
    return {
      github: "https://github.com/cvlvxi",
      youtube: "https://www.youtube.com/channel/UCPO09wwR62bd4ovPjtcl3WQ",
      tagOptions: [],
      tagKeys: Object.keys(tags),
      selectedTag: null,
      showAwesome: false
    };
  },
  methods: {
    toggleAwesome: function() {
      this.showAwesome = !this.showAwesome;
    }
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
