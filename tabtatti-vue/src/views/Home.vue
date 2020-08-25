<template>
<div :class="{ activeModal: isActiveModal }">
<div class="home" >
    <div class="main-slider">
      <VueSlickCarousel :arrows="true" :dots="true">
        <div class="main-slider-item">
          <img src="@/assets/images/main-slider.png" alt />
          <div class="slider-text">
            <h2>Большой выбор тортов и выпечки</h2>
            <div class="slider-deskr">
              <img src="@/assets/images/icon_prod.svg" alt />
              <p>Весь ассортимент приготовлен из качественных и свежих продуктов</p>
            </div>
            <button type="button" class="btn btn-outline-yellow">Наше меню</button>
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
            <div class="all-products">
              <div class="title-product">
                <div class="title-category">
                  <h1>Торты</h1>
                </div>
                <div class="product-address">
                  <p>
                    <b>
                      Вы выбрали филиал
                      <span class="blue-text">TapTatti №2</span>
                      по адресу:
                    </b>
                    <span>{{ selected }}</span>
                  </p>
                  <div class="region-select">
                    <img src="@/assets/icons/home.svg" alt />
                    <select name id v-model="selected">
                      <option
                        v-for="(item, index) in filials"
                        :key="index"
                        :value="item.value"
                      >{{ item.filial }}</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="product-link col-xl-10 p-0">
                <a href="#">Сливочный</a>
                <a href="#">Шоколадный</a>
                <a href="#">Творожный</a>
                <a href="#">Новинки</a>
                <a href="#">Хит</a>
                <a href="#">Без маргарина</a>
                <a href="#">Низкокалорийный</a>
                <a href="#">Натуральные сливочные</a>
              </div>
              <div class="products row">
                <Product
                  v-for="product in products"
                  :key="product.titles"
                  :product="product"
                  @activeModal='isActiveModal=true'
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
    isActiveModal:false, 
    setting: {
      nav: true,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 1
    },
    selected: "г.Алматы, ул. Тимирязева, 38/1",
    filials: [
      {
        filial: "г.Алматы, ул. Тимирязева, 38/1",
        value: "г.Алматы, ул. Тимирязева, 38/1"
      },
      {
        filial: "г.Алматы, ул. Тимирязева, 38/1",
        value: "г.Алматы, ул. Розбакиева, 83/1"
      }
    ],
    products: [
      {
        count: 1,
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
