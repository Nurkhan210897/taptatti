<template>
  <div>
    <div class="product" @mouseenter="show=!false" @mouseleave="show = false">
      <div class="product-img-deskr">
        <div class="product-img">
          <img :src="item.img" alt />
          <div v-if="show">
            <div class="clock">
              <img src="@/assets/images/clock.png" alt />
            </div>
            <div class="tooltip-product" >
              <p>Доставка может затянуться до 2 часов.</p>
            </div>
          </div>
        </div>
        <div class="product-text">
          <p>{{ item.title }}</p>
          <p>{{ item.deskr }}</p>
        </div>
      </div>
      <div class="product-count-price">
        <div class="count">
          <span @click="counterMinus">
            <i class="fas fa-minus"></i>
          </span>
          <p>{{ item.count }}</p>
          <span @click="counterPlus">
            <i class="fas fa-plus"></i>
          </span>
        </div>
        <p>{{ totalPrice }}₸</p>
        <span class="delete-product" @click="deleteProduct">
          <i class="fas fa-times"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },
  data: () => ({
    show: false
  }),
  computed: {
    totalPrice() {
      return this.item.count * this.item.price;
    }
  },
  methods: {
    counterPlus() {
      this.item.count++;
      this.$emit('addPrice',this.item.price);
    },
    counterMinus() {
      if (this.item.count != 1) {
        this.item.count--;
        this.$emit('minusPrice',this.item.price);
      }
    },
    deleteProduct(){
        this.$emit('deleteProduct')
    }
  }
};
</script>