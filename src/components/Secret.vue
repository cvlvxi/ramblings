<template>
  <div class="secret">
       <b-jumbotron :header="this.days_since_stopping"></b-jumbotron>
 
  </div>
</template>

<script>
export default {
  name: "secret",
  computed: {
      days_since_stopping() {
          let d1 = Date.now();
          let d2 = new Date('11/03/2020');
          let dayDiff = Math.floor((d1 - d2)  / (1000 * 3600 * 24));
          let stopStr = `Days since Stopping: ${dayDiff} days`
          return stopStr
      }

  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped></style>
