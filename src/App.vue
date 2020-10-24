<template>
  <div class="reveal">
    <router-view />
  </div>
</template>

<script>
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";
import "./css/monokai.css";
import RevealHighlight from "reveal.js/plugin/highlight/highlight.js";
import RevealMarkdown from "reveal.js/plugin/markdown/markdown.js";
import RevealNotes from "reveal.js/plugin/notes/notes.js";
import Reveal from "reveal.js";

export default {
  name: "App",
  mounted: function() {
    window.deck = new Reveal({});
    window.deck.initialize({
      plugins: [RevealMarkdown, RevealHighlight, RevealNotes]
    });
  }
};
</script>

<style>
.scalefont {
  font-size: 65% !important;
}
</style>
