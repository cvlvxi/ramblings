<template>
  <div class="all">
    <b-jumbotron
      header=""
      header-tag=""
      bg-variant="dark"
      text-variant="white"
      border-variant="dark"
      class="center"
    >
      <h1>RAMBLINGS</h1>

      <template>
        Ramble: First Blog Part <span style="color: red">II</span>
      </template>
      <br />
      Day <span style="color:red">{{ this.days_since_stopping }}</span>

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
      <b-button @click="toggleAwesome">Awesome!</b-button><br /><br />
      <input class="roundedInput" v-model="search" placeholder="Search" />
    </b-jumbotron>
    <router-view
      v-if="!this.showAwesome"
      :selected-tag="this.selectedTag"
      :search="this.search"
    />
    <Awesome v-if="this.showAwesome" />
  </div>
</template>

<script>
import { tags } from "./tags.js";
import Awesome from "./awesome/Awesome";

export default {
  name: "App",
  components: {
    Awesome
  },
  computed: {
    days_since_stopping() {
      let d1 = Date.now();
      let d2 = this.stopDate;
      let dayDiff = Math.floor((d1 - d2) / (1000 * 3600 * 24));
      return dayDiff;
    }
  },
  data() {
    return {
      stopDate: new Date("11/12/2020"),
      github: "https://github.com/cvlvxi",
      youtube: "https://www.youtube.com/channel/UCPO09wwR62bd4ovPjtcl3WQ",
      tagOptions: [],
      tagKeys: Object.keys(tags),
      selectedTag: null,
      showAwesome: false,
      search: ""
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
@media screen and (min-width: 1200px) {
  .blog {
    max-width: 1000px !important;
  }
}
.roundedInput {
  border-radius: 5px;
}
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
