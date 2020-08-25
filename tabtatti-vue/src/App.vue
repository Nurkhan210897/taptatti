<template>
  <div id="app" >
    <Header />
       <router-view />
    <Footer />
  </div>
</template>


<script>
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import Ordering from "@/views/OrderBasket.vue";
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
