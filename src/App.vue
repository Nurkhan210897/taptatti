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
  el: '#app',
  components: {
    Header,
    Footer,
    Ordering
  },
      handleScroll: function(evt, el) {
      if (window.scrollY > 50) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(0, -10px, 0)"
        );
      }
      return window.scrollY > 100;
    }
};
</script>


<style lang="scss">
@import "~bootstrap/dist/css/bootstrap.min.css";
@import "~vue-multiselect/dist/vue-multiselect.min.css";
@import "assets/style/main.scss";

</style>
