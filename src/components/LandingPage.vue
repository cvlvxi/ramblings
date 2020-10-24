<template>
  <div>
    Dog
  </div>
</template>

<script>
import DeckMixin from "./DeckMixin";

export default {
  name: "App",
  mixins: [DeckMixin],
  data() {
    return {
      backgroundImg:
        "https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif",
    };
  },
  methods: {
    getLocation(path) {
      return location.href.slice(0, -1) + path;
    },
  },
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
</style>
