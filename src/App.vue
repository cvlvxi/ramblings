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
      <Logo /> <br />
      <template>
        Ramble: First Blog Part <span style="color: red">II</span>
      </template>
      <br />
      <span @click="showCalender = !showCalender"
        ><b-icon icon="calendar2-date" /> Day</span
      >
      <span class="leftpadding"></span>
      <span style="color:red">{{ this.days_since_stopping }}</span>

      <hr class="my-4" />
      <b-button @click="redirectHome()"
        ><b-icon icon="book"></b-icon> Blog</b-button
      >
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
      ><b-button @click="redirectAwesome()">Awesome</b-button>
      <span class="leftpadding"></span>
      <b-button @click="redirectShowcase()">Showcase</b-button>
      <span class="leftpadding"></span>
      <b-dropdown
        ref="tagDropDown"
        split
        id="dropdown-1"
        text="Tags"
        class="m-md-2"
      >
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
          id="searchBox"
          ref="searchBox"
          class="roundedInput"
          v-model="search"
          placeholder="Search"
        />
      </div>
      <b-tooltip target="searchBox" triggers="hover">
        <b-icon icon="keyboard" scale="2"></b-icon> &nbsp; &nbsp; : /
      </b-tooltip>
    </b-jumbotron>
    <Calender v-if="showCalender" />
    <router-view :selected-tag="this.selectedTag" :search="this.search" />
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

    <b-toast id="tag-toast" variant="warning" solid autoHideDelay="100">
      <template #toast-title>
        <div class="d-flex flex-grow-1 align-items-baseline">
          <b-img
            blank
            blank-color="#ff5555"
            class="mr-2"
            width="12"
            height="12"
          ></b-img>
          <strong class="mr-auto">Tags Selected</strong>
          <small class="text-muted mr-2"></small>
        </div>
      </template>
      Filter Blog by tags<br />
    </b-toast>
  </div> </template
>f

<script>
import Logo from "./components/Logo";
import { tags } from "./tags.js";
import Calender from "./calender/Calender";

export default {
  name: "App",
  components: {
    Calender,
    Logo
  },
  mounted() {
    window.addEventListener("keypress", e => {
      switch (e.key) {
        case "/": {
          let searchBox = this.$refs.searchBox;
          if (searchBox) {
            searchBox.focus();
            this.$bvToast.show("my-toast");
            e.preventDefault();
          }
          break;
        }
        case "\\": {
          let tagDropDown = this.$refs.tagDropDown;
          if (tagDropDown) {
            tagDropDown.show();
            this.$bvToast.show("tag-toast");
            e.preventDefault();
          }
          break;
        }
        default:
          break;
      }
    });
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
      showCalender: false,
      stopDate: new Date("11/02/2020"),
      github: "https://github.com/cvlvxi",
      youtube: "https://www.youtube.com/channel/UCPO09wwR62bd4ovPjtcl3WQ",
      tagOptions: [],
      tagKeys: Object.keys(tags),
      selectedTag: null,
      search: ""
    };
  },
  methods: {
    redirectHome() {
      this.$router.push({ path: "/" }).catch(() => {});
    },
    redirectAwesome() {
      this.$router.push({ path: "/awesome" }).catch(() => {});
    },
    redirectShowcase() {
      this.$router.push({ path: "/showcase" }).catch(() => {});
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
