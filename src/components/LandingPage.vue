<template>
  <div class="blueback">
    <b-jumbotron bg-variant="info" text-variant="white" border-variant="dark">
      <template #header>Ramblings</template>

      <template #lead>
        Ramble: First Blog & Ramble: First Blog Part II
      </template>

      <hr class="my-4" />

      <b-button variant="primary" href="#">Do Something</b-button>
      <b-button variant="success" href="#">Do Something Else</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
import DeckMixin from "./DeckMixin";

export default {
  name: "App",
  mixins: [DeckMixin],
  data() {
    return {
      backgroundImg: "https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif"
    };
  },
  methods: {
    getLocation(path) {
      return location.href.slice(0, -1) + path;
    }
  }
};
</script>

<style scoped>
.flexbox {
  display: flex;
  justify-content: center;
}
.smallfont {
  font-size: 25px;
  padding: 0 10px;
}

.shadow {
  color: white;
  text-shadow: 2px 2px #000 !important;
}
.blueback {
  color: blue !important;
}
</style>
