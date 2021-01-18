//import vue and dependency
import Vue from 'vue';
import VueRouter from 'vue-router';

//components
import PhotoList from './pages/PhotoList';
import Login from './pages/Login';

//use
Vue.use(VueRouter);

//route definition
const routes = [{
        path: '/',
        component: PhotoList
    },
    {
        path: '/login',
        component: Login
    }
];

//create router instance
const router = new VueRouter({
    mode: 'history',
    routes
});

//export router to ./app.js
export default router;