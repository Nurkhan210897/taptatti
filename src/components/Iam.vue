<template>
  <div class="product-delivery">
    <div class="time-delivery">
      <div class="title">
        <p>
          Время доставки
          <img
            src="@/assets/images/info.png"
            @mouseenter="show=!false"
            @mouseleave="show = false"
          />
        </p>

        <div v-if="show">
          <div class="tooltip-product">
            <p>Vivamus vel lectus sit porta mus a faucibus. Volutpat sem arcu.</p>
          </div>
        </div>
      </div>
      <div class="row align-items-baseline">
        <div class="col-xl-4">
          <div class="d-flex align-items-center">
            <input type="checkbox" class="input-check" v-model="timeDelivery.date" />
            <label for>Как можно скорее</label>
          </div>
          <br />
        </div>
        <div class="col-xl-4">
          <div class="d-flex align-items-center">
            <input type="checkbox" class="input-check" v-model="timeDelivery.time" />
            <label for>Выбрать время</label>
          </div>
          <br />
        </div>
      </div>
      <div v-show="timeDelivery.time" class="row">
        <div class="col-xl-4">
          <v-select :options="optionsDate" :clearable="false" label="options"></v-select>
        </div>
        <div class="col-xl-4">
          <v-select
            :options="optionsTime"
            :reduce="options => options.code"
            :clearable="false"
            label="options"
          ></v-select>
        </div>
      </div>
    </div>
    <div class="payment">
      <div class="title">
        <p>Оплата</p>
      </div>
      <div class="payment-main">
        <div class="payment-content">
          <input
            type="checkbox"
            name="radio"
            class="input-check"
            v-model="payment.cash"
            @click="checkboxClick('cash')"
          />
          <label for>Наличными</label>
        </div>
        <div class="payment-content">
          <input
            type="checkbox"
            name="radio"
            class="input-check"
            v-model="payment.cardCourier"
            @click="checkboxClick('cardCourier')"
          />
          <label for>Картой курьеру</label>
        </div>
        <div class="payment-content">
          <input
            type="checkbox"
            name="radio"
            class="input-check"
            v-model="payment.cardSait"
            @click="checkboxClick('cardSait')"
          />
          <label for>
            Картой на сайте
            <img src="@/assets/images/paycard.png" alt />
          </label>
        </div>
        <div class="payment-content">
          <input
            type="checkbox"
            name="radio"
            class="input-check"
            v-model="payment.kaspi"
            @click="checkboxClick('kaspi')"
          />
          <label for>
            Kaspi
            <img src="@/assets/images/kaspi.png" alt />
          </label>
        </div>
      </div>
      <div class="payment-footer">
        <div class="col-xl-4 p-0 mt-5" v-show="payment.cash">
          <label for>Сдача с суммы</label>
          <input type="text" placeholder="20000 ₸" class="input-text" />
        </div>
        <div class="col-xl-12 p-0 mb-5" v-show="payment.kaspi">
          <div class="info-pay mt-5">
            <h5>Как оплатить через Kaspi</h5>
            <ul>
              <li>
                <p>1. Авторизуйтесь на сайте</p>
                <a href="#">
                  <b>kaspi.kz</b>
                </a>
              </li>
              <li>
                <p>
                  2. Перейдите в раздел
                  <b>«Платежи»</b>, далее введите в строке поиска
                  <b>«TapTatti»</b>.
                </p>
              </li>
              <li>
                <p>
                  3. В открывшейся форме укажите номер счета, или свой логин (e-mail) от Личного кабинета, сумму пополнения и нажмите кнопку
                  <b>«Продолжить»</b>.
                </p>
              </li>
            </ul>
            <h5>Как оплатить через мобильное приложение Kaspi</h5>
            <ul>
              <li>
                <p>
                  1. Авторизуйтесь в приложении
                  <b>«Kaspi.kz».</b>
                </p>
              </li>
              <li>
                <p>
                  2. Перейдите в раздел
                  <b>«Платежи»</b>, далее введите в строке поиска
                  <b>«TapTatti»</b>.
                </p>
              </li>
              <li>
                <p>
                  3. В открывшейся форме укажите номер счета, или свой логин (e-mail) от Личного кабинета, сумму пополнения и нажмите кнопку
                  <b>«Продолжить»</b>.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div class="textarea mt-5">
          <p>Комментарий к заказу для курьера</p>
          <textarea
            name
            id
            placeholder="Ваш комментарий увидит только курьер, когда заказ будет готов к доставке. Чтобы изменить ингредиенты, вернитесь в раздел меню."
          ></textarea>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data: () => ({
    show: false,
    payment: {
      cash: false,
      cardCourier: false,
      cardSait: false,
      kaspi: false
    },
    timeDelivery: {
      date: false,
      time: false
    },
    optionsDate: ["Сегодня", "18 июля", "19 июля", "20 июля", "21 июля"],
    optionsTime: [
      "17:45 – 18:00",
      "18:00 – 18:15",
      "18:15 – 18:30",
      "18:30 – 18:45",
      "18:45 – 19:00"
    ]
  }),
  methods: {
    checkboxClick(val) {
      for (var key in this.payment) {
        if (key !== val) {
          this.payment[key] = false;
        }
      }
    }
  },
  watch: {
    "payment.cash"(newval) {
      // console.log(newval);
    }
  }
};
</script>