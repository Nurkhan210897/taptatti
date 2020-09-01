<template>
  <div class="home">
    <div class="main-slider">
      <VueSlickCarousel :arrows="true" :dots="true">
        <div class="main-slider-item">
          <img src="@/assets/images/main-slider.png" alt />
          <div class="container">
            <div class="slider-text" @click="popupShow">
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
            <template v-for="(item, index) in products">
              <div class="new-card" v-for="(item, index) in item.productsContent" :key="index">
                <img @click="showModal(item)" :src="item.img" alt />
                <div class="new-product-text">
                  <a href="#">
                    {{ item.title }}
                    <img src="@/assets/icons/info.svg" alt />
                  </a>
                  <a href="#" class="price">
                    <span>от</span>
                    <p>{{ item.price }}</p>
                    <span>₸</span>
                  </a>
                </div>
              </div>
            </template>
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
              <Basket :item="basketProduct" />
              <div class="history-orders">
                <div class="order-header" @click="orderShow.orderContent = !orderShow.orderContent">
                  <h3>
                    <img src="@/assets/icons/clock.svg" alt />История заказов
                    <img
                      src="@/assets/icons/arrow-bottom.svg"
                      alt
                      :class="{ activeDropdown: orderShow.orderContent}"
                    />
                  </h3>
                </div>
                <div class="history-orders-content" v-if="orderShow.orderContent">
                  <div class="history-order-header" :class="{orderShow: orderShow.orderInfo}">
                    <p>14 июля 2020</p>
                    <b>№ Almaty-3-51488</b>
                  </div>
                  <div class="order-info" v-if="orderShow.orderInfo">
                    <b>Чизкейк New York</b>
                    <p class="light-brown">Тонкое тесто, 35 см</p>
                    <p>
                      <b>Медовый</b>
                    </p>
                    <p class="light-brown">Тонкое тесто, 30 см</p>
                  </div>
                  <a
                    href="#"
                    class="blue-text d-block"
                    @click.prevent="orderShow.orderInfo = !orderShow.orderInfo"
                  >
                    Подробнее
                    <img
                      src="@/assets/icons/arrow-blue.svg"
                      alt
                      :class="{activeDropdown: orderShow.orderInfo}"
                    />
                  </a>
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
import Basket from "@/components/Basket.vue";

export default {
  name: "Home",

  components: {
    Product,
    Vpopup,
    Basket
  },
  computed: {
    cart() {
      return this.$store.getters.getCart();
    },
    products() {
      return this.$store.getters.getProducts();
    }
    // newProduct(){
    //   return this.$store.getters.getSliderNewProduct()
    // }
  },
  data: () => ({
    basketSum: 0,
    basketCount: 0,
    basketProduct: {},
    orderShow: {
      orderContent: false,
      orderInfo: false
    },
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
    ]
  }),
  methods: {
    popupShow() {
      this.popup = true;
      console.log("popup");
    },
    showModal(product) {
      this.popup = !this.popup;
      this.$emit("activeModal");
      this.$store.dispatch('SET_MODAL_PRODUCT', product)
      this.$store.dispatch('SHOW_MODAL', 'productModal')
    },
    addBasket(product) {
      // this.basketProduct=product;

      let addPermission = true;

      if (this.cart.length) {
        for (let i = 0; i < this.cart.length; i++) {
          if (this.cart[i].id == product.id) {
            addPermission = false;
            this.cart[i].count++;
          }
        }
        if (addPermission) {
          this.$store.dispatch("PUSH_TO_CART", product);
        } else {
          console.log("PRODUCT IS EXIST IN THE CART");
        }
      } else {
        this.$store.dispatch("PUSH_TO_CART", product);
      }
    }
  }
};
</script>