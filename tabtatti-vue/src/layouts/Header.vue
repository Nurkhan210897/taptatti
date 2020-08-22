<template>
  <div class="header">
    <div class="container p-0">
      <div class="row">
        <div class="col-xl-3">
          <div class="logo">
            <img src="../assets/images/logo.png" alt />
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
                      <img src="@/assets/images/cart.png" alt="">
                   </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  data: () => ({
    OpenIndicator: {
      render: createElement =>
        createElement("span", { class: { toggle: true } })
    },

    options: ["Нур-Султан", "Алматы", "Шымкент"],
    lang: ["Рус", "Каз", "En"]
  })
};
</script>



