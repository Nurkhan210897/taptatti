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
                  <li class="dropdown-main" ref="dropdown-wrapper">
                    <div
                      class="bonus-user"
                      @click.prevent="showDropdown.profile = !showDropdown.profile"
                    >
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
                      <div class="bonus-count">
                        <b>250</b>
                        <p>бонусы</p>
                      </div>
                    </div>

                    <div class="dropdown-menu-header" v-if="showDropdown.showUser">
                      <ul>
                        <li>
                          <img src="@/assets/icons/profile.svg" alt />
                          <a @click.prevent="showDropdown.profile = !showDropdown.profile">Профиль</a>
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
                    <div class="profile" v-show="showDropdown.profile">
                      <div class="profile-header">
                        <div class="tabs-btn">
                          <a
                            href="#"
                            @click="tabRegist('signIn')"
                            :class="{activeTab: showDropdown.signIn}"
                          >Войти</a>
                          <a
                            href="#"
                            @click="tabRegist('regist')"
                            :class="{activeTab: showDropdown.regist}"
                          >Регистрация</a>
                        </div>
                      </div>
                      <div class="profile-content" v-if="showDropdown.signIn">
                        <form action>
                          <label for>Номер телефона</label>
                          <div class="input-num">
                            <img src="@/assets/images/flag.png" alt />
                            <input
                              type="tel"
                              v-mask="'+#(###) ###-##-##'"
                              placeholder="+7 (___) ___ __ __"
                              class="input-text"
                            />
                          </div>
                          <label for>Пароль</label>
                          <div class="input-pass">
                            <input type="password" placeholder="・・・" class="input-text" />
                            <a href="#" @click="restorePassword">Восстановить пароль</a>
                          </div>

                          <input type="submit" class="btn brown-btn" />
                        </form>
                      </div>
                      <div class="profile-content" v-if="showDropdown.regist">
                        <form action>
                          <label for>Ваше имя</label>
                          <div class="input-num">
                            <input type="text" placeholder="Как Вас зовут?" class="input-text" />
                          </div>
                          <label for>Номер телефона</label>
                          <div class="input-num">
                            <img src="@/assets/images/flag.png" alt />
                            <input type="text" placeholder="Как Вас зовут?" class="input-text" />
                          </div>
                          <label for>Пароль</label>
                          <div class="input-pass">
                            <input type="password" placeholder class="input-text" />
                          </div>
                          <label class="label-date" for>
                            Дата рождения
                            <img src="@/assets/images/info.png" alt />
                          </label>
                          <div class="input-num">
                            <input type="date" class="input-text" />
                          </div>
                          <input type="submit" class="btn brown-btn" />
                        </form>
                      </div>
                    </div>
                    <div class="restore-password profile" v-if="showDropdown.restorePassword">
                      <form action>
                        <label for>Номер телефона</label>
                        <div class="input-num">
                          <img src="@/assets/images/flag.png" alt />
                          <input
                            type="tel"
                            v-mask="'+#(###) ###-##-##'"
                            placeholder="+7 (___) ___ __ __"
                            class="input-text"
                          />
                        </div>
                        <div class="input-pass">
                          <a
                            href="#"
                            @click="showDropdown.restorePassword && showDropdown.profile"
                          >Я вспомнил пароль!</a>
                        </div>

                        <input type="submit" class="btn brown-btn" value="Восстановить пароль" />
                      </form>
                    </div>
                  </li>
                  <li class="basket-head dropdown">
                    <img
                      svg-inline
                      svg-sprite
                      alt="Vue logo"
                      src="@/assets/icons/cart.svg"
                      class="vue-logo"
                      @click="showHeaderBasket=!showHeaderBasket"
                    />
                    <div class="dropdown-basket profile" v-if="showHeaderBasket">
                    {{test}}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="nav-mobile" :class="{activeMenu}">
            <div class="bonus-mobile">
              <div class="bonus-user">
                <img src="@/assets/icons/user.svg" alt />
                <div class="bonus-count">
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
                <v-select :options="lang" label="value" :clearable="false"></v-select>
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
              <a href="#1">Торты</a>
            </li>
            <li>
              <a href="#2">Пироги</a>
            </li>
            <li>
              <a href="#3">Выпечка</a>
            </li>
            <li>
              <a href="#4">Пирожное</a>
            </li>
            <li>
              <a href="#5">Печенье</a>
            </li>
            <li>
              <a href="#6">Полуфабрикаты</a>
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
import Basket from "@/components/Basket.vue";

export default {
  components:{
    Basket
  },
  data: () => ({
    test:"test",
    showHeaderBasket:false,
    showDropdown: {
      showUser: false,
      showBasket: false,
      profile: false,
      signIn: true,
      regist: false,
      restorePassword: false
    },
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
    restorePassword() {
      this.showDropdown.restorePassword = true;
      this.showDropdown.profile = false;
    },
    mobileActive() {
      this.activeMenu = !this.activeMenu;
      this.burgerActive = !this.burgerActive;
    },
    tabRegist(val) {
      if(val==='signIn'){
        this.showDropdown.signIn=true;
        this.showDropdown.regist=false;
      }else{
        this.showDropdown.signIn=false;
        this.showDropdown.regist=true;
      }
    }
  }
};
</script>



