import Vue from 'vue'
import App from './App.vue'
import List from "./components/List";

Vue.config.productionTip = false;
Vue.filter('uppercase', (value) => value.toUpperCase());
Vue.component('app-list', List);
Vue.mixin({
    beforeCreate() {
        console.log('beforeCreate');
    }
});

new Vue({
    render: h => h(App),
}).$mount('#app');
