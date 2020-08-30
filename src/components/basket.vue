<template>
  <div class="order">
    <div class="order-header">
      <h3>
        <img src="@/assets/icons/cart.svg" alt />Корзина
        <span class="basket-count">{{ basketCount }}</span>
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
          <h3>{{item.price}}</h3>
        </div>
      </div>
    </div>
    <div class="basket-last">
      <router-link to="/OrderBasket">
        <img src="@/assets/icons/delivery.svg" alt />Статус доставки
      </router-link>

      <div class="total-price">
        <p>Сумма заказа</p>
        <h3>{{basketSum}}</h3>
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
    
}
</script>