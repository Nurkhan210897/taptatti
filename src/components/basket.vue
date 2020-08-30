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
    <div class="basket" v-for="(item, index) in basketContent" :key="index">
      <span class="delete-basket" @click="deleteBasketItem(index)">
        <img src="@/assets/icons/exit-basket.svg" alt />
      </span>
      <div class="basket-top">
        <div class="basket-img">
          <img :src="item.img" alt />
        </div>
        <div class="basket-deskr">
          <b>{{item.title}}</b>
          <p class="silver-text">{{ item.description }}</p>
        </div>
      </div>
      <div class="product-count">
        <div class="count">
          <span @click="minusBasket(item)">
            <i class="fas fa-minus"></i>
          </span>
          <p>{{item.count}}</p>
          <span @click="plusBasket(item)">
            <i class="fas fa-plus"></i>
          </span>
        </div>
        <div class="total-count">
          <h3>{{item.totalPrice}}</h3>
        </div>
      </div>
    </div>
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
export default {
  props: {
    item: Object,
    
  },
  data(){
    return {
      basketContent:{},
      totalSum:0,
      totalCount:0
    }
  },
  methods: {
    plusBasket(product) {
      this.basketContent[product.id].count += 1;
      this.basketContent[product.id].totalPrice += product.price;
      this.totalSum = Number(this.totalSum) + Number(product.price);
      this.totalCount += 1;
    },
    minusBasket(product) {
      this.basketContent[product.id].count -= 1;
      this.basketContent[product.id].totalPrice -= product.price;
      this.totalSum = Number(this.totalSum) - Number(product.price);
      this.totalCount -= 1;
    },
    deleteBasketItem(index) {
      this.totalSum=Number(this.totalSum)-Number(this.basketContent[index].totalPrice);
      this.totalCount=Number(this.totalCount)-Number(this.basketContent[index].count);
      this.$delete(this.basketContent, index);
    },
    clearBasket() {
      this.basketContent = {};
      this.totalSum=0;
      this.totalCount=0;
    }
  },
  watch:{
    item(){
      console.log(this.item);
      var product=this.item;
      product.totalPrice=Number(this.item.count)*Number(this.item.price);
      this.$set(this.basketContent,this.item.id,product);
      this.totalCount+=this.item.count;
      this.totalSum+=Number(this.item.price)*Number(this.item.count);
    }
  }
};
</script>