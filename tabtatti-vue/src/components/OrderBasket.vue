<template>
  <div>
    <div class="row">
      <div class="col-xl-9">
        <div class="title-basket">
          <h1 class="title-page">Корзина</h1>
          <div class="add-product">
            <p>
              <i class="fas fa-plus"></i>Добавить еще товары
            </p>
          </div>
        </div>
        <div class="products-main">
          <div class="product-count">
            <p>
              Количество товаров:
              <b>{{product.length}}</b>
            </p>
          </div>
          <OrderBasketProduct
            v-for="(item, index) in product"
            :key="index"
            :item="item"
            @deleteProduct="deleteProduct(index,item)"
            @addPrice="addPrice"
            @minusPrice="minusPrice"
          />
        </div>
        <div class="contact-info mt-4 padding-block">
          <div class="title">
            <p>Контактная информация</p>
          </div>
          <form action>
            <div class="row">
              <div class="col-xl-4">
                <label for>Ваше имя *</label>
                <div class="input-num">
                  <input type="text" placeholder="Амир" class="input-text" />
                </div>
              </div>
              <div class="col-xl-4">
                <label for>Номер телефона *</label>
                <div class="input-num">
                  <img src="@/assets/images/flag.png" alt />
                  <input
                    type="tel"
                    v-mask="'+#(###) ###-##-##'"
                    placeholder="+7 (___) ___ __ __"
                    class="input-text"
                  />
                </div>
              </div>
              <div class="col-xl-4">
                <label for>E-mail *</label>
                <div class="input-num">
                  <input type="email" class="input-text" />
                </div>
              </div>
              <div class="col-xl-4">
                <label class="label-date" for>
                  Дата рождения (необязательно)
                  <img src="@/assets/images/info.png" alt />
                </label>
                <div class="input-num">
                  <input type="date" class="input-text" />
                </div>
              </div>
              <div class="col-xl-4">
                <label for>Введите код, который пришел в SMS</label>
                <div class="input-num">
                  <input type="tel" v-mask="'###-###'" placeholder="____-_____" class="input-text" />
                </div>
                <div class="back-sms">
                  <span>00:59</span>
                  <span class="blue-text">
                    <i class="fas fa-sync"></i>
                  </span>
                  <a href="#" class="blue-text">Отправить повторно</a>
                </div>
              </div>
            </div>
            <button type="submit" class="btn-outline">
              <i class="fas fa-check"></i>Подтвердить информацию
            </button>
          </form>
        </div>
        <div class="delivery-pickup mt-4 padding-block">
          <div class="tabs-btn">
            <a
              href="#"
              @click.prevent="component='Delivery'"
              :class="component == 'Delivery' ? 'activeTab' : ''"
            >Доставка</a>
            <a
              href="#"
              @click.prevent="component='Pickup'"
              :class="component == 'Pickup' ? 'activeTab' : ''"
            >Самовывоз (-10%)</a>
          </div>
          <keep-alive>
            <component :is="component"></component>
          </keep-alive>
        </div>
        <div class="last-delivery mt-4 padding-block">
          <div class="tabs-btn">
            <a
              href="#"
              @click.prevent="deliveryComponent='Iam'"
              :class="deliveryComponent == 'Iam' ? 'activeTab' : ''"
            >Для себя</a>
            <a
              href="#"
              @click.prevent="deliveryComponent='To'"
              :class="deliveryComponent == 'To' ? 'activeTab' : ''"
            >Сюрприз другу</a>
          </div>
          <keep-alive>
            <component :is="deliveryComponent" />
          </keep-alive>
        </div>
      </div>
      <div class="col-xl-3">
        <div class="order">
          <div class="order-header">
            <img src="@/assets/images/order.png" alt />
            <h3>Ваш заказ</h3>
          </div>
          <div class="order-content">
            <ul>
              <li>
                <p>Кол-во товаров</p>
                <b>{{ totalCount }}</b>
              </li>
              <li>
                <p>Сумма:</p>
                <b>{{ totalSum }}₸</b>
              </li>
            </ul>
            <ul>
              <li>
                <p>Доставка</p>
                <b>{{ deliveryPrice }}₸</b>
              </li>
              <li>
                <p>
                  Время доставки
                  <span class="clock">
                    <img src="@/assets/images/clock.png" alt />
                  </span>
                </p>

                <span class="red-text">{{ deliveryTime }}</span>
              </li>
            </ul>
            <ul>
              <li>
                <p>Бонусы</p>
                <span class="bonus">
                  <b class="addBonus">{{bonus}}</b> бонусов
                  <span class="info-bonus">
                    <img src="@/assets/images/inf.png" alt />
                  </span>
                </span>
              </li>
              <li>
                <p class="blue-text">Не тратить бонусы</p>
              </li>
            </ul>
            <ul>
              <li>
                <p>Промокод</p>
                <b>{{promoCod }}</b>
              </li>
              <li class="green-text">Активный</li>
            </ul>
            <ul>
              <li>
                <p>Сумма к оплате</p>
                <b>{{totalPay}}₸</b>
              </li>
              <div class="info-order">
                <button type="button" class="brown-btn">Сделать заказ</button>
                <p>
                  Нажимая «Заказать», Вы даете
                  <span class="blue-text">Согласие</span> на обработку Ваших персональных данных и принимаете
                  <span
                    class="blue-text"
                  >Пользовательское соглашение</span>
                </p>
              </div>
            </ul>
          </div>
        </div>
        <div class="promocod">
          <form action>
            <input type="text" name id class="input-text" placeholder="Введите промокод" />
            <button type="submit">
              <i class="fas fa-arrow-right"></i>
            </button>
          </form>
        </div>
        <div class="order">
          <div class="order-header">
            <img src="@/assets/images/order.png" alt />
            <h3>Ваш заказ</h3>
          </div>
          <div class="order-content">
            <ul>
              <li>
                <p>Кол-во товаров</p>
                <b>{{ product.length }}</b>
              </li>
              <li>
                <p>Сумма:</p>
                <b>{{ totalSum }}₸</b>
              </li>
            </ul>
            <ul>
              <li>
                <p>Доставка</p>
                <b>{{ deliveryPrice }}₸</b>
              </li>
              <li>
                <p>
                  Время доставки
                  <span class="clock">
                    <img src="@/assets/images/clock.png" alt />
                  </span>
                </p>

                <span class="red-text">{{ deliveryTime }}</span>
              </li>
            </ul>
            <ul>
              <li>
                <p>Бонусы</p>
                <span class="bonus">
                  <b :class="{addBonus: this.bonus < 1}">{{bonus}}</b> бонусов
                  <span class="info-bonus">
                    <img src="@/assets/images/inf.png" alt />
                  </span>
                </span>
              </li>
              <li>
                <a
                  href="#"
                  class="blue-text"
                  @click.prevent="addBonus"
                  v-if="this.bonus > 1"
                >Потратить бонусы</a>
                <a href="#" class="blue-text" @click.prevent="returnBonus" v-else>Не тратить бонусы</a>
              </li>
            </ul>
            <ul>
              <li>
                <p>Промокод</p>
                <b>{{ promoCod }}</b>
              </li>
              <li class="green-text">Активный</li>
            </ul>
            <ul>
              <li>
                <p>Сумма к оплате</p>
                <b>{{totalPay }}₸</b>
              </li>
              <div class="info-order">
                <button type="button" class="brown-btn">Сделать заказ</button>
                <p>
                  Нажимая «Заказать», Вы даете
                  <span class="blue-text">Согласие</span> на обработку Ваших персональных данных и принимаете
                  <span
                    class="blue-text"
                  >Пользовательское соглашение</span>
                </p>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import OrderBasketProduct from "./OrderBasketProduct";
import Pickup from "./Pickup";
import Delivery from "./Delivery";
import Iam from "./Iam";
import To from "./To";

export default {
  components: {
    OrderBasketProduct,
    Pickup,
    Delivery,
    Iam,
    To
  },
  data: () => ({
    component: "Pickup",
    deliveryComponent: "Iam",
    showBonus: false,
    counter: 1,
    totalCount: 0,
    deliveryPrice: 500,
    deliveryTime: "14:00 – 14:15",
    bonus: 0,
    toBonus: 700,
    promoCod: 5000,
    totalPay: 0,
    product: [
      {
        img: require("@/assets/images/assorti1.png"),
        title: "Фруктовый большой",
        deskr:
          "Ароматные, тонкие коржи на основе натурально...Ароматные, тонкие коржи на основе натурально...",
        price: 8100,
        count: 1
      },
      {
        img: require("@/assets/images/assorti2.png"),
        title: "Мясной пирог",
        deskr:
          "Круглый торт, состоит из 3 коржей шоколадного бисквита, между слоями бисквита равномерно нанесен...",
        price: 2700,
        count: 1
      },
      {
        img: require("@/assets/images/assorti3.png"),
        title: "Вода A'SU негазированная",
        deskr:
          "Ароматные, тонкие коржи на основе натурально...Ароматные, тонкие коржи на основе натурально...",
        price: 2700,
        count: 1
      }
    ],
    totalSum: 0
  }),
  methods: {
    deleteProduct(key, item) {
      this.minusPrice(item.price * item.count, item.count);
      this.product.splice(key, 1);
    },
    orderSum() {
      for (var key in this.product) {
        this.totalSum += this.product[key].price;
      }
    },
    addPrice(price) {
      this.totalSum += price;
      this.totalCount += 1;
      console.log(price);
    },
    minusPrice(price, count = 1) {
      this.totalSum -= price;
      this.totalCount -= count;
    },
    returnBonus() {
      this.totalPay = this.totalPay + this.toBonus;
      this.bonus += this.toBonus;
    },
    addBonus() {
      this.totalPay = this.totalPay - this.bonus;
      this.bonus -= this.toBonus;
    },
    countTotalPay(){
      this.totalPay = this.totalSum + this.deliveryPrice - this.promoCod;
    }
  },
  watch:{
    totalSum(){
      this.countTotalPay();
    }
  },
  mounted() {
    this.orderSum();
    this.totalCount = this.product.length;
    this.countTotalPay(); 
    this.bonus = this.toBonus
  }
};
</script>