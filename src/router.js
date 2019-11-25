import Vue from 'vue';
import Router from 'vue-router';
import Elproblema from './views/Elproblema.vue';
import firebase from 'firebase';
Vue.use(Router);

const router= new Router({
  routes: [
    {
      path: '/elproblema',
      name: 'Elproblema',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Elproblema.vue'),
      
    },
    {
      path: '/alcomprar',
      name: 'Comprar',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Comprar.vue'),
    },
    {
      path: '/alcomer',
      name: 'Comer',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Comer.vue'),
    },
    {
      path: '/aldesechar',
      name: 'Desechar',
      component: () => import(/* webpackChunkName: "about" */ './views/Desechar.vue'),
    },
    {
      path: '/misaportes',
      name: 'Aportes',
      component: () => import(/* webpackChunkName: "about" */ './views/Aportes.vue'),
      meta: {
        requiresAuth:  true
      }
    },
    {
      path: '',
      name: 'Home',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Home.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Login.vue'),
    },
    {
      path: '/signin',
      name: 'Signin',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Signin.vue'),
    },
    
  ],
});

router.beforeEach((to,from,next) =>{

  if(to.matched.some(ruta=>ruta.meta.requiresAuth)){
    const user = firebase.auth().currentUser;
    if (user){
      next();
    }else{
      next({
        name: 'Login'
      })
    }
  } else{
    next();
  }
})

export default router