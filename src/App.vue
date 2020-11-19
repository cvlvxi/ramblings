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
      <b-button href="/ramblings/"><b-icon icon="book"></b-icon> Blog</b-button>
      <span class="leftpadding"></span>
      <b-button :href="this.github"
        ><b-icon icon="code-square"></b-icon> Github</b-button
      >
      <span class="leftpadding"></span>
      <b-button :href="this.youtube">
        <b-icon icon="camera-video"></b-icon> Youtube &nbsp;</b-button
      >
      <div class="vertpadding"></div>
      <span class="leftpadding"></span
      ><b-button @click="toggleAwesome">Awesome</b-button>
      <span class="leftpadding"></span>
      <b-button>Showcase</b-button>
      <span class="leftpadding"></span>
      <b-dropdown split id="dropdown-1" text="Tags" class="m-md-2">
        <b-dropdown-item
          @click="selectedTag = tagKey"
          v-for="tagKey in tagKeys"
          :key="tagKey"
          >{{ tagKey }}
        </b-dropdown-item>
      </b-dropdown>

      <div class="vertpadding"></div>
      <div class="vertpadding"></div>
      <div align="center">
        <b-form-input
          ref="searchBox"
          class="roundedInput"
          v-model="search"
          placeholder="Search"
        />
      </div>
    </b-jumbotron>
    <router-view
      v-if="!this.showAwesome"
      :selected-tag="this.selectedTag"
      :search="this.search"
    />
    <b-toast id="my-toast" variant="warning" solid autoHideDelay="100">
      <template #toast-title>
        <div class="d-flex flex-grow-1 align-items-baseline">
          <b-img
            blank
            blank-color="#ff5555"
            class="mr-2"
            width="12"
            height="12"
          ></b-img>
          <strong class="mr-auto">Selected Search</strong>
          <small class="text-muted mr-2"></small>
        </div>
      </template>
      Search Blog Titles or Description<br />
      (Case Insensitive)
    </b-toast>
    <Awesome v-if="this.showAwesome" />
  </div> </template
>f

<script>
import { tags } from "./tags.js";
import Awesome from "./awesome/Awesome";

export default {
  name: "App",
  mounted() {
    window.addEventListener("keypress", e => {
      if (e.key === "f") {
        let searchBox = this.$refs.searchBox;
        if (searchBox) {
          searchBox.focus();
          this.$bvToast.show("my-toast");
        }
      }
    });
  },
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
      stopDate: new Date("11/02/2020"),
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
.vertpadding {
  padding-top: 10px;
}
.leftpadding {
  padding-left: 2.5px;
}
.roundedInput {
  width: 300px !important;
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
