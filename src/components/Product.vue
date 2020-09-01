<template>
  <div class="col-xl-4">
    <div class="product">
      <div class="product-features">
        <span v-if="product.hit" @mouseenter="tooltipHit=!false" @mouseleave="tooltipHit = false">
          <img :src="product.hit" alt />
          <div class="tooltip-product" v-if="tooltipHit">
            <p>{{ product.tooltipHit }}</p>
          </div>
        </span>
        <span v-if="product.new" @mouseenter="tooltipNew=!false" @mouseleave="tooltipNew = false">
          <img :src="product.new" alt />
          <div class="tooltip-product" v-if="tooltipNew">
            <p>{{ product.tooltipNew }}</p>
          </div>
        </span>
        <span
          v-if="product.clock"
          @mouseenter="tooltipClock=!false"
          @mouseleave="tooltipClock = false"
        >
          <img :src="product.clock" alt />
          <div class="tooltip-product" v-if="tooltipClock">
            <p>{{ product.tooltipClock }}</p>
          </div>
        </span>
        <span v-if="product.clean" @mouseenter="showclean=!false" @mouseleave="showclean = false">
          <img :src="product.clean" alt />
          <div class="tooltip-product" v-if="showclean">
            <p>{{ product.tooltipGreen }}</p>
          </div>
        </span>
        <span
          v-if="product.noMargarin"
          @mouseenter="shownoMargarin=!false"
          @mouseleave="shownoMargarin = false"
        >
          <img :src="product.noMargarin" alt />
          <div class="tooltip-product" v-if="shownoMargarin">
            <p>{{ product.tooltipYellow }}</p>
          </div>
        </span>
      </div>
      <div @click="showModal(product)" class="show-modal">
        <div class="products-img">
          <img :src="product.img" alt />
        </div>
        <div class="title">
          <p>{{product.title}}</p>
          <img src="@/assets/icons/info.svg" alt />
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
        <button class="btn-outline" @click="addBasket">{{ totalPrice.toLocaleString() }}₸</button>
      </div>
    </div>
    <transition name="fade">
      <Vpopup v-if="modal_product" @exitPopup="exitPopup">
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
                  <b>{{modal_product.price}} ₸</b>
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
                    <div class="card-cake" @click="cardActive = !cardActive" :class="{cardActive}">
                      <div class="card-cake-img">
                        <img src="@/assets/product-img/product4.png" alt />
                      </div>
                      <div class="card-cake-text">
                        <b>Шпинатный</b>
                        <p>Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом, между слоями бисквита равномерно нанесен крем из творожного сыра.</p>
                        <div class="cake-price">
                          <p>от 700 ₸</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="card-cake">
                      <div class="card-cake-img">
                        <img src="@/assets/product-img/product4.png" alt />
                      </div>
                      <div class="card-cake-text">
                        <b>Шпинатный</b>
                        <p>Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом, между слоями бисквита равномерно нанесен крем из творожного сыра.</p>
                        <div class="cake-price">
                          <p>от 700 ₸</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="card-cake">
                      <div class="card-cake-img">
                        <img src="@/assets/product-img/product5.png" alt />
                      </div>
                      <div class="card-cake-text">
                        <b>Шпинатный</b>
                        <p>Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом, между слоями бисквита равномерно нанесен крем из творожного сыра.</p>
                        <div class="cake-price">
                          <p>от 700 ₸</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="card-cake">
                      <div class="card-cake-img">
                        <img src="@/assets/product-img/product6.png" alt />
                      </div>
                      <div class="card-cake-text">
                        <b>Шпинатный</b>
                        <p>Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом, между слоями бисквита равномерно нанесен крем из творожного сыра.</p>
                        <div class="cake-price">
                          <p>от 700 ₸</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <form action>
                  <div class="inscription-error">
                    <label for>Надпись на торте (максимум 15 букв)</label>
                    <span
                      v-if="$v.testName.$dirty && !$v.testName.maxLength"
                      class="error-text invalid"
                    >Максимум 15 букв</span>
                    <div>
                      <span
                        class="valid"
                        v-if="$v.testName.$dirty && $v.testName.required"
                      >Текст проверен!</span>
                      <a
                        href="#"
                        @click.prevent="changeText"
                        class="change-text"
                        v-if="$v.testName.$dirty && $v.testName.required"
                      >Изменить текст</a>
                    </div>
                  </div>
                  <div class="input-reg">
                    <input
                      type="text"
                      placeholder="Введите надпись"
                      v-model.trim="testName"
                      :class="[{invalid: ($v.testName.$dirty && !$v.testName.required) || ($v.testName.$dirty && !$v.testName.maxLength), valid: ($v.testName.$dirty && $v.testName.required) || ($v.testName.$dirty && $v.testName.maxLength)},]"
                    />
                    <button
                      type="submit"
                      class="brown-btn"
                      @click.prevent="checkTest()"
                      :class="{showclean}"
                    >
                      <i class="fas fa-check"></i>Проверить текст
                    </button>
                  </div>
                  <label for>
                    <span class="red-text">Внимание!</span> Учтите раскладку клавиатуры. Как вы написали, так и будет изготовлено.
                  </label>
                </form>
              </div>
              <div class="inscription" v-show="category.inscription">
                <form action>
                  <div class="inscription-error">
                    <label for>Надпись на торте (максимум 15 букв)</label>
                    <span
                      v-if="$v.testName.$dirty && !$v.testName.maxLength"
                      class="error-text invalid"
                    >Максимум 15 букв</span>
                  </div>
                  <div class="input-reg">
                    <input
                      type="text"
                      name
                      id
                      placeholder="Введите надпись"
                      v-model.trim="testName"
                      :class="{invalid: ($v.testName.$dirty && !$v.testName.required) || ($v.testName.$dirty && !$v.testName.maxLength)}"
                    />
                    <button type="submit" class="brown-btn" @click.prevent="checkTest">
                      <i class="fas fa-check"></i>Проверить текст
                    </button>
                  </div>
                  <label for>
                    <span class="red-text">Внимание!</span> Учтите раскладку клавиатуры. Как вы написали, так и будет изготовлено.
                  </label>
                </form>
              </div>
              <div class="order-modal-bottom" v-if="!category.hard">
                <ul>
                  <li>
                    <p>Стоимость добавление надписи:</p>
                    <span>500 ₸</span>
                  </li>
                  <li>
                    <p>Сумма заказа:</p>
                    <span>2500 ₸</span>
                  </li>
                </ul>
                <div class="hard-bottom">
                  <div>
                    <img src="@/assets/icons/icon-order.svg" alt />
                    <a
                      href="#"
                      class="blue-text"
                      @click.prevent="categoryBtn('hard')"
                    >Оформить по-своему</a>
                  </div>
                  <div>
                    <button type="button" class="brown-btn">Выбрать оформление</button>
                    <button
                      type="button"
                      class="btn-outline"
                      @click.prevent="cakeModal = !cakeModal"
                    >Назад</button>
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
                  <button
                    type="button"
                    class="btn-outline"
                    @click.prevent="cakeModal = !cakeModal"
                  >Назад</button>
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
                  <span
                    v-if="product.hit"
                    @mouseenter="tooltipHit=!false"
                    @mouseleave="tooltipHit = false"
                  >
                    <img :src="product.hit" alt />
                    <div class="tooltip-product" v-if="tooltipHit">
                      <p>{{ product.tooltipHit }}</p>
                    </div>
                  </span>
                  <span
                    v-if="product.new"
                    @mouseenter="tooltipNew=!false"
                    @mouseleave="tooltipNew = false"
                  >
                    <img :src="product.new" alt />
                    <div class="tooltip-product" v-if="tooltipNew">
                      <p>{{ product.tooltipNew }}</p>
                    </div>
                  </span>
                  <span
                    v-if="product.clock"
                    @mouseenter="tooltipClock=!false"
                    @mouseleave="tooltipClock = false"
                  >
                    <img :src="product.clock" alt />
                    <div class="tooltip-product" v-if="tooltipClock">
                      <p>{{ product.tooltipClock }}</p>
                    </div>
                  </span>
                  <span
                    v-if="product.clean"
                    @mouseenter="showclean=!false"
                    @mouseleave="showclean = false"
                  >
                    <img :src="product.clean" alt />
                    <div class="tooltip-product" v-if="showclean">
                      <p>{{ product.tooltipGreen }}</p>
                    </div>
                  </span>
                  <span
                    v-if="product.noMargarin"
                    @mouseenter="shownoMargarin=!false"
                    @mouseleave="shownoMargarin = false"
                  >
                    <img :src="product.noMargarin" alt />
                    <div class="tooltip-product" v-if="shownoMargarin">
                      <p>{{ product.tooltipYellow }}</p>
                    </div>
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
                <h2>{{ product.title }}</h2>
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
              <div class="button-modal">
                <button class="btn btn-outline">Купить сразу</button>
                <button class="btn brown-btn addBasket" @click="addBasket">Добавить в корзину</button>
              </div>
              <div class="reviews-header">
                <div class="reviews-top">
                  <p>
                    Отзывы
                    <span>3</span>
                  </p>
                  <button class="btn blue-bg" @click="reviewModal = true">Написать</button>
                </div>
                <div class="star" data-total-value="0">
                  <input type="radio" name="star" id="star1" class="star-item" />
                  <label for="star1"></label>
                  <input type="radio" name="star" id="star2" class="star-item" />
                  <label for="star2"></label>
                  <input type="radio" name="star" id="star3" class="star-item" />
                  <label for="star3"></label>
                  <input type="radio" name="star" id="star4" class="star-item" />
                  <label for="star4"></label>
                  <input type="radio" name="star" id="star5" class="star-item" />
                  <label for="star5"></label>
                </div>
              </div>
              <div class="reviews">
                <div class="reviews-text">
                  <b>Макпал</b>
                  <p>Очень вкусный торт! Советую всем!</p>
                </div>
                <div class="star" data-total-value="0">
                  <input type="radio" name="star" id="star1" class="star-item" />
                  <label for="star1"></label>
                  <input type="radio" name="star" id="star2" class="star-item" />
                  <label for="star2"></label>
                  <input type="radio" name="star" id="star3" class="star-item" />
                  <label for="star3"></label>
                  <input type="radio" name="star" id="star4" class="star-item" />
                  <label for="star4"></label>
                  <input type="radio" name="star" id="star5" class="star-item" />
                  <label for="star5"></label>
                </div>
              </div>
              <div class="reviews" v-for="item in reviewsContent" :key="item.name">
                <div class="reviews-text">
                  <b>{{ item.name }}</b>
                  <p>{{ item.review }}</p>
                </div>
                <div class="star">
                  <div>★</div>
                  <div>★</div>
                  <div>★</div>
                  <div>★</div>
                  <div>★</div>
                </div>
              </div>
            </div>
          </div>

          <transition name="fade">
            <div class="review-modal" v-if="reviewModal">
              <div class="row">
                <div class="col-xl-5 pr-0">
                  <div class="review-modal-img">
                    <img src="@/assets/images/review-img.png" alt />
                  </div>
                </div>
                <div class="col-xl-7">
                  <div class="reviews-content">
                    <div class="prev-link">
                      <img src="@/assets/icons/prev-product.svg" alt />
                      <a href="#" @click.prevent="reviewModal = !reviewModal">Назад</a>
                    </div>
                    <div class="write-review">
                      <h3>Написать отзыв</h3>
                      <form type="post" @submit.prevent="addReview">
                        {{name}} + {{review}}
                        <input
                          type="text"
                          name="name"
                          placeholder="Ваше имя"
                          v-model.trim="name"
                          :class="{invalid: ($v.name.$dirty && !$v.name.required)}"
                        />
                        <span
                          v-if="$v.name.$dirty && !$v.name.required"
                          class="error-text invalid"
                        >* Вы не написали имя</span>
                        <div class="choose-star">
                          <vue-stars name="slotDemo" :max="5" :value="3"></vue-stars>
                          <p class="silver-text">Выберите кол-во звёзд</p>
                        </div>
                        <textarea
                          name="comment"
                          id
                          cols="30"
                          rows="3"
                          placeholder="Ваш отзыв"
                          v-model="review"
                          :class="{invalid: ($v.name.$dirty && !$v.review.required)}"
                        ></textarea>
                        <span
                          v-if="$v.name.$dirty && !$v.review.required"
                          class="error-text invalid"
                        >* Вы не написали имя</span>
                        <button type="submit" class="btn brown-btn">Отправить</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>
          <transition name="fade">
            <div class="reviews-success" v-if="reviewSuccess">
              <div class="prev-link">
                <img src="@/assets/icons/prev-product.svg" alt />
                <a href="#" @click.prevent="reviewSuccess = !reviewSuccess">Назад</a>
              </div>
              <div class="reviews-success-text">
                <img src="@/assets/icons/star-thank.svg" alt />
                <b>Спасибо!</b>
                <p>Ваш отзыв вскоре будет опубликован.</p>
              </div>
            </div>
          </transition>
        </div>
      </Vpopup>
    </transition>
  </div>
</template>



<script>
import {
  required,
  maxLength,
  userName,
  password
} from "vuelidate/lib/validators";
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
    cardActive: false,
    name: null,
    review: null,
    testName: "",
    valid: false,
    reviewSuccess: false,
    reviewsContent: [],
    reviewModal: false,
    showclean: false,
    shownoMargarin: false,
    popup: false,
    cakeModal: false,
    tooltipHit: false,
    tooltipClock: false,
    tooltipNew: false,
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
  validations: {
    name: { required },
    review: { required },
    testName: { required, maxLength: maxLength(15) }
  },
  computed: {
    totalPrice() {
      return this.product.count * this.product.price;
    },
    modal_product() {
      return this.$store.getters.getModalProduct();
    }
  },
  methods: {
    addBasket() {
      this.$emit("addBasket");
      this.popup = false;
    },
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
    showModal(product) {
      this.popup = !this.popup;
      this.$emit("activeModal");
      this.$store.dispatch('SET_MODAL_PRODUCT', product)
    },
    addReview() {
      console.log(this.reviewsContent);

      if (this.name && this.review) {
        this.reviewsContent.push({
          name: this.name,
          review: this.review
        });
        this.name = this.review = null;
        this.reviewSuccess = true;
        this.reviewModal = false;
      }
      // if (this.name != "") {
      //   this.reviewSuccess = true;
      //   this.reviewModal = false;
      // }
    },
    checkTest() {
      if (this.testName.length < 15) {
        console.log("this < 15");
        console.log(this.testName.length);
        this.showclean = true;
      } else {
        console.log("this > 15");
      }
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
    },
    changeText() {
      this.showclean = false;
      this.testName = "";
    }
  },
  updated() {
    console.log(this.testName.length);
    if (this.testName.length < 15) {
    }
  }
};
</script>