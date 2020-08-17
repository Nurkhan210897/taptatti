<template>
  <div>
    <div class="pickup-regulations">
      <p>Пожалуйста, обратите внимание на особые правила самовывоза, указанные на двери магазинов</p>
    </div>
    <div class="pickup-content">
      <div class="pickup-info">
        <div class="title">
          <p>Выберите магазин из списка</p>
          <img
            src="@/assets/images/info.png"
            alt
            @mouseenter="show=!false"
            @mouseleave="show = false"
          />
          <div v-if="show">
            <div class="tooltip-product">
              <p>Vivamus vel lectus sit porta mus a faucibus. Volutpat sem arcu.</p>
            </div>
          </div>
        </div>
        <button class="btn-outline" type="button">
          <i class="fas fa-map-marker-alt"></i> Выбрать на карте
        </button>
      </div>
      <div class="pickup-shops row">
        <div
          class="pickup-check col-xl-4"
          v-for="item in shops"
          :key="item.title"
          :class="{active: item.type == false}"
        >
          <input type="checkbox"  class="input-check"/>
          <div class="pickup-shops-info">
            <b>{{ item.title }}</b>
            <p>{{ item.deskr }}</p>
            <p>{{ item.time }}</p>
          </div>
        </div>
        <ul>
          <li>
            <p>
              <span>
                <i class="fas fa-circle"></i>
              </span> Все товары из заказа в наличии с запасом
            </p>
          </li>
          <li>
            <p>
              <span>
                <i class="fas fa-circle"></i>
              </span> Некоторые товары из заказа последние
            </p>
          </li>
          <li>
            <p>
              <span>
                <i class="fas fa-circle"></i>
              </span> На сегодня нет в наличии
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data: () => ({
    show: false,
    shops: [
      {
        title: "TapTatti №1",
        deskr: "г.Алматы, пр.Сейфуллина, 182В",
        time: "9:00 – 18:00",
        type: true
      },
      {
        title: "TapTatti №2",
        deskr: "г.Алматы, ул. Тимирязева, 38/1",
        time: "9:00 – 18:00",
        type: true
      },
      {
        title: "TapTatti №3",
        deskr: "г.Алматы, пр.Сейфуллина, 182В",
        time: "9:00 – 18:00",
        type: false
      },
      {
        title: "TapTatti №4",
        deskr: "г.Алматы, пр.Сейфуллина, 182В",
        time: "9:00 – 18:00",
        type: true
      },
      {
        title: "TapTatti №5",
        deskr: "г.Алматы, пр.Сейфуллина, 182В",
        time: "9:00 – 18:00",
        type: true
      },
      {
        title: "TapTatti №6",
        deskr: "г.Алматы, пр.Сейфуллина, 182В",
        time: "9:00 – 18:00",
        type: true
      }
    ]
  })
};
</script>