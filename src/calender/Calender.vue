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
        fields: ['first_name', 'last_name', 'age'],
        items: [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' }
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
