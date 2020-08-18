<template>
  <div id="app">
    <Header />
    <div class="container">
      <Ordering />
    </div>
    <Footer/>
  </div>
</template>


<script>
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import Ordering from "@/components/Ordering";
export default {
  components: {
    Header,
    Footer,
    Ordering
  }
};
</script>


<style lang="scss">
@import "~bootstrap/dist/css/bootstrap.min.css";
@import "~vue-multiselect/dist/vue-multiselect.min.css";
@import "assets/style/main.scss";
</style>
