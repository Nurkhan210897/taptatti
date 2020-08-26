import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vSelect from 'vue-select'
import VueTheMask from 'vue-the-mask'
import Multiselect from 'vue-multiselect'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

Vue.use(VueTheMask)
Vue.component('multiselect', Multiselect)
Vue.component('VueSlickCarousel', VueSlickCarousel);
Vue.directive('scroll', {
    inserted: function(el, binding) {
        let f = function(evt) {
            if (binding.value(evt, el)) {
                window.removeEventListener('scroll', f)
            }
        }
        window.addEventListener('scroll', f)
    }
});

Vue.config.productionTip = false

Vue.component('v-select', vSelect)
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')

if (window.scrollY >= 300) {
    document.querySelectorAll("#header")
} else {
    console.log('<300')
}
console.log(window.scrollY)