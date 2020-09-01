import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const mutations = {
    PUSH_TO_CART(state, product) {
        state.cart.push(product)
    },
    SET_MODAL_PRODUCT(state, product) {
        state.modalProduct = product
    },
    REMOVE_FROM_CART(state, index) {
        state.cart.splice(index, 1)
    },
    REMOVE_ALL_CART(state) {
        state.cart = []
    },
    SHOW_MODAL(state, name) {
        state.showModal = name
    }
}

const state = {
    cart: [],
    modalProduct: null,
    sliderNewProduct: [],
    showModal: null,
    products: [{
            title: "Торты",
            id: "1",

            ProductCategory: [
                "Сливочный",
                "Шоколадный",
                "Творожный",
                "Новинки",
                "Хит",
                "Без маргарина",
                "Низкокалорийный",
                "Натуральные сливочные"
            ],
            productsContent: [{
                    id: 1,
                    count: 1,
                    hit: require("@/assets/icons/hit.svg"),
                    img: require("@/assets/images/product1.png"),
                    title: "Молочная девочка",
                    tooltipHit: "Хит",
                    price: 4500,
                    description: "Круглый торт, состоит из 2 слоев бисквита пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
                    Composition: "Яйцо, Сахар, Сметана, Сливочное масло, Ванильный сахар, Пшеничная мука, Крем безе, Банан.",
                    energyValue: 289.0,
                    Protein: 9.1,
                    Fats: 9.9,
                    Carbohydrates: 30.3,
                    Weight: 390,
                    Diameter: 25,
                    Height: 8 - 8.5,
                    StoragePeriod: 5,
                    StorageConditions: "В холодильнике при температуре от +2 до +6 °С"
                },
                {
                    id: 2,
                    count: 1,
                    new: require("@/assets/icons/new.svg"),
                    clock: require("@/assets/icons/time.svg"),
                    img: require("@/assets/images/product2.png"),
                    title: "Whoopie",
                    tooltipNew: "Новинка",
                    tooltipClock: "Время",
                    price: 4850,
                    description: "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
                    Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
                },
                {
                    id: 3,
                    count: 1,
                    img: require("@/assets/images/product3.png"),
                    title: "Медовый",
                    price: 3000,
                    description: "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
                    Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
                },
                {
                    id: 4,
                    count: 1,
                    img: require("@/assets/product-img/product4.png"),
                    clean: require("@/assets/icons/green.svg"),
                    tooltipGreen: "Вегетарианский",
                    title: "Сникерс",
                    price: 13700,
                    description: "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
                    Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
                },
                {
                    id: 5,
                    count: 1,
                    img: require("@/assets/product-img/product5.png"),
                    noMargarin: require("@/assets/icons/yellow.svg"),
                    tooltipYellow: "Без маргарина",
                    title: "Красный бархат",
                    price: 2500,
                    description: "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
                    Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
                },
                {
                    count: 1,
                    img: require("@/assets/product-img/product6.png"),
                    noMargarin: require("@/assets/icons/yellow.svg"),
                    clean: require("@/assets/icons/green.svg"),
                    tooltipYellow: "Без маргарина",
                    tooltipGreen: "Вегетарианский",
                    title: "Чизкейк New York",
                    price: 2500,
                    description: "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
                    Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
                },
                {
                    count: 1,
                    img: require("@/assets/product-img/product7.png"),
                    title: "Шпинатный",
                    price: 13700,
                    description: "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
                    Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
                },
                {
                    count: 1,
                    img: require("@/assets/product-img/product8.png"),
                    title: "Морковный",
                    price: 2500,
                    description: "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
                    Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
                },
                {
                    count: 1,
                    img: require("@/assets/product-img/product9.png"),
                    title: "Тирамису",
                    price: 1800,
                    description: "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
                    Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
                },
                {
                    count: 1,
                    img: require("@/assets/product-img/product10.png"),
                    title: "Тирамису Фундук",
                    price: 2500,
                    description: "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
                    Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
                },
                {
                    count: 1,
                    img: require("@/assets/product-img/product11.png"),
                    title: "Тирамису Шоколад",
                    price: 2500,
                    description: "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
                    Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
                },
                {
                    count: 1,
                    img: require("@/assets/product-img/product12.png"),
                    title: "Тирамису Апельсин",
                    price: 1800,
                    description: "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
                    Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
                }
            ]
        },
        {
            title: "Пироги",
            id: "2",

            ProductCategory: [
                "С курицей",
                "Вегетрианский",
                "Острый",
                "С мясом",
                "Хит",
                "Соус",
                "Фруктовый",
                "Сливочный"
            ],
            productsContent: [{
                    count: 1,
                    hit: require("@/assets/icons/hit.svg"),
                    img: require("@/assets/product-img/product13.png"),
                    title: "Фруктовый (большой)",
                    price: 13700,
                    description: "Круглый торт, состоит из 2 слоев бисквита пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
                    Composition: "Яйцо, Сахар, Сметана, Сливочное масло, Ванильный сахар, Пшеничная мука, Крем безе, Банан.",
                    energyValue: 289.0,
                    Protein: 9.1,
                    Fats: 9.9,
                    Carbohydrates: 30.3,
                    Weight: 390,
                    Diameter: 25,
                    Height: 8 - 8.5,
                    StoragePeriod: 5,
                    StorageConditions: "В холодильнике при температуре от +2 до +6 °С"
                },
                {
                    count: 1,
                    new: require("@/assets/icons/new.svg"),
                    clock: require("@/assets/icons/time.svg"),
                    img: require("@/assets/product-img/product14.png"),
                    title: "Фруктовый (маленький)",
                    price: 2500,
                    description: "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
                    Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
                },
                {
                    count: 1,
                    img: require("@/assets/product-img/product15.png"),
                    title: "Пирамида",
                    price: 1800,
                    description: "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
                    Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
                },
                {
                    count: 1,
                    img: require("@/assets/product-img/product16.png"),
                    clean: require("@/assets/icons/green.svg"),
                    title: "Финский яблочный",
                    price: 13700,
                    description: "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
                    Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
                },
                {
                    count: 1,
                    img: require("@/assets/product-img/product17.png"),
                    noMargarin: require("@/assets/icons/yellow.svg"),
                    title: "Яблочный",
                    price: 2500,
                    description: "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
                    Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
                },
                {
                    count: 1,
                    img: require("@/assets/product-img/product18.png"),
                    noMargarin: require("@/assets/icons/yellow.svg"),
                    clean: require("@/assets/icons/green.svg"),
                    title: "Творожный (большой)",
                    price: 1800,
                    description: "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
                    Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
                },
                {
                    count: 1,
                    img: require("@/assets/product-img/product18.png"),
                    title: "Творожный (средний)",
                    price: 13700,
                    description: "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
                    Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
                },
                {
                    count: 1,
                    img: require("@/assets/product-img/product20.png"),
                    title: "Творожный (маленький)",
                    price: 2500,
                    description: "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
                    Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
                },
                {
                    count: 1,
                    img: require("@/assets/product-img/product21.png"),
                    title: "Зебра ",
                    price: 1800,
                    description: "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
                    Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
                },
                {
                    count: 1,
                    img: require("@/assets/product-img/product22.png"),
                    title: "Мясной (говядина)",
                    price: 13700,
                    description: "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
                    Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
                },
                {
                    count: 1,
                    img: require("@/assets/product-img/product22.png"),
                    title: "Мясной (курица)",
                    price: 2500,
                    description: "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
                    Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
                },
                {
                    count: 1,
                    img: require("@/assets/product-img/product23.png"),
                    title: "Слоеный пирог (с мясом)",
                    price: 1800,
                    description: "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
                    Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
                }
            ]
        },
        {
            title: "Выпечка",
            id: "3",
            ProductCategory: [
                "С курицей",
                "Вегетрианский",
                "Острый",
                "С мясом",
                "Хит",
                "Соус",
                "Фруктовый",
                "Сливочный"
            ],
            productsContent: [{
                    count: 1,
                    hit: require("@/assets/icons/hit.svg"),
                    img: require("@/assets/product-img/product24.png"),
                    title: "Самса с мясом",
                    price: 13700,
                    description: "Круглый торт, состоит из 2 слоев бисквита пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
                    Composition: "Яйцо, Сахар, Сметана, Сливочное масло, Ванильный сахар, Пшеничная мука, Крем безе, Банан.",
                    energyValue: 289.0,
                    Protein: 9.1,
                    Fats: 9.9,
                    Carbohydrates: 30.3,
                    Weight: 390,
                    Diameter: 25,
                    Height: 8 - 8.5,
                    StoragePeriod: 5,
                    StorageConditions: "В холодильнике при температуре от +2 до +6 °С"
                },
                {
                    count: 1,
                    new: require("@/assets/icons/new.svg"),
                    clock: require("@/assets/icons/time.svg"),
                    img: require("@/assets/product-img/product25.png"),
                    title: "Самса с курицей",
                    price: 2500,
                    description: "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
                    Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
                },
                {
                    count: 1,
                    img: require("@/assets/product-img/product26.png"),
                    title: "Борек с мясом",
                    price: 1800,
                    description: "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
                    Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
                },
                {
                    count: 1,
                    img: require("@/assets/product-img/product27.png"),
                    noMargarin: require("@/assets/icons/yellow.svg"),
                    title: "Борек с картошкой",
                    price: 2500,
                    description: "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
                    Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
                },
                {
                    count: 1,
                    img: require("@/assets/product-img/product28.png"),
                    noMargarin: require("@/assets/icons/yellow.svg"),
                    clean: require("@/assets/icons/green.svg"),
                    title: "Кекс мясной",
                    price: 1800,
                    description: "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
                    Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
                },
                {
                    count: 1,
                    img: require("@/assets/product-img/product29.png"),
                    title: "Токаш с картошкой",
                    price: 13700,
                    description: "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
                    Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
                },
                {
                    count: 1,
                    img: require("@/assets/product-img/product30.png"),
                    title: "Токаш с капустой",
                    price: 2500,
                    description: "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
                    Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
                },
                {
                    count: 1,
                    img: require("@/assets/product-img/product31.png"),
                    title: "Токаш с сыром ",
                    price: 1800,
                    description: "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
                    Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
                },
                {
                    count: 1,
                    img: require("@/assets/product-img/product32.png"),
                    title: "Булочки ",
                    price: 1800,
                    description: "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
                    Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
                },
                {
                    count: 1,
                    img: require("@/assets/product-img/product33.png"),
                    title: "Бауырсаки",
                    price: 1800,
                    description: "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
                    Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
                }
            ]
        },
        {
            title: "Пирожное",
            id: "4",
            ProductCategory: [
                "С курицей",
                "Вегетрианский",
                "Острый",
                "С мясом",
                "Хит",
                "Соус",
                "Фруктовый",
                "Сливочный"
            ],
            productsContent: [{
                    count: 1,
                    hit: require("@/assets/icons/hit.svg"),
                    img: require("@/assets/product-img/product34.png"),
                    title: "Капкейк",
                    price: 13700,
                    description: "Круглый торт, состоит из 2 слоев бисквита пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
                    Composition: "Яйцо, Сахар, Сметана, Сливочное масло, Ванильный сахар, Пшеничная мука, Крем безе, Банан.",
                    energyValue: 289.0,
                    Protein: 9.1,
                    Fats: 9.9,
                    Carbohydrates: 30.3,
                    Weight: 390,
                    Diameter: 25,
                    Height: 8 - 8.5,
                    StoragePeriod: 5,
                    StorageConditions: "В холодильнике при температуре от +2 до +6 °С"
                },
                {
                    count: 1,
                    new: require("@/assets/icons/new.svg"),
                    clock: require("@/assets/icons/time.svg"),
                    img: require("@/assets/product-img/product35.png"),
                    title: "Картошка",
                    price: 2500,
                    description: "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
                    Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
                },
                {
                    count: 1,
                    img: require("@/assets/product-img/product36.png"),
                    title: "Красный бархат",
                    price: 1800,
                    description: "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
                    Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
                },
                {
                    count: 1,
                    img: require("@/assets/product-img/product37.png"),
                    noMargarin: require("@/assets/icons/yellow.svg"),
                    title: "Фруктовая корзина",
                    price: 2500,
                    description: "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
                    Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
                },
                {
                    count: 1,
                    img: require("@/assets/product-img/product38.png"),
                    noMargarin: require("@/assets/icons/yellow.svg"),
                    clean: require("@/assets/icons/green.svg"),
                    title: "Фруктовая корзина 2",
                    price: 1800,
                    description: "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
                    Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
                }
            ]
        },
        {
            id: "5",
            title: "Печенье",
            ProductCategory: [
                "С курицей",
                "Вегетрианский",
                "Острый",
                "С мясом",
                "Хит",
                "Соус",
                "Фруктовый",
                "Сливочный"
            ],
            productsContent: [{
                    count: 1,
                    hit: require("@/assets/icons/hit.svg"),
                    img: require("@/assets/product-img/product39.png"),
                    title: "Whoopie",
                    price: 13700,
                    description: "Круглый торт, состоит из 2 слоев бисквита пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
                    Composition: "Яйцо, Сахар, Сметана, Сливочное масло, Ванильный сахар, Пшеничная мука, Крем безе, Банан.",
                    energyValue: 289.0,
                    Protein: 9.1,
                    Fats: 9.9,
                    Carbohydrates: 30.3,
                    Weight: 390,
                    Diameter: 25,
                    Height: 8 - 8.5,
                    StoragePeriod: 5,
                    StorageConditions: "В холодильнике при температуре от +2 до +6 °С"
                },
                {
                    count: 1,
                    new: require("@/assets/icons/new.svg"),
                    clock: require("@/assets/icons/time.svg"),
                    img: require("@/assets/product-img/product40.png"),
                    title: "Шоколадные",
                    price: 2500,
                    description: "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
                    Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
                },
                {
                    count: 1,
                    img: require("@/assets/product-img/product41.png"),
                    title: "Финики с орехами",
                    price: 1800,
                    description: "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
                    Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
                },
                {
                    count: 1,
                    img: require("@/assets/product-img/product42.png"),
                    noMargarin: require("@/assets/icons/yellow.svg"),
                    title: "Творожные",
                    price: 2500,
                    description: "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
                    Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
                },
                {
                    count: 1,
                    img: require("@/assets/product-img/product43.png"),
                    noMargarin: require("@/assets/icons/yellow.svg"),
                    clean: require("@/assets/icons/green.svg"),
                    title: "Алагул",
                    price: 1800,
                    description: "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
                    Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
                },
                {
                    count: 1,
                    img: require("@/assets/product-img/product44.png"),
                    noMargarin: require("@/assets/icons/yellow.svg"),
                    clean: require("@/assets/icons/green.svg"),
                    title: "Лимонные",
                    price: 1800,
                    description: "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
                    Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
                },
                {
                    count: 1,
                    img: require("@/assets/product-img/product45.png"),
                    noMargarin: require("@/assets/icons/yellow.svg"),
                    clean: require("@/assets/icons/green.svg"),
                    title: "Ун курабие",
                    price: 1800,
                    description: "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
                    Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
                },
                {
                    count: 1,
                    img: require("@/assets/product-img/product46.png"),
                    noMargarin: require("@/assets/icons/yellow.svg"),
                    clean: require("@/assets/icons/green.svg"),
                    title: "Кунжутное",
                    price: 1800,
                    description: "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
                    Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
                },
                {
                    count: 1,
                    img: require("@/assets/product-img/product47.png"),
                    noMargarin: require("@/assets/icons/yellow.svg"),
                    clean: require("@/assets/icons/green.svg"),
                    title: "Курага с орехами",
                    price: 1800,
                    description: "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
                    Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
                },
                {
                    count: 1,
                    img: require("@/assets/product-img/product48.png"),
                    noMargarin: require("@/assets/icons/yellow.svg"),
                    clean: require("@/assets/icons/green.svg"),
                    title: "Рогалик сыр с картошкой",
                    price: 1800,
                    description: "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
                    Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
                }
            ]
        },
        {
            id: "6",
            title: "Полуфабрикаты",
            ProductCategory: [
                "С курицей",
                "Вегетрианский",
                "Острый",
                "С мясом",
                "Хит",
                "Соус",
                "Фруктовый",
                "Сливочный"
            ],
            productsContent: [{
                    count: 1,
                    hit: require("@/assets/icons/hit.svg"),
                    img: require("@/assets/product-img/product49.png"),
                    title: "Whoopie",
                    price: 13700,
                    description: "Круглый торт, состоит из 2 слоев бисквита пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
                    Composition: "Яйцо, Сахар, Сметана, Сливочное масло, Ванильный сахар, Пшеничная мука, Крем безе, Банан.",
                    energyValue: 289.0,
                    Protein: 9.1,
                    Fats: 9.9,
                    Carbohydrates: 30.3,
                    Weight: 390,
                    Diameter: 25,
                    Height: 8 - 8.5,
                    StoragePeriod: 5,
                    StorageConditions: "В холодильнике при температуре от +2 до +6 °С"
                },
                {
                    count: 1,
                    new: require("@/assets/icons/new.svg"),
                    clock: require("@/assets/icons/time.svg"),
                    img: require("@/assets/product-img/product49.png"),
                    title: "Шоколадные",
                    price: 2500,
                    description: "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
                    Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
                },
                {
                    count: 1,
                    img: require("@/assets/product-img/product49.png"),
                    title: "Финики с орехами",
                    price: 1800,
                    description: "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
                    Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
                },
                {
                    count: 1,
                    img: require("@/assets/product-img/product50.png"),
                    noMargarin: require("@/assets/icons/yellow.svg"),
                    title: "Творожные",
                    price: 2500,
                    description: "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
                    Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
                },
                {
                    count: 1,
                    img: require("@/assets/product-img/product50.png"),
                    noMargarin: require("@/assets/icons/yellow.svg"),
                    title: "Творожные",
                    price: 2500,
                    description: "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
                    Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
                },
                {
                    count: 1,
                    img: require("@/assets/product-img/product51.png"),
                    noMargarin: require("@/assets/icons/yellow.svg"),
                    title: "Творожные",
                    price: 2500,
                    description: "Whoopie торт, Whoopie из 2 Whoopie Whoopie пропитанный кофейно-молочным сиропом,   между слоями бисквита равномерно нанесен крем из творожного сыра.",
                    Composition: "Ванильный сахар, Пшеничная мука, Крем безе, Банан."
                }
            ]
        }
    ]
}

const actions = {
    PUSH_TO_CART({ commit }, product) {
        commit('PUSH_TO_CART', product)
    },
    REMOVE_FROM_CART({ commit }, index) {
        commit('REMOVE_FROM_CART', index)
    },
    REMOVE_ALL_CART({ commit }) {
        commit('REMOVE_ALL_CART')
    },
    SET_MODAL_PRODUCT({ commit }, product) {
        commit('SET_MODAL_PRODUCT', product)
    },
    SHOW_MODAL({ commit }, name) {
        commit('SHOW_MODAL', name)
    }

}

const getters = {
    getCart: state => () => state.cart,
    getProducts: state => () => state.products,
    getModalProduct: state => () => state.modalProduct,
    getModalName: state => () => state.showModal
}

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})