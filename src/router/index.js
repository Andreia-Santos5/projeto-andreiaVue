import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignInView from '../views/SignInView.vue'
import SignUpView from '../views/SignUpView.vue'
import ContactusView from '../views/ContactusView.vue'
import TropicalFruitsView from '../views/TropicalFruitsView.vue'
import RecipesView from '../views/RecipesView.vue'
import AdminView from '../views/AdminView.vue'
import PathNotFound from '../views/404View.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignInView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpView
  },

  {
    path: '/contactus',
    name: 'contactus',
    component: ContactusView
  },
  {
    path: '/tropicalfruits',
    name: 'tropicalfruits',
    component: TropicalFruitsView
  },
  {
    path: '/recipes',
    name: 'recipes',
    component: RecipesView
  },
  {
    path: '/manage',
    name: 'manage',
    component: AdminView
  },
  {
    path: '/:pathMatch(.)',
    component: PathNotFound
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
