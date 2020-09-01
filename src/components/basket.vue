<template>
  <div class="order">
    <div class="order-header">
      <h3>
        <img src="@/assets/icons/cart.svg" alt />Корзина
        <span class="basket-count">{{ totalCount }}</span>
      </h3>
      <span class="basket-delete" @click="clearBasket">
        <img src="@/assets/icons/basket.svg" alt />
      </span>
    </div>
    <cart-product v-for="(item, index) in cart" :key="index" :data="item" :index="index"></cart-product>
    <div class="basket-last">
      <router-link to="/OrderBasket">
        <img src="@/assets/icons/delivery.svg" alt />Статус доставки
      </router-link>

      <div class="total-price">
        <p>Сумма заказа</p>
        <p>{{totalSum}}</p>
      </div>
      <button type="button" class="brown-btn">Оформить заказ</button>
      <span class="be-bonus">
        <p>
          <span class="silver-text">Начислится</span>
          <b>710</b> бонусов
        </p>
      </span>
    </div>
  </div>
</template>

<script>
import CartProduct  from './CartProduct'
export default {
  components: { CartProduct },
  props: {
    item: Object
  },
  data() {
    return {
      basketContent: {},
      totalSum: 0,
      totalCount: 0
    };
  },
  computed: {
    cart () {
      return this.$store.getters.getCart()
    }
  },
  methods: {
    deleteBasketItem(index) {
      this.totalSum =
        Number(this.totalSum) - Number(this.basketContent[index].totalPrice);
      this.totalCount =
        Number(this.totalCount) - Number(this.basketContent[index].count);
      this.$delete(this.basketContent, index);
    },
    clearBasket(){
      this.$store.dispatch('REMOVE_ALL_CART')
      console.log('REMOVE_ALL_CART')
    }
  },
  watch: {
    item() {
      var product = this.item;
      product.totalPrice = Number(this.item.count) * Number(this.item.price);
      this.$set(this.basketContent, this.item.id, product);
      this.totalCount += this.item.count;
      this.totalSum += Number(this.item.price) * Number(this.item.count);
    }
  }
};
</script>