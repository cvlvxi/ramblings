<template>
  <div align="center">
    <b-calendar locale="en-US" @context="onContext"></b-calendar>
    <b-table size="sm" dark :items="items" :fields="fields" caption-top>
      <template #table-caption>This is a table caption at the top.</template>
    </b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      context: null,
      fields: ["nsmk", "ex", "algo"],
      items: [
        {
          nsmk: "",
          ex: "",
          algo: ""
        }
      ]
    };
  },
  methods: {
    onContext(ctx) {
      this.context = ctx;
      console.log(ctx);
    }
  }
};
</script>

<style lang="scss" scoped></style>
