import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vSelect from 'vue-select'
import VueTheMask from 'vue-the-mask'
import Multiselect from 'vue-multiselect'
import VueSlickCarousel from 'vue-slick-carousel'
import VueScrollactive from 'vue-scrollactive';
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'


Vue.use(VueTheMask)

Vue.use(VueScrollactive);
Vue.component('multiselect', Multiselect)
Vue.component('VueSlickCarousel', VueSlickCarousel);

Vue.config.productionTip = false

Vue.component('v-select', vSelect)
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')


// script




let bottomNav = document.querySelector('.bottom-nav');
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY >= 100) {
        bottomNav.style.transform = "translateY(0)";
    } else {
        bottomNav.style.transform = "translateY(-200%)";
    }
})

// let showModal = document.querySelectorAll('.show-modal');
// for (let i in showModal) {
//     showModal[i].addEventListener('click', function() {
//         document.body.style.overflowY = "hidden"
//     })
// }


let exitModal = document.querySelector('.exit')
exitModal.addEventListener('click', function() {
    console.log('exit');
    document.body.style.overflowY = "inherit"
})