<template>
  <div class="slides">
    <!-- Intro -->
    <section :data-background-image="this.background">
      <h3 class="shadow">C++</h3>
    </section>
    <CPP01 />
  </div>
</template>

<script>
import DeckMixin from "../DeckMixin";
import CPP01 from "./cpp01/CPP01";

export default {
  name: "App",
  mixins: [DeckMixin],
  components: { CPP01 },
  data() {
    return {
      background: "https://media.giphy.com/media/3o6Zt1AZBJvhJMP11S/giphy.gif",
    };
  },
};
</script>

<style scoped>
.shadow {
  text-shadow: 2px 2px #000 !important;
}
</style>
