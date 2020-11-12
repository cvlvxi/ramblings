<template>
  <div class="blog">
    <router-view />
    <router-link to="/" tag="a" class="back">&laquo; Back</router-link>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@media screen and (min-width: 1200px) {
  .blog {
    max-width: 1000px !important;
    /deep/ {
      pre {
        font-size: 16px !important;
      }
    }
  }
}

.blog {
  max-width: 600px;
  padding: 15px;
  margin: 10rem auto;
  color: white;

  .back {
    background-color: #42b883;
    color: white;
    margin-top: 5rem;
    text-decoration: none;
    padding: 10px 15px;
    border: 1px solid currentColor;
    border-radius: 0.5rem;
    display: inline-block;
    transition: all 0.3s ease;
    &:hover {
      background-color: transparent;
      color: #42b883;
    }
  }
  /deep/ {
    pre {
      font-size: 12px;
    }
    h1 {
      font-size: 2rem;
      margin-bottom: 0.2rem;
      color: #42b883;
      padding-top: 20px;
      padding-bottom: 20px;
    }
    h3 {
      font-size: 1.3rem;
      padding-top: 20px;
      color: #42b883;
      padding-bottom: 20px;
    }
    h4 {
      color: #42b883;
      font-size: 1rem;
      margin-bottom: 3rem;
      color: #fff;
      padding-top: 20px;
      padding-bottom: 20px;
    }
    h2 {
      font-size: 1.5rem;
      padding-top: 20px;
      color: #42b883;
      padding-bottom: 20px;
    }
    pre {
      overflow-x: auto;
      background-color: #35495e;
      color: white;
      border-radius: 0.3rem;
      padding: 1rem;
    }
    img {
      max-width: 100%;
    }

    p {
      margin-top: 0.4rem;
      color: white;
    }
  }
}
</style>
