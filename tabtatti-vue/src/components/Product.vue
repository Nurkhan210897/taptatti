<template>
  <div class="col-xl-4">
    <div class="product">
      <div class="products-img" @click="showModal">
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
        <button class="btn-outline">{{ totalPrice }}₸</button>
      </div>
    </div>
    <transition name="fade">
      <Vpopup v-if="popup" @exitPopup="exitPopup">
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
                <button class="btn btn-outline-blue">
                  <img src="@/assets/icons/oformi.svg" alt />
                  Создать оформление для торта
                </button>
              </div>
              <div class="modal-img">
                <img :src="product.img" alt />
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
import Vpopup from "./V-popup.vue";
export default {
  components: {
    Vpopup
  },
  props: {
    product: Object
  },
  data: () => ({
    popup: false
  }),
  computed: {
    totalPrice() {
      return this.product.count * this.product.price;
    }
  },
  methods: {
    exitPopup() {
      this.popup = false;
    },
    counterPlus() {
      this.product.count++;
      //   this.$emit("addPrice", this.item.price);
    },
    counterMinus() {
      if (this.product.count != 1) {
        this.product.count--;
        // this.$emit("minusPrice", this.item.price);
      }
    },
    showModal(){
      this.popup = !this.popup;
      this.$emit('activeModal')
    }
  }
};
</script>