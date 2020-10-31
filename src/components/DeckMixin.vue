<script>
export default {
  mounted: function() {
    if (window.deck) {
      location.reload();
    }
    //window.deck?.slide(0)
  }
};
</script>
