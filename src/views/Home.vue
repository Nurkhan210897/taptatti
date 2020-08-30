<template>
  <div class="home">
    <div class="main-slider">
      <VueSlickCarousel :arrows="true" :dots="true">
        <div class="main-slider-item">
          <img src="@/assets/images/main-slider.png" alt />
          <div class="container">
            <div class="slider-text">
              <h2>Большой выбор тортов и выпечки</h2>
              <div class="slider-deskr">
                <img src="@/assets/images/icon_prod.svg" alt />
                <p>Весь ассортимент приготовлен из качественных и свежих продуктов</p>
              </div>
              <button type="button" class="btn btn-outline-yellow">Наше меню</button>
            </div>
          </div>
        </div>
        <div class="main-slider-item">
          <img src="@/assets/images/main-slider2.png" alt />
          <div class="container">
            <div class="slider-text">
              <h2>Доставка по городу бесплатная</h2>

              <div class="slider-deskr">
                <img src="@/assets/icons/delivery-icon.svg" alt />
                <p>
                  При заказе от 7000 ₸
                  <b>бесплатная</b> доставка в черте города!
                </p>
              </div>
              <button type="button" class="btn btn-outline-yellow">Подробнее</button>
            </div>
          </div>
        </div>
        <div class="main-slider-item">
          <img src="@/assets/images/main-slider3.png" alt />
          <div class="container">
            <div class="slider-text">
              <h2>10% скидка при самовывозе</h2>
              <div class="slider-deskr">
                <img src="@/assets/icons/bag.svg" alt />
                <p>Удобно для тех кто едет по пути, рядом с нашими точками</p>
              </div>
              <button type="button" class="btn btn-outline-yellow">Подробнее</button>
            </div>
          </div>
        </div>
      </VueSlickCarousel>
    </div>
    <div class="main-category-wrapper">
      <div class="container">
        <div class="main-category">
          <div class="category">
            <a href="#1">
              <img src="@/assets/icons/category-1.svg" alt />
              <p>Торты</p>
            </a>
          </div>
          <div class="category">
            <a href="#2">
              <img src="@/assets/icons/category-2.svg" alt />
              <p>Пироги</p>
            </a>
          </div>
          <div class="category">
            <a href="#3">
              <img src="@/assets/icons/category-3.svg" alt />
              <p>Выпечка</p>
            </a>
          </div>
          <div class="category">
            <a href="#4">
              <img src="@/assets/icons/category-4.svg" alt />
              <p>Пирожное</p>
            </a>
          </div>
          <div class="category">
            <a href="#5">
              <img src="@/assets/icons/category-5.svg" alt />
              <p>Печенье</p>
            </a>
          </div>
          <div class="category">
            <a href="#6">
              <img src="@/assets/icons/category-6.svg" alt />
              <p>Полуфабрикаты</p>
            </a>
          </div>
        </div>
        <div class="slider-product">
          <div class="title-category">
            <p>Новинки</p>
          </div>
          <VueSlickCarousel v-bind="setting">
            <div class="new-card">
              <img src="@/assets/images/new1.png" alt />
              <div class="new-product-text">
                <a href="#">
                  Торт Аррива
                  <img src="@/assets/icons/info.svg" alt />
                </a>
                <a href="#" class="price">
                  <span>от</span>
                  <p>700</p>
                  <span>₸</span>
                </a>
              </div>
            </div>
            <div class="new-card">
              <img src="@/assets/images/new2.png" alt />
              <div class="new-product-text">
                <a href="#">
                  Фруктовый пирог c творогом
                  <img src="@/assets/icons/info.svg" alt />
                </a>
                <a href="#" class="price">
                  <span>от</span>
                  <p>500</p>
                  <span>₸</span>
                </a>
              </div>
            </div>
            <div class="new-card">
              <img src="@/assets/images/new3.png" alt />
              <div class="new-product-text">
                <div class="new-product-text">
                  <a href="#">
                    Тирамису
                    <img src="@/assets/icons/info.svg" alt />
                  </a>
                  <a href="#" class="price">
                    <span>от</span>
                    <p>800</p>
                    <span>₸</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="new-card">
              <img src="@/assets/images/new3.png" alt />
              <div class="new-product-text">
                <div class="new-product-text">
                  <a href="#">
                    Тирамису
                    <img src="@/assets/icons/info.svg" alt />
                  </a>
                  <a href="#" class="price">
                    <span>от</span>
                    <p>800</p>
                    <span>₸</span>
                  </a>
                </div>
              </div>
            </div>
          </VueSlickCarousel>
        </div>
      </div>
    </div>
    <div class="products">
      <div class="container">
        <div class="row">
          <div class="col-xl-9">
            <div class="all-products" v-for="(item, index) in products" :key="index" :id="item.id">
              <div class="title-product">
                <div class="title-category">
                  <h1>{{ item.title }}</h1>
                </div>
                <div class="product-address" v-if="index === 0">
                  <p>
                    <b>
                      Вы выбрали филиал
                      <span class="blue-text">TapTatti №2</span>
                      по адресу:
                    </b>
                    <span>{{ selected }}</span>
                  </p>
                  <div class="region-select">
                    <div class="select">
                      <img src="@/assets/icons/home.svg" alt />
                      <v-select
                        :options="filials"
                        label="value"
                        :clearable="false"
                        v-model="selected"
                      ></v-select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="product-link col-xl-10 p-0">
                <a href="#" v-for="(item, index) in item.ProductCategory" :key="index">{{ item }}</a>
              </div>
              <div class="products row">
                <Product
                  v-for="(product, index) in item.productsContent"
                  :key="index"
                  :product="product"
                  @activeModal="isActiveModal=true"
                  @addBasket="addBasket(product)"
                />
              </div>
            </div>
          </div>
          <div class="col-xl-3">
            <div class="product-right">
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
              <div class="history-orders">
                <div class="order-header" @click="orderShow = !orderShow">
                  <h3>
                    <img src="@/assets/icons/clock.svg" alt />История заказов
                    <img
                      src="@/assets/icons/arrow-bottom.svg"
                      alt
                      :class="{ activeDropdown: orderShow}"
                    />
                  </h3>
                </div>
                <div class="history-orders-content" v-if="orderShow">
                  <p>14 июля 2020</p>
                  <b>№ Almaty-3-51488</b>
                  <div class="order-info">
                    <b>Чизкейк New York</b>
                    <p class="light-brown">Тонкое тесто, 35 см</p>
                    <p>
                      <b>Медовый</b>
                    </p>
                    <p class="light-brown">Тонкое тесто, 30 см</p>
                  </div>
                  <p class="blue-text">Подробнее</p>
                  <button class="btn btn-outline-yellow">Повторить</button>
                </div>
                <div class="all-history">
                  <a href="#" class="blue-text">Полная история</a>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "@/components/Product.vue";
import Vpopup from "@/components/V-popup.vue";

export default {
  name: "Home",

  components: {
    Product,
    Vpopup
  },
  data: () => ({
    basketSum:0,
    basketCount:0,
    orderShow: false,
    isActiveModal: false,
    basket: [],
    basketContent: {},
    setting: {
      nav: true,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 1
    },
    selected: "Смените филиал",
    filials: [
      "TapTatti №1. ул.Кунаева 47",
      "TapTatti №2. ул.Кордай 12",
      "TapTatti №3. ул.Тимирязева 38/1"
    ],
    products: [
      {
        title: "Торты",
        id: "1",

        ProductCategory: [
          "Сливочный",
          "Шоколадный",
          "Творожный",
          "Новинки",
          "Хит",
          "Без маргарина",
          "Низкокалорийный",
          "Натуральные сливочные"
        ],
        productsContent: [
          {
            id: 1,
            count: 1,
            hit: require("@/assets/icons/hit.svg"),
            img: require("@/assets/images/product1.png"),
            title: "Молочная девочка",
            tooltipHit: "Хит",
            price: 4500,
            description:
              "Круглый торт, состоит из 2 слоев бисквита пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition:
              "Яйцо, Сахар, Сметана, Сливочное масло, Ванильный сахар, Пшеничная мука, Крем безе, Банан.",
            energyValue: 289.0,
            Protein: 9.1,
            Fats: 9.9,
            Carbohydrates: 30.3,
            Weight: 390,
            Diameter: 25,
            Height: 8 - 8.5,
            StoragePeriod: 5,
            StorageConditions: "В холодильнике при температуре от +2 до +6 °С"
          },
          {
            id: 2,
            count: 1,
            new: require("@/assets/icons/new.svg"),
            clock: require("@/assets/icons/time.svg"),
            img: require("@/assets/images/product2.png"),
            title: "Whoopie",
            tooltipNew: "Новинка",
            tooltipClock: "Время",
            price: 4850,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            id: 3,
            count: 1,
            img: require("@/assets/images/product3.png"),
            title: "Медовый",
            price: 3000,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            id: 4,
            count: 1,
            img: require("@/assets/product-img/product4.png"),
            clean: require("@/assets/icons/green.svg"),
            tooltipGreen: "Вегетарианский",
            title: "Сникерс",
            price: 13700,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            id: 5,
            count: 1,
            img: require("@/assets/product-img/product5.png"),
            noMargarin: require("@/assets/icons/yellow.svg"),
            tooltipYellow: "Без маргарина",
            title: "Красный бархат",
            price: 2500,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product6.png"),
            noMargarin: require("@/assets/icons/yellow.svg"),
            clean: require("@/assets/icons/green.svg"),
            tooltipYellow: "Без маргарина",
            tooltipGreen: "Вегетарианский",
            title: "Чизкейк New York",
            price: 2500,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product7.png"),
            title: "Шпинатный",
            price: 13700,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product8.png"),
            title: "Морковный",
            price: 2500,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product9.png"),
            title: "Тирамису",
            price: 1800,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product10.png"),
            title: "Тирамису Фундук",
            price: 2500,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product11.png"),
            title: "Тирамису Шоколад",
            price: 2500,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product12.png"),
            title: "Тирамису Апельсин",
            price: 1800,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          }
        ]
      },
      {
        title: "Пироги",
        id: "2",

        ProductCategory: [
          "С курицей",
          "Вегетрианский",
          "Острый",
          "С мясом",
          "Хит",
          "Соус",
          "Фруктовый",
          "Сливочный"
        ],
        productsContent: [
          {
            count: 1,
            hit: require("@/assets/icons/hit.svg"),
            img: require("@/assets/product-img/product13.png"),
            title: "Фруктовый (большой)",
            price: 13700,
            description:
              "Круглый торт, состоит из 2 слоев бисквита пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition:
              "Яйцо, Сахар, Сметана, Сливочное масло, Ванильный сахар, Пшеничная мука, Крем безе, Банан.",
            energyValue: 289.0,
            Protein: 9.1,
            Fats: 9.9,
            Carbohydrates: 30.3,
            Weight: 390,
            Diameter: 25,
            Height: 8 - 8.5,
            StoragePeriod: 5,
            StorageConditions: "В холодильнике при температуре от +2 до +6 °С"
          },
          {
            count: 1,
            new: require("@/assets/icons/new.svg"),
            clock: require("@/assets/icons/time.svg"),
            img: require("@/assets/product-img/product14.png"),
            title: "Фруктовый (маленький)",
            price: 2500,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product15.png"),
            title: "Пирамида",
            price: 1800,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product16.png"),
            clean: require("@/assets/icons/green.svg"),
            title: "Финский яблочный",
            price: 13700,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product17.png"),
            noMargarin: require("@/assets/icons/yellow.svg"),
            title: "Яблочный",
            price: 2500,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product18.png"),
            noMargarin: require("@/assets/icons/yellow.svg"),
            clean: require("@/assets/icons/green.svg"),
            title: "Творожный (большой)",
            price: 1800,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product18.png"),
            title: "Творожный (средний)",
            price: 13700,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product20.png"),
            title: "Творожный (маленький)",
            price: 2500,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product21.png"),
            title: "Зебра ",
            price: 1800,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product22.png"),
            title: "Мясной (говядина)",
            price: 13700,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product22.png"),
            title: "Мясной (курица)",
            price: 2500,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product23.png"),
            title: "Слоеный пирог (с мясом)",
            price: 1800,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          }
        ]
      },
      {
        title: "Выпечка",
        id: "3",
        ProductCategory: [
          "С курицей",
          "Вегетрианский",
          "Острый",
          "С мясом",
          "Хит",
          "Соус",
          "Фруктовый",
          "Сливочный"
        ],
        productsContent: [
          {
            count: 1,
            hit: require("@/assets/icons/hit.svg"),
            img: require("@/assets/product-img/product24.png"),
            title: "Самса с мясом",
            price: 13700,
            description:
              "Круглый торт, состоит из 2 слоев бисквита пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition:
              "Яйцо, Сахар, Сметана, Сливочное масло, Ванильный сахар, Пшеничная мука, Крем безе, Банан.",
            energyValue: 289.0,
            Protein: 9.1,
            Fats: 9.9,
            Carbohydrates: 30.3,
            Weight: 390,
            Diameter: 25,
            Height: 8 - 8.5,
            StoragePeriod: 5,
            StorageConditions: "В холодильнике при температуре от +2 до +6 °С"
          },
          {
            count: 1,
            new: require("@/assets/icons/new.svg"),
            clock: require("@/assets/icons/time.svg"),
            img: require("@/assets/product-img/product25.png"),
            title: "Самса с курицей",
            price: 2500,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product26.png"),
            title: "Борек с мясом",
            price: 1800,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product27.png"),
            noMargarin: require("@/assets/icons/yellow.svg"),
            title: "Борек с картошкой",
            price: 2500,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product28.png"),
            noMargarin: require("@/assets/icons/yellow.svg"),
            clean: require("@/assets/icons/green.svg"),
            title: "Кекс мясной",
            price: 1800,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product29.png"),
            title: "Токаш с картошкой",
            price: 13700,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product30.png"),
            title: "Токаш с капустой",
            price: 2500,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product31.png"),
            title: "Токаш с сыром ",
            price: 1800,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product32.png"),
            title: "Булочки ",
            price: 1800,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product33.png"),
            title: "Бауырсаки",
            price: 1800,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          }
        ]
      },
      {
        title: "Пирожное",
        id: "4",
        ProductCategory: [
          "С курицей",
          "Вегетрианский",
          "Острый",
          "С мясом",
          "Хит",
          "Соус",
          "Фруктовый",
          "Сливочный"
        ],
        productsContent: [
          {
            count: 1,
            hit: require("@/assets/icons/hit.svg"),
            img: require("@/assets/product-img/product34.png"),
            title: "Капкейк",
            price: 13700,
            description:
              "Круглый торт, состоит из 2 слоев бисквита пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition:
              "Яйцо, Сахар, Сметана, Сливочное масло, Ванильный сахар, Пшеничная мука, Крем безе, Банан.",
            energyValue: 289.0,
            Protein: 9.1,
            Fats: 9.9,
            Carbohydrates: 30.3,
            Weight: 390,
            Diameter: 25,
            Height: 8 - 8.5,
            StoragePeriod: 5,
            StorageConditions: "В холодильнике при температуре от +2 до +6 °С"
          },
          {
            count: 1,
            new: require("@/assets/icons/new.svg"),
            clock: require("@/assets/icons/time.svg"),
            img: require("@/assets/product-img/product35.png"),
            title: "Картошка",
            price: 2500,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product36.png"),
            title: "Красный бархат",
            price: 1800,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product37.png"),
            noMargarin: require("@/assets/icons/yellow.svg"),
            title: "Фруктовая корзина",
            price: 2500,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product38.png"),
            noMargarin: require("@/assets/icons/yellow.svg"),
            clean: require("@/assets/icons/green.svg"),
            title: "Фруктовая корзина 2",
            price: 1800,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          }
        ]
      },
      {
        id: "5",
        title: "Печенье",
        ProductCategory: [
          "С курицей",
          "Вегетрианский",
          "Острый",
          "С мясом",
          "Хит",
          "Соус",
          "Фруктовый",
          "Сливочный"
        ],
        productsContent: [
          {
            count: 1,
            hit: require("@/assets/icons/hit.svg"),
            img: require("@/assets/product-img/product39.png"),
            title: "Whoopie",
            price: 13700,
            description:
              "Круглый торт, состоит из 2 слоев бисквита пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition:
              "Яйцо, Сахар, Сметана, Сливочное масло, Ванильный сахар, Пшеничная мука, Крем безе, Банан.",
            energyValue: 289.0,
            Protein: 9.1,
            Fats: 9.9,
            Carbohydrates: 30.3,
            Weight: 390,
            Diameter: 25,
            Height: 8 - 8.5,
            StoragePeriod: 5,
            StorageConditions: "В холодильнике при температуре от +2 до +6 °С"
          },
          {
            count: 1,
            new: require("@/assets/icons/new.svg"),
            clock: require("@/assets/icons/time.svg"),
            img: require("@/assets/product-img/product40.png"),
            title: "Шоколадные",
            price: 2500,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product41.png"),
            title: "Финики с орехами",
            price: 1800,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product42.png"),
            noMargarin: require("@/assets/icons/yellow.svg"),
            title: "Творожные",
            price: 2500,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product43.png"),
            noMargarin: require("@/assets/icons/yellow.svg"),
            clean: require("@/assets/icons/green.svg"),
            title: "Алагул",
            price: 1800,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product44.png"),
            noMargarin: require("@/assets/icons/yellow.svg"),
            clean: require("@/assets/icons/green.svg"),
            title: "Лимонные",
            price: 1800,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product45.png"),
            noMargarin: require("@/assets/icons/yellow.svg"),
            clean: require("@/assets/icons/green.svg"),
            title: "Ун курабие",
            price: 1800,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product46.png"),
            noMargarin: require("@/assets/icons/yellow.svg"),
            clean: require("@/assets/icons/green.svg"),
            title: "Кунжутное",
            price: 1800,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product47.png"),
            noMargarin: require("@/assets/icons/yellow.svg"),
            clean: require("@/assets/icons/green.svg"),
            title: "Курага с орехами",
            price: 1800,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product48.png"),
            noMargarin: require("@/assets/icons/yellow.svg"),
            clean: require("@/assets/icons/green.svg"),
            title: "Рогалик сыр с картошкой",
            price: 1800,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          }
        ]
      },
      {
        id: "6",
        title: "Полуфабрикаты",
        ProductCategory: [
          "С курицей",
          "Вегетрианский",
          "Острый",
          "С мясом",
          "Хит",
          "Соус",
          "Фруктовый",
          "Сливочный"
        ],
        productsContent: [
          {
            count: 1,
            hit: require("@/assets/icons/hit.svg"),
            img: require("@/assets/product-img/product49.png"),
            title: "Whoopie",
            price: 13700,
            description:
              "Круглый торт, состоит из 2 слоев бисквита пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition:
              "Яйцо, Сахар, Сметана, Сливочное масло, Ванильный сахар, Пшеничная мука, Крем безе, Банан.",
            energyValue: 289.0,
            Protein: 9.1,
            Fats: 9.9,
            Carbohydrates: 30.3,
            Weight: 390,
            Diameter: 25,
            Height: 8 - 8.5,
            StoragePeriod: 5,
            StorageConditions: "В холодильнике при температуре от +2 до +6 °С"
          },
          {
            count: 1,
            new: require("@/assets/icons/new.svg"),
            clock: require("@/assets/icons/time.svg"),
            img: require("@/assets/product-img/product49.png"),
            title: "Шоколадные",
            price: 2500,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product49.png"),
            title: "Финики с орехами",
            price: 1800,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product50.png"),
            noMargarin: require("@/assets/icons/yellow.svg"),
            title: "Творожные",
            price: 2500,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product50.png"),
            noMargarin: require("@/assets/icons/yellow.svg"),
            title: "Творожные",
            price: 2500,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product51.png"),
            noMargarin: require("@/assets/icons/yellow.svg"),
            title: "Творожные",
            price: 2500,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          }
        ]
      }
    ]
  }),
  methods: {
    popupShow() {
      this.popup = true;
      console.log("popup");
    },
    addBasket(product) {
      if(this.basketContent[product.id]!==undefined){
        this.basketContent[product.id].count+=product.count;
      }else{
        this.$set(this.basketContent, product.id, {
          id:product.id,
        title: product.title,
        img: product.img,
        count: product.count,
        description: product.description,
        price:product.price,
        totalPrice: Number(product.count)*Number(product.price)
      });
      }
      this.basketSum+=Number(product.count)*Number(product.price);
      this.basketCount+=product.count;
    },
    plusBasket(product){
      console.log(product);
      this.basketContent[product.id].count+=1;
      this.basketSum=Number(this.basketSum)+Number(product.price);
      this.basketCount+=1;  
    },
    minusBasket(product){
      this.basketContent[product.id].count-=1;
      this.basketSum=Number(this.basketSum)-Number(product.price);
      this.basketCount-=1;
    },
    deleteBasketItem(index) {
      this.$delete(this.basketContent,index);
    },
    clearBasket() {
      this.basket = [];
    }
  },
  updated(){
    console.log(this.basketContent);
  }
};
</script>
