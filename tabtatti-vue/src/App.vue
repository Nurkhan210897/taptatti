<template>
  <div id="app">
    <Header />
    <div class="container">
      <Ordering />
    </div>
  </div>
</template>


<script>
import Header from "@/layouts/Header";
import Ordering from "@/components/Ordering";
export default {
  components: {
    Header,
    Ordering
  }
};
</script>


<style lang="scss">
@import "~bootstrap/dist/css/bootstrap.min.css";
@import "~vue-multiselect/dist/vue-multiselect.min.css";
@import "assets/style/index.scss";
</style>
