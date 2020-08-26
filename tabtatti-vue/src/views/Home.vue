<template>
  <div :class="{ activeModal: isActiveModal }">
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
          </div>
        </VueSlickCarousel>
      </div>
      <div class="container">
        <div class="main-category">
          <div class="category">
            <img src="@/assets/icons/category-1.svg" alt />
            <p>Торты</p>
          </div>
          <div class="category">
            <img src="@/assets/icons/category-2.svg" alt />
            <p>Пироги</p>
          </div>
          <div class="category">
            <img src="@/assets/icons/category-3.svg" alt />
            <p>Выпечка</p>
          </div>
          <div class="category">
            <img src="@/assets/icons/category-4.svg" alt />
            <p>Пирожное</p>
          </div>
          <div class="category">
            <img src="@/assets/icons/category-5.svg" alt />
            <p>Печенье</p>
          </div>
          <div class="category">
            <img src="@/assets/icons/category-6.svg" alt />
            <p>Полуфабрикаты</p>
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
                <p>Торт Аррива</p>
                <div class="price">
                  <span>от</span>
                  <p>700</p>
                  <span>₸</span>
                </div>
              </div>
            </div>
            <div class="new-card">
              <img src="@/assets/images/new2.png" alt />
              <div class="new-product-text">
                <p>Фруктовый пирог c творогом</p>
                <div class="price">
                  <span>от</span>
                  <p>500</p>
                  <span>₸</span>
                </div>
              </div>
            </div>
            <div class="new-card">
              <img src="@/assets/images/new3.png" alt />
              <div class="new-product-text">
                <div class="new-product-text">
                  <p>Тирамису</p>
                  <div class="price">
                    <span>от</span>
                    <p>800</p>
                    <span>₸</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="new-card">
              <img src="@/assets/images/new3.png" alt />
              <div class="new-product-text">
                <div class="new-product-text">
                  <p>Тирамису</p>
                  <div class="price">
                    <span>от</span>
                    <p>800</p>
                    <span>₸</span>
                  </div>
                </div>
              </div>
            </div>
          </VueSlickCarousel>
        </div>
      </div>
      <div class="products">
        <div class="container">
          <div class="row">
            <div class="col-xl-9">
              <div class="all-products" v-for="(item, index) in products" :key="index">
                <div class="title-product">
                  <div class="title-category">
                    <h1>{{ item.title }}</h1>
                  </div>
                  <div class="product-address" v-if='index === 0'>
                    <p>
                      <b>
                        Вы выбрали филиал
                        <span class="blue-text">TapTatti №2</span>
                        по адресу:
                      </b>
                      <span>{{ selected }}</span>
                    </p>
                    <div class="region-select" >
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
                    v-for="product in item.productsContent"
                    :key="product.titles"
                    :product="product"
                    @activeModal="isActiveModal=true"
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
                      <span class="basket-count">3</span>
                    </h3>
                    <span class="basket-delete">
                      <img src="@/assets/icons/basket.svg" alt />
                    </span>
                  </div>
                  <div class="basket">
                    <div class="basket-top">
                      <div class="basket-img">
                        <img src="@/assets/images/basket1.png" alt />
                      </div>
                      <div class="basket-deskr">
                        <span class="delete-basket">
                          <img src="@/assets/icons/exit-basket.svg" alt />
                        </span>
                        <b>Whoopie</b>
                        <p class="silver-text">Круглый торт, состоит из 2 слоев бисквита...</p>
                      </div>
                    </div>
                    <div class="product-count">
                      <div class="count">
                        <span>
                          <i class="fas fa-minus"></i>
                        </span>
                        <p>1</p>
                        <span>
                          <i class="fas fa-plus"></i>
                        </span>
                      </div>
                      <div class="total-count">
                        <h3>2700 ₸</h3>
                      </div>
                    </div>
                  </div>
                  <div class="basket">
                    <div class="basket-top">
                      <div class="basket-img">
                        <img src="@/assets/images/basket2.png" alt />
                      </div>
                      <div class="basket-deskr">
                        <span class="delete-basket">
                          <img src="@/assets/icons/exit-basket.svg" alt />
                        </span>
                        <b>Мясной пирог</b>
                        <p class="silver-text">Воздушный, пористые коржи с легким, нежным</p>
                      </div>
                    </div>
                    <div class="product-count">
                      <div class="count">
                        <span>
                          <i class="fas fa-minus"></i>
                        </span>
                        <p>1</p>
                        <span>
                          <i class="fas fa-plus"></i>
                        </span>
                      </div>
                      <div class="total-count">
                        <h3>5000 ₸</h3>
                      </div>
                    </div>
                  </div>
                  <div class="basket">
                    <div class="basket-top">
                      <div class="basket-img">
                        <img src="@/assets/images/product3.png" alt />
                      </div>
                      <div class="basket-deskr">
                        <span class="delete-basket">
                          <img src="@/assets/icons/exit-basket.svg" alt />
                        </span>
                        <b>Мясной пирог</b>
                        <p class="silver-text">Воздушный, пористые коржи с легким, нежным</p>
                      </div>
                    </div>
                    <div class="product-count">
                      <div class="count">
                        <span>
                          <i class="fas fa-minus"></i>
                        </span>
                        <p>1</p>
                        <span>
                          <i class="fas fa-plus"></i>
                        </span>
                      </div>
                      <div class="total-count">
                        <h3>3000 ₸</h3>
                      </div>
                    </div>
                  </div>
                  <div class="basket-last">
                    <p>
                      <img src="@/assets/icons/delivery.svg" alt />Статус доставки
                    </p>
                    <div class="total-price">
                      <p>Сумма заказа</p>
                      <h3>2500₸</h3>
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
              </div>
              <div class="history-orders">
                <div class="order-header">
                  <h3>
                    <img src="@/assets/icons/clock.svg" alt />История заказов
                  </h3>
                </div>
                <div class="history-orders-content">
                  <p>14 июля 2020</p>
                  <b>№ Almaty-3-51488</b>
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
    isActiveModal: false,
    setting: {
      nav: true,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 1
    },
    selected: "Смените филиал",
    filials: [
      "г.Алматы, ул. Тимирязева, 93/1",
      "г.Алматы, ул. Розбакиева, 38/1"
    ],
    products: [
      {
        title: "Торты",
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
            count: 1,
            hit: require("@/assets/icons/hit.svg"),
            img: require("@/assets/images/product1.png"),
            titles: "Молочная девочка",
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
            count: 1,
            new: require("@/assets/icons/new.svg"),
            clock: require("@/assets/icons/time.svg"),
            img: require("@/assets/images/product2.png"),
            titles: "Whoopie",
            price: 4850,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/images/product3.png"),
            titles: "Медовый",
            price: 3000,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product4.png"),
            clean: require("@/assets/icons/green.svg"),
            titles: "Сникерс",
            price: 13700,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product5.png"),
            noMargarin: require("@/assets/icons/yellow.svg"),
            titles: "Красный бархат",
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
            titles: "Чизкейк New York",
            price: 2500,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product7.png"),
            titles: "Шпинатный",
            price: 13700,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product8.png"),
            titles: "Морковный",
            price: 2500,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product9.png"),
            titles: "Тирамису",
            price: 1800,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product10.png"),
            titles: "Тирамису Фундук",
            price: 2500,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product11.png"),
            titles: "Тирамису Шоколад",
            price: 2500,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product12.png"),
            titles: "Тирамису Апельсин",
            price: 1800,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          }
        ]
      },
      {
        title: "Пироги",
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
            titles: "Фруктовый (большой)",
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
            titles: "Фруктовый (маленький)",
            price: 2500,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product15.png"),
            titles: "Пирамида",
            price: 1800,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product16.png"),
            clean: require("@/assets/icons/green.svg"),
            titles: "Финский яблочный",
            price: 13700,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product17.png"),
            noMargarin: require("@/assets/icons/yellow.svg"),
            titles: "Яблочный",
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
            titles: "Творожный (большой)",
            price: 1800,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product18.png"),
            titles: "Творожный (средний)",
            price: 13700,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product20.png"),
            titles: "Творожный (маленький)",
            price: 2500,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product21.png"),
            titles: "Зебра ",
            price: 1800,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product22.png"),
            titles: "Мясной (говядина)",
            price: 13700,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product22.png"),
            titles: "Мясной (курица)",
            price: 2500,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product23.png"),
            titles: "Слоеный пирог (с мясом)",
            price: 1800,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          }
        ]
      },
      {
        title: "Выпечка",
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
            titles: "Самса с мясом",
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
            titles: "Самса с курицей",
            price: 2500,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product26.png"),
            titles: "Борек с мясом",
            price: 1800,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product27.png"),
            noMargarin: require("@/assets/icons/yellow.svg"),
            titles: "Борек с картошкой",
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
            titles: "Кекс мясной",
            price: 1800,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product29.png"),
            titles: "Токаш с картошкой",
            price: 13700,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product30.png"),
            titles: "Токаш с капустой",
            price: 2500,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product31.png"),
            titles: "Токаш с сыром ",
            price: 1800,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product32.png"),
            titles: "Булочки ",
            price: 1800,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product33.png"),
            titles: "Бауырсаки",
            price: 1800,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          }
        ]
      },
      {
        title: "Пирожное",
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
            titles: "Капкейк",
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
            titles: "Картошка",
            price: 2500,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product36.png"),
            titles: "Красный бархат",
            price: 1800,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product37.png"),
            noMargarin: require("@/assets/icons/yellow.svg"),
            titles: "Фруктовая корзина",
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
            titles: "Фруктовая корзина 2",
            price: 1800,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          }
        ]
      },
      {
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
            titles: "Whoopie",
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
            titles: "Шоколадные",
            price: 2500,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product41.png"),
            titles: "Финики с орехами",
            price: 1800,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product42.png"),
            noMargarin: require("@/assets/icons/yellow.svg"),
            titles: "Творожные",
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
            titles: "Алагул",
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
            titles: "Лимонные",
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
            titles: "Ун курабие",
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
            titles: "Кунжутное",
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
            titles: "Курага с орехами",
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
            titles: "Рогалик сыр с картошкой",
            price: 1800,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
        ]
      },
       {
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
            titles: "Whoopie",
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
            titles: "Шоколадные",
            price: 2500,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product49.png"),
            titles: "Финики с орехами",
            price: 1800,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
          {
            count: 1,
            img: require("@/assets/product-img/product50.png"),
            noMargarin: require("@/assets/icons/yellow.svg"),
            titles: "Творожные",
            price: 2500,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
           {
            count: 1,
            img: require("@/assets/product-img/product50.png"),
            noMargarin: require("@/assets/icons/yellow.svg"),
            titles: "Творожные",
            price: 2500,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
           {
            count: 1,
            img: require("@/assets/product-img/product51.png"),
            noMargarin: require("@/assets/icons/yellow.svg"),
            titles: "Творожные",
            price: 2500,
            description:
              "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
            Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
          },
        ]
      }
    ]
  }),
  methods: {
    popupShow() {
      this.popup = true;
      console.log("popup");
    }
  }
};
</script>
