<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
    <Vpopup v-if="modalName == 'productModal'"/>
  </div>
</template>


<script>
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import Ordering from "@/views/OrderBasket.vue";
import Vpopup from "@/components/V-popup"
export default {
  components: {
    Header,
    Footer,
    Ordering,
    Vpopup
  },
  computed: {
    modalName () {
      return this.$store.getters.getModalName()
    }
  },
  data:()=>({
    vPopup: false
  })
};
</script>


<style lang="scss">
@import "~bootstrap/dist/css/bootstrap.min.css";
@import "~vue-multiselect/dist/vue-multiselect.min.css";
@import "assets/style/main.scss";
</style>
