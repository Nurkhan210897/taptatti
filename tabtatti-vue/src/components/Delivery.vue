<template>
  <div class="row">
    <div class="col-xl-4">
      <label for>Улица *</label>
      <div class="input-num">
        <input type="text" placeholder="Гоголя" class="input-text" />
      </div>
    </div>
    <div class="col-xl-4">
      <label for>Дом *</label>
      <div class="input-num">
        <input type="text" class="input-text" />
      </div>
    </div>
    <div class="col-xl-4">
      <label for>Квартира / Офис *</label>
      <div class="input-num">
        <input type="text" class="input-text" />
      </div>
    </div>
    <div class="col-xl-12">
      <div class="map">
        <div class="dropdown-btn" @click="show = !show">
          <img src="@/assets/images/target.png" alt />
          <p>Уточнить на карте</p>
          <i class="fas fa-chevron-down" :class="{'active-dropdown': show }"></i>
        </div>
        <div class="map-content" v-if="show">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A71c9646c6ed33b21286a06e1a232ffa0470c998bfeaeac6e58b48efc8021b52b&amp;source=constructor"
            width="100%"
            height="250"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </div>
    <div class="dropdown-btn col-xl-12" @click="show = !show">
      <img src="@/assets/images/target.png" alt />
      <p>Указать домофон и подьъезд</p>
      <i class="fas fa-chevron-down" :class="{'active-dropdown': show }"></i>
    </div>
    <div class="col-xl-12" v-if="show">
      <div class="row">
        <div class="col-xl-4">
          <label for>Домофон</label>
          <div class="input-num">
            <input type="text" class="input-text" placeholder="58" />
          </div>
        </div>
        <div class="col-xl-4">
          <label for>Подъезд</label>
          <div class="input-num">
            <input type="text" class="input-text" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: false,
    rotate: 180
  })
};
</script>