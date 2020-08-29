<template>
  <div class="popup-wrapper">
    <div class="modal-product">
      <span class="exit" @click="exitPopup">
        <i class="fas fa-times"></i>
      </span>
      <slot></slot>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    product: Object
  },
  methods: {
    exitPopup() {
      this.$emit("exitPopup");
    }
  },
  mounted() {
    // let vm = this;
    // document.addEventListener("click", function(e) {
    //   if (e.target === vm.$refs["popup-wrapper"]) {
    //     vm.exitPopup() 
    //   }
    // });
  }
};
</script>