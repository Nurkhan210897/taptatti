<template>
  <div class="basket">
    <span class="delete-basket" @click="removeFromCart(index)">
      <img src="@/assets/icons/exit-basket.svg" alt />
    </span>
    <div class="basket-top">
      <div class="basket-img">
        <img :src="data.img" alt />
      </div>
      <div class="basket-deskr">
        <b>{{data.title}}</b>
        <p class="silver-text">{{ data.description }}</p>
      </div>
    </div>
    <div class="product-count">
      <div class="count">
        <span @click="minusBasket(data)">
          <i class="fas fa-minus"></i>
        </span>
        <p>{{data.count}}</p>
        <span @click="plusBasket(data)">
          <i class="fas fa-plus"></i>
        </span>
      </div>
      <div class="total-count">
        <h3>{{data.totalPrice}}</h3>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    props: ['data', 'index'],
  methods: {
    removeFromCart(index) {
      this.$store.dispatch("REMOVE_FROM_CART", index);
    },
    plusBasket(product) {
      this.basketContent[product.id].count += 1;
      this.basketContent[product.id].totalPrice += product.price;
      this.totalSum = Number(this.totalSum) + Number(product.price);
      this.totalCount += 1;
    },
    minusBasket(product) {
      if (this.totalCount != 1) {
        this.basketContent[product.id].count -= 1;
        this.basketContent[product.id].totalPrice -= product.price;
        this.totalSum = Number(this.totalSum) - Number(product.price);
        this.totalCount -= 1;
      }
    }
  }
};
</script>