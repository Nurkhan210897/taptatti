<template>
  <div class="col-xl-4">
    <div class="product" @click="showModal">
      <div class="product-features">
        <span v-if="product.hit">
          <img :src="product.hit" alt />
        </span>
        <span v-if="product.new">
          <img :src="product.new" alt />
        </span>
        <span v-if="product.clock">
          <img :src="product.clock" alt />
        </span>
        <span v-if="product.clean">
          <img :src="product.clean" alt />
        </span>
        <span v-if="product.noMargarin">
          <img :src="product.noMargarin" alt />
        </span>
      </div>
      <div class="products-img">
        <img :src="product.img" alt />
      </div>
      <div class="titles">
        <p>{{product.titles}}</p>
      </div>
      <div class="product-count">
        <div class="count">
          <span @click="counterMinus">
            <i class="fas fa-minus"></i>
          </span>
          <p>{{ product.count }}</p>
          <span @click="counterPlus">
            <i class="fas fa-plus"></i>
          </span>
        </div>
        <button class="btn-outline">{{ totalPrice.toLocaleString() }}₸</button>
      </div>
    </div>
    <transition name="fade">
      <Vpopup v-if="popup" @exitPopup="exitPopup">
        <transition name="fade">
          <div class="cake-reg" v-if="cakeModal">
            <div class="cake-reg-header">
              <div class="title-reg">
                <div class="prev-link">
                  <img src="@/assets/icons/prev-product.svg" alt />
                  <a href="#" @click.prevent="cakeModal = !cakeModal">Назад</a>
                </div>
                <h2>Оформление торта</h2>
              </div>
              <div class="order-reg">
                <div class="order-reg-text">
                  <div class="order-red-img">
                    <img src="@/assets/product-img/product-slider1.png" alt />
                  </div>
                  <div>
                    <b>Молочная девочка</b>
                    <p>Ароматные, тонкие коржи на основе натурально... Ароматные, тонкие коржи на основе натурально...</p>
                  </div>
                </div>
                <div class="order-reg-price">
                  <b>2000 ₸</b>
                </div>
              </div>
            </div>
            <div class="cake-reg-content">
              <div class="category-title">
                <a
                  href="#"
                  @click.prevent="categoryBtn('inscription')"
                  :class="{activeCategory: category.inscription}"
                >Надпись</a>
                <a
                  href="#"
                  @click.prevent="categoryBtn('withRegistration')"
                  :class="{activeCategory: category.withRegistration}"
                >С оформлением</a>
                <a
                  href="#"
                  @click.prevent="categoryBtn('hard')"
                  :class="{activeCategory: category.hard}"
                >Сложные</a>
              </div>
              <div class="category-title catefory-title-bottom">
                <a href="#">С фруктами</a>
                <a href="#" class="activeCategory">Мастикой</a>
                <a href="#">С фото</a>
              </div>
            </div>
            <div class="cake-category">
              <div class="withRegistration" v-show="category.withRegistration">
                <div class="row">
                  <div class="col-xl-4">
                    <div class="card-cake">
                      <div class="card-cake-img">
                        <img src="@/assets/product-img/product4.png" alt />
                      </div>
                      <p>Шпинатный</p>
                      <div class="cake-price">
                        <p>от 700 ₸</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="card-cake cake-active">
                      <div class="card-cake-img">
                        <img src="@/assets/product-img/product4.png" alt />
                      </div>
                      <p>Шпинатный</p>
                      <div class="cake-price">
                        <p>от 700 ₸</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="card-cake">
                      <div class="card-cake-img">
                        <img src="@/assets/product-img/product5.png" alt />
                      </div>
                      <p>Чизкейк New York</p>
                      <div class="cake-price">
                        <p>от 700 ₸</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="card-cake">
                      <div class="card-cake-img">
                        <img src="@/assets/product-img/product6.png" alt />
                      </div>
                      <p>Шпинатный</p>
                      <div class="cake-price">
                        <p>от 700 ₸</p>
                      </div>
                    </div>
                  </div>
                </div>
                <form action>
                  <label for>Надпись на торте (максимум 15 букв)</label>
                  <div class="input-reg">
                    <input
                      type="text"
                      placeholder="Введите надпись для оформление торта! "
                      class="input-text"
                    />
                    <button type="submit" class="brown-btn">
                      <i class="fas fa-check"></i>Проверить текст
                    </button>
                  </div>
                  <label for>
                    <span class="red-text">Внимание!</span> Учтите раскладку клавиатуры. Как вы написали, так и будет изготовлено.
                  </label>
                </form>
                <div class="order-modal-bottom">
                  <ul>
                    <li>
                      <p>Стоимость добавление надписи:</p>
                      <span>500 ₸</span>
                    </li>
                    <li>
                      <p>Оформление по фото/мастикой:</p>
                      <span>1500 ₸</span>
                    </li>
                    <li>
                      <p>Сумма заказа:</p>
                      <span>2500 ₸</span>
                    </li>
                  </ul>
                  <div class="hard-bottom">
                    <div>
                      <img src="@/assets/icons/icon-order.svg" alt />
                      <a href="#" class="blue-text">Оформить по-своему</a>
                    </div>
                    <div>
                      <button type="button" class="brown-btn">Выбрать оформление</button>
                      <button type="button" class="btn-outline">Назад</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="inscription" v-show="category.inscription">
                <form action>
                  <div class="inscription-text">
                    <label for>Надпись на торте (максимум 15 букв)</label>
                    <div class="input-reg">
                      <input type="text" placeholder="Введите надпись" class="input-text" />
                      <button type="submit" class="brown-btn">
                        <i class="fas fa-check"></i>Проверить текст
                      </button>
                    </div>
                    <label for>
                      <span class="red-text">Внимание!</span> Учтите раскладку клавиатуры. Как вы написали, так и будет изготовлено.
                    </label>
                  </div>
                  <label for>Надпись на торте (максимум 15 букв)</label>
                  <input type="text" placeholder="Ваши пожелания" class="input-text" />
                </form>
                <div class="order-modal-bottom">
                  <ul>
                    <li>
                      <p>Стоимость добавление надписи:</p>
                      <span>500 ₸</span>
                    </li>
                    <li>
                      <p>Оформление по фото/мастикой:</p>
                      <span>1500 ₸</span>
                    </li>
                    <li>
                      <p>Сумма заказа:</p>
                      <span>2500 ₸</span>
                    </li>
                  </ul>
                  <div class="hard-bottom">
                    <div>
                      <img src="@/assets/icons/icon-order.svg" alt />
                      <a href="#" class="blue-text">Оформить по-своему</a>
                    </div>
                    <div>
                      <button type="button" class="brown-btn">Выбрать оформление</button>
                      <button type="button" class="btn-outline">Назад</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="hard" v-show="category.hard">
                <div class="hard-content">
                  <div class="title-reg">
                    <p>
                      Если вы желаете оформить торт по вашему, скидывайте фото на
                      <b>WhatsApp</b>
                    </p>
                    <a href="tel:+7 777 111 22 22">
                      <img src="@/assets/icons/whatsapp.svg" alt /> +7 777 111 22 22
                    </a>
                  </div>
                  <div class="hard-text">
                    <p>
                      Для заказа сложные оформления, к примеру 5-и этажные торты
                      вам необходимо приехать к нам в офис по адресу:
                      <b>г. Алматы, Кордай, 12</b>
                    </p>
                    <button class="btn-outline" type="button">
                      <i class="fas fa-map-marker-alt"></i> Показать на карте
                    </button>
                  </div>
                  <p>
                    Позвоните нам для уточнения заказа:
                    <b>+7 777 111 22 22</b>
                  </p>
                </div>
                <div class="hard-bottom">
                  <button type="button" class="brown-btn">Выбрать оформление</button>
                  <button type="button" class="btn-outline">Назад</button>
                </div>
              </div>
            </div>
          </div>
        </transition>
        <div class="row m-0">
          <div class="col-xl-7">
            <div class="modal-left">
              <div class="modal-top">
                <div class="modal-top-right">
                  <span class="new">Новинка</span>
                  <span class="clock-icon">
                    <img src="@/assets/icons/clock-white.svg" alt />
                  </span>
                </div>
                <button class="btn btn-outline-blue" @click="cakeModal = !cakeModal">
                  <img src="@/assets/icons/oformi.svg" alt />
                  Создать оформление для торта
                </button>
              </div>
              <div class="modal-img">
                <vueper-slides
                  ref="vueperslides1"
                  @slide="
                  $refs.vueperslides2 &&
                    $refs.vueperslides2.goToSlide($event.currentSlide.index, {
                      emit: false,
                    })
                  "
                  :slide-ratio="1 / 4"
                  :bullets="false"
                  :arrows="false"
                  class="slider-for"
                >
                  <vueper-slide
                    v-for="(slide, i) in modaSlider"
                    :key="i"
                    :title="slide.title"
                    :image="slide.img"
                    :autoplay="true"
                  />
                </vueper-slides>

                <vueper-slides
                  ref="vueperslides2"
                  :slide-ratio="0 / 8"
                  :dragging-distance="50"
                  @slide="
                    $refs.vueperslides1 &&
                      $refs.vueperslides1.goToSlide($event.currentSlide.index, {
                        emit: false,
                      })
                  "
                  :visible-slides="3"
                  fixed-height="100px"
                  :bullets="false"
                  class="slider-nav"
                >
                  <vueper-slide
                    v-for="(slide, i) in modaSlider"
                    :key="i"
                    :title="slide.title"
                    :image="slide.img"
                    @click.native="
                    $refs.vueperslides2 && $refs.vueperslides2.goToSlide(i - 0)
                  "
                  ></vueper-slide>
                </vueper-slides>
              </div>
              <div class="modal-bottom">
                <b class="blue-text">Пищевая ценность на 100 г</b>

                <ul>
                  <li>
                    <span>Энерг. ценность</span>
                    <span>{{product.energyValue}}</span>
                  </li>
                  <li>
                    <span>Белки</span>
                    <span>{{product.Protein}}</span>
                  </li>
                  <li>
                    <span>Жиры</span>
                    <span>{{product.Fats}}</span>
                  </li>
                  <li>
                    <span>Углеводы</span>
                    <span>{{product.Carbohydrates}}</span>
                  </li>
                  <li>
                    <span>Вес</span>
                    <span>{{product.Weight}}</span>
                  </li>
                  <li>
                    <span>Диаметр</span>
                    <span>{{product.Diameter}}</span>
                  </li>
                  <li>
                    <span>Высота</span>
                    <span>{{product.Height}}</span>
                  </li>
                  <li>
                    <span>Срок хранения</span>
                    <span>{{product.StoragePeriod}}</span>
                  </li>
                  <li>
                    <span>Условия хранения</span>
                    <span>{{product.StorageConditions}}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-xl-5 p-0">
            <div class="modal-right">
              <div class="title">
                <h2>{{ product.titles }}</h2>
              </div>
              <div class="modal-deskr">
                <p>{{ product.description }}</p>
              </div>
              <div class="composition">
                <b>Состав:</b>
                <div class="composition-content">
                  <p>{{ product.Composition }}</p>
                </div>
              </div>
              <div class="product-count">
                <div class="count">
                  <span @click="counterMinus">
                    <i class="fas fa-minus"></i>
                  </span>
                  <p>{{ product.count }}</p>
                  <span @click="counterPlus">
                    <i class="fas fa-plus"></i>
                  </span>
                </div>
                <div class="total-count">
                  <p class="small-text">Стоимость:</p>
                  <h3>{{ totalPrice.toLocaleString() }}₸</h3>
                </div>
              </div>
              <div class="reviews-header">
                <div class="reviews-top">
                  <p>
                    Отзывы
                    <span>3</span>
                  </p>
                  <button class="btn blue-bg">Написать</button>
                </div>
                <img src="@/assets/icons/stars.svg" alt />
              </div>
              <div class="reviews-content">
                <div class="reviews-text">
                  <b>Макпал</b>
                  <p>Очень вкусный торт! Советую всем!</p>
                </div>
                <span class="star">
                  <img src="@/assets/icons/stars.svg" alt />
                </span>
              </div>
              <div class="reviews-content">
                <div class="reviews-text">
                  <b>Макпал</b>
                  <p>Очень вкусный торт! Советую всем!</p>
                </div>
                <span class="star">
                  <img src="@/assets/icons/stars.svg" alt />
                </span>
              </div>
              <div class="reviews-content">
                <div class="reviews-text">
                  <b>Денис</b>
                  <p>Кажется слишком сладко, но в целом круто...</p>
                </div>
                <span class="star">
                  <img src="@/assets/icons/stars.svg" alt />
                </span>
              </div>
            </div>
          </div>
        </div>
      </Vpopup>
    </transition>
  </div>
</template>



<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import Vpopup from "./V-popup.vue";
export default {
  components: {
    Vpopup,
    VueperSlides,
    VueperSlide
  },
  props: {
    product: Object
  },
  data: () => ({
    popup: false,
    cakeModal: false,
    category: {
      inscription: false,
      withRegistration: true,
      hard: false
    },
    sliderFor: {
      arrows: true,
      dots: true
    },
    modaSlider: [
      {
        img: require("@/assets/product-img/product-slider1.png")
      },
      {
        img: require("@/assets/product-img/product4.png")
      },
      {
        img: require("@/assets/product-img/product5.png")
      },
      {
        img: require("@/assets/product-img/product5.png")
      }
    ]
  }),
  computed: {
    totalPrice() {
      return this.product.count * this.product.price;
    }
  },
  methods: {
    categoryBtn(item) {
      for (let i in this.category) {
        if (i == item) {
          this.category[i] = true;
        } else {
          this.category[i] = false;
        }
      }
    },
    exitPopup() {
      this.popup = false;
    },
    counterPlus() {
      this.product.count++;
    },
    counterMinus() {
      if (this.product.count != 1) {
        this.product.count--;
      }
    },
    showModal() {
      this.popup = !this.popup;
      this.$emit("activeModal");
    }
  }
};
</script>