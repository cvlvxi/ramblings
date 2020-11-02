<template>
  <div class="home">
    <div class="sections">
      <div
        v-for="(section, index) in Object.keys(entries)"
        :key="index"
        class="group"
      >
        <h2 class="center">{{ section }}</h2>
        <div class="section" v-for="entry in entries[section]" :key="entry.id">
          <div class="entry">
            <h3 @click="$router.push({ name: entry.id })">
              {{ entry.title }}
              <span class="subtitle">{{ entry.date }}</span
              ><br />
              <div v-for="tag in entry.tags" :key="tag">
                <b-badge class="subtitle" pill :variant="tagObj[tag]"
                  >{{ tag }}
                </b-badge>
              </div>
            </h3>
            <p>{{ entry.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BLOGENTRIES from "../blog/index.json";
import { tags } from "../tags.js";
import { compare } from "../utils.js";

export default {
  name: "home",
  computed: {
    entries() {
      // Order all the entries by date
      let ordered_entries = {}
      for(let k of Object.keys(BLOGENTRIES).sort((a, b) => compare(a, b))) {
        ordered_entries[k] = BLOGENTRIES[k].sort((a, b) => compare(a.date, b.date))
      }
      return ordered_entries;
    }
  },
  data() {
    return {
      tagObj: tags
    };
  }
};
</script>
<style lang="scss" scoped>
.center {
  text-align: center;
}
.headline {
  text-transform: uppercase;
  margin: 4rem auto;
  font-size: 4rem;
}
img {
  display: block;
  margin: 0 auto;
  width: 150px;
}

h2 {
  color: #fff;
  text-transform: capitalize;
  margin-bottom: 2rem;
}

h3 {
  color: #42b883;
  margin-bottom: 0;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  .subtitle {
    color: white;
    font-size: 0.98rem;
    float: right;
    font-weight: normal;
  }
}

p {
  margin-top: 0.4rem;
  color: white;
}

.sections {
  max-width: 800px;
  margin: 0 auto;
  margin-top: 4rem;
}

.section {
  margin-bottom: 3rem;
}

.group {
  margin-bottom: 4rem;
}
</style>
