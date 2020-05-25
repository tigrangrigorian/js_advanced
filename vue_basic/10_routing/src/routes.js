import VueRouter from 'vue-router';
import Home from './pages/Home';
// import Cars from './pages/Cars'
import Car from './pages/Car'
import CarFull from './pages/CarFull'
import Error from "./pages/Error";

const Cars = () => import('./pages/Cars');



export default new VueRouter({
    routes: [
        {
            path: '',
            component: Home
        },
        {
            path: '/cars',
            component: Cars,
            name: 'cars'
        },
        {
            path: '/car/:id',
            component: Car,
            children: [
                {
                    path: 'full', //localhost:8080/car/id/full
                    component: CarFull,
                    name: 'carFull',
                    beforeEnter(to, from, next) {
                        console.log("before enter");
                        if (true) {
                            next(true)
                        } else {
                            next(false)
                        }
                    }
                }
            ]
        },
        {
            path: '/none',
            redirect: {
                name: 'cars'
            }
        },
        {
            path: '*',
            component: Error
        }
    ],
    mode: 'history',
    scrollBehavior(to,from,savedPosition) {

        if (savedPosition) {
            return savedPosition
        }

        if (to.hash) {
            return {
                selector: to.hash
            }
        }
        return {
            x: 0,
            y: 0
        }
    }
})
