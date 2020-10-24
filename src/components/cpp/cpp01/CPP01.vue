<template>
  <section class="scalefont">
    <section>
      <h2>Template Metaprogramming</h2>
    </section>
    <section>
      <h2>
        What is metaprogramming?
      </h2>
      Programs treat programs as data <br />
      At compile time or run time. <br />
      Could be other programs or itself
    </section>

    <section>
      <h2>Why care about Metaprogramming (and type traits)</h2>
      Typetraits came about in 2000<br />
      New std libraries employ metaprogramming techniques<br />
      e.g. std::optional
    </section>

    <section>
      <h2>Metafunctions</h2>
      Normal functions have parameter and a return or void <br />
      Compiler can enforce return values and syntax <br />
      Metafunction is not a function but a class/struct <br />
      Not part of the language and exist as a idiomic use of existing language
      feature <br />
      Dictated by standard C++ conventions
    </section>

    <section>
      <h2>Metafunctions</h2>
      Also have zero+ params and zero+ return Typetraits <br />
      Follows convention of a normal function <br />
      Can expose a public value:
      <pre><code class="c++" data-trim data-noescape>
          {{ this.code.code02}}
      </code></pre>
      Can expose a public type:
      <pre><code class="c++" data-trim data-noescape>
          {{ this.code.code01}}
      </code></pre>
    </section>

    <section>
      <h2>Value Metafunctions</h2>
      Simple regular function: identity
      <pre><code class='c++' data-trim data-noescape>
        {{this.code.code03}}
      </code></pre>
      Simple metafunction: identity
      <pre><code class='c++' data-trim data-noescape>
        {{this.code.code04}}
      </code></pre>
    </section>

    <section>
      <h2>Value Metafunctions</h2>
      Generic Identity Function
      <pre><code class='c++' data-trim data-noescape>
      {{ this.code.code05}}
    </code></pre>
      Generic identity metafunction
      <pre><code class='c++' data-trim data-noescape>
        {{this.code.code06}}
      </code></pre>
    </section>

    <Links />
  </section>
</template>

<script>
import Links from "./Links";
import * as code from "./snippets.js";
export default {
  components: {
    Links,
  },
  data() {
    return {
      code: code,
    };
  },
};
</script>

<style scoped>
.dog {
  font-size: 65% !important;
}
</style>
