<template>
  <div class="slides">
    <section>
      Dog
    </section>
    <section>
      <canvas class="canvasscreen" id="canvas"></canvas>
      <div class="showText">Press enter to start</div>
    </section>
  </div>
</template>

<script>
import DeckMixin from "../DeckMixin";
import { main } from "./main.js";
export default {
  mixins: [DeckMixin],
  watch: {
    playing() {
      console.log("Did this change? " + this.playing);
      if (this.playing) {
        this.clickPromiseResolve();
      } else {
        this.currentPromise = new Promise((resolve) => {
          this.clickPromiseResolve = resolve;
        });
      }
    },
  },
  async mounted() {
    window.addEventListener("keydown", (event) => {
      if (event.code == "Enter") {
        this.playing = !this.playing;
      }
    });
    // This is getting called immediately not a callback
    // This is a common pattern to `turn an event to a promise resolve`
    // Get access to resolve outside by assinging to a variable
    let clickPromise = new Promise((resolve) => {
      this.clickPromiseResolve = resolve;
    });
    this.currentPromise = clickPromise;
    // Main takes a Promise Getter based on the state's currentPromise
    // Which we will switch based on the playing Context
    main(() => {
      return this.currentPromise;
    });
  },
  data() {
    return {
      playing: false,
      clickPromiseResolve: null,
      currentPromise: null,
    };
  },
};
</script>

<style scoped>
/* .canvasscreen {
  position: fixed !important;
  left: 0 !important;
  top: 0 !important;
  width: 100% !important;
}
.showText {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
} */
</style>
