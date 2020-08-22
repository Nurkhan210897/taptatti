<template>
  <div class="header">
    <div class="container p-0">
      <div class="row">
        <div class="col-xl-3">
          <div class="header-mobile">
            <div class="burger" @click="mobileActive()" :class="{burgerActive}">
              <span></span>
            </div>
            <div class="logo">
              <img src="../assets/images/logo.png" alt />
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
                  <v-select :options="options" :clearable="false"></v-select>
                </li>
                <li class="lang-select">
                  <v-select :options="lang" :clearable="false"></v-select>
                </li>
                <li class="bonus-user">
                  <img src="@/assets/images/user.png" alt />
                  <div>
                    <b>250</b>
                    <p>бонусы</p>
                  </div>
                </li>
                <li class="basket-head">
                  <a href="#">
                    <img src="@/assets/images/cart.png" alt />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="nav-mobile" :class="{activeMenu}">
          <div class="bonus-mobile">
            <div class="bonus-user">
              <img src="@/assets/images/user.png" alt />
              <div>
                <b>250</b>
                <p>бонусы</p>
              </div>
            </div>
          </div>
          <ul class="nav-mobile-top">
            <li class="city-select">
              <i class="fas fa-map-marker-alt"></i>
              <v-select :options="options" :clearable="false"></v-select>
            </li>
            <li class="lang-select">
              <v-select :options="lang" :clearable="false"></v-select>
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
</template>



<script>
export default {
  data: () => ({
    activeMenu: false,
    burgerActive: false,
    OpenIndicator: {
      render: createElement =>
        createElement("span", { class: { toggle: true } })
    },
    options: ["Нур-Султан", "Алматы", "Шымкент"],
    lang: ["Рус", "Каз", "En"]
  }),
  methods: {
    mobileActive() {
      this.activeMenu = !this.activeMenu;
      this.burgerActive = !this.burgerActive;
    }
  }
};
</script>



