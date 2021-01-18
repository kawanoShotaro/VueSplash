require('./bootstrap');

//import vue and router and App

import Vue from 'vue';
import router from './router';
import App from './App.vue';

//create vue instance
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App />'
});