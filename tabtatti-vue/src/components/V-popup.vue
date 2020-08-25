<template>
  <div class="popup-wrapper" ref="popup-wrapper">
    <span class="exit" @click="exitPopup">
      <img src="@/assets/icons/exit.svg" alt />
    </span>
    <div class="modal-product">
      <slot></slot>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    product: Object
  },
  methods:{
    exitPopup(){
      this.$emit('exitPopup')
    },
  },
  mounted(){
    let vm = this;
    document.addEventListener('click', function(e){
      if(e.target === vm.$refs['popup-wrapper']){
        console.log('123')
      }
    })
  }
};
</script>