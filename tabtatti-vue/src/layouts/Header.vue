<template>
  <div class="header-wrapper">
    <div class="header" id="header">
      <div class="container p-0">
        <div class="row">
          <div class="col-xl-3">
            <div class="header-mobile">
              <div class="burger" @click="mobileActive()" :class="{burgerActive}">
                <span></span>
              </div>
              <div class="logo">
                <router-link to="/">
                  <img src="../assets/images/logo.png" alt />
                </router-link>
              </div>
              <div class="mobile-cart">
                <i>
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    class="bi bi-cart2"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
                    />
                  </svg>
                  <span>3</span>
                </i>
              </div>
            </div>
          </div>
          <div class="col-xl-9 minus-m pl-0">
            <div class="nav">
              <ul class="nav-links">
                <li>
                  <a href="#">Магазин</a>
                </li>
                <li>
                  <a href="#">Акции</a>
                </li>
                <li>
                  <a href="#">Блоги</a>
                </li>
                <li>
                  <a href="#">О нас</a>
                </li>
                <li>
                  <a href="#">Контакты</a>
                </li>
              </ul>
              <div class="header-right">
                <ul>
                  <li class="city-select">
                    <i class="fas fa-map-marker-alt"></i>
                    <v-select
                      :options="options"
                      label="value"
                      :clearable="false"
                      v-model="selectCity"
                    ></v-select>
                  </li>
                  <li class="lang-select">
                    <v-select :options="lang" label="value" :clearable="false" v-model="selectlang"></v-select>
                  </li>
                  <li class="bonus-user dropdown" @click="showDrop" ref="dropdown-wrapper">
                    <svg
                      width="24"
                      height="29"
                      viewBox="0 0 24 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="user-icon"
                    >
                      <circle
                        cx="12.1406"
                        cy="7.33205"
                        r="5.51564"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M2 26.8164V22.9885C2 17.3879 6.54021 12.8477 12.1409 12.8477C17.7415 12.8477 22.2817 17.3879 22.2817 22.9885V26.8164"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <div>
                      <b>250</b>
                      <p>бонусы</p>
                    </div>
                    <div class="dropdown-menu" v-show="showDropdown">
                      <ul>
                        <li>
                          <img src="@/assets/icons/profile.svg" alt @click="profile = !profile" />
                          <a href="#">Профиль</a>
                        </li>
                        <li>
                          <img src="@/assets/icons/settings.svg" alt />
                          <a href="#">Настройки</a>
                        </li>
                        <li>
                          <img src="@/assets/icons/exit-profile.svg" alt />
                          <a href="#">Выход</a>
                        </li>
                      </ul>
                    </div>
                    <div class="dropdown-menu" v-show="profile">
                      <ul>
                        <li>
                          <img src="@/assets/icons/profile.svg" alt />
                          <a href="#">Профиль</a>
                        </li>
                        <li>
                          <img src="@/assets/icons/settings.svg" alt />
                          <a href="#">Настройки</a>
                        </li>
                        <li>
                          <img src="@/assets/icons/exit-profile.svg" alt />
                          <a href="#">Выход</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="basket-head dropdown">
                    <router-link to="/OrderBasket">
                      <img
                        svg-inline
                        svg-sprite
                        alt="Vue logo"
                        src="@/assets/icons/cart.svg"
                        class="vue-logo"
                      />
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="nav-mobile" :class="{activeMenu}">
            <div class="bonus-mobile">
              <div class="bonus-user">
                <img src="@/assets/icons/user.svg" alt />
                <div>
                  <b>250</b>
                  <p>бонусы</p>
                </div>
              </div>
            </div>
            <ul class="nav-mobile-top">
              <li class="city-select">
                <i class="fas fa-map-marker-alt"></i>
                <v-select :options="options" label="value" :clearable="false" v-model="selectCity"></v-select>
              </li>
              <li class="lang-select">
                <v-select :options="lang" label="value" :clearable="false" v-model="selectLang"></v-select>
              </li>
            </ul>
            <div class="title-link">
              <img src="@/assets/images/phone-call.png" alt />
              <a href="tel: +7 (777) 111 22 33">+7 (777) 111 22 33</a>
            </div>
            <ul class="nav-links">
              <li>
                <a href="#">Магазин</a>
              </li>
              <li>
                <a href="#">Акции</a>
              </li>
              <li>
                <a href="#">Блоги</a>
              </li>
              <li>
                <a href="#">О нас</a>
              </li>
              <li>
                <a href="#">Контакты</a>
              </li>
            </ul>
            <div class="btn-mobile-menu">
              <button class="btn-outline">
                <i class="fas fa-history"></i>История заказов
              </button>
              <button class="brown-btn">
                <img src="@/assets/images/cart.png" alt /> Корзина
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-nav">
      <div class="container">
        <div class="bottom-nav-content">
          <ul>
            <li>
              <a href="#">Торты</a>
            </li>
            <li>
              <a href="#">Пироги</a>
            </li>
            <li>
              <a href="#">Выпечка</a>
            </li>
            <li>
              <a href="#">Пирожное</a>
            </li>
            <li>
              <a href="#">Печенье</a>
            </li>
            <li>
              <a href="#">Полуфабрикаты</a>
            </li>
          </ul>
          <div class="call">
            <img src="@/assets/icons/phone-call.svg" alt />
            <a href="tel:+7 (777) 111 22 33">+7 (777) 111 22 33</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  data: () => ({
    showDropdown: false,
    activeClass: {
      type: String,
      default: "is-active"
    },
    offset: {
      type: Number,
      default: 20
    },
    activeMenu: false,
    burgerActive: false,
    OpenIndicator: {
      render: createElement =>
        createElement("span", { class: { toggle: true } })
    },
    selectCity: "Нур-Султан",
    selectlang: "Рус",
    options: ["Нур-Султан", "Алматы", "Шымкент"],
    lang: ["Рус", "Каз", "En"]
  }),
  methods: {
    showDrop() {
      this.showDropdown = !this.showDropdown;
    },
    mobileActive() {
      this.activeMenu = !this.activeMenu;
      this.burgerActive = !this.burgerActive;
    }
  },
  mounted() {
    let vm = this;
    document.addEventListener("click", function(e) {
      if (e.target != vm.$refs["dropdown-wrapper"]) {
        vm.showDropdown = false
      }
    });
  }
};
</script>



