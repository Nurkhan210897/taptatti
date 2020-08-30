import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vSelect from 'vue-select'
import VueTheMask from 'vue-the-mask'
import Multiselect from 'vue-multiselect'
import VueSlickCarousel from 'vue-slick-carousel'
import VueScrollactive from 'vue-scrollactive';
import Vuelidate from 'vuelidate'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

Vue.use(Vuelidate)
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
// const ratingItemList = document.querySelectorAll('.star-item');
// const ratingItemArray = Array.prototype.slice.call(ratingItemList);
// ratingItemArray.forEach(item =>
//     item.addEventListener('click', () => {
//         const { itemValue } = item.dataset
//         item.parentNode.dataset.totalValue = itemValue
//     })
// )
// ratingItemArray.forEach(item =>
//     item.addEventListener('click', () =>
//         item.parentNode.dataset.totalValue = item.dataset.itemValue
//     )
// )

let bottomNav = document.querySelector('.bottom-nav');
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY >= 100) {
        bottomNav.style.transform = "translateY(0)";
    } else {
        bottomNav.style.transform = "translateY(-200%)";
    }
})


var mutationObserver = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {});
    let exitModal = document.querySelector('.exit')
    exitModal.addEventListener('click', function() {
        document.body.style.overflowY = "inherit"
    });
});
mutationObserver.observe(document.documentElement, {
    childList: true,
    subtree: true,
    characterDataOldValue: true
});

let showModal = document.querySelectorAll('.show-modal');
for (let i in showModal) {
    showModal[i].addEventListener('click', function() {
        document.body.style.overflowY = "hidden"
    })
}