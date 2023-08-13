import { createRouter, createWebHistory } from 'vue-router'
  import AccueilView from '@/views/AcceuilView.vue'
import PlanificationView from '@/views/PlanificationView.vue'
import DepensesView from '@/views/DepensesView.vue'  
import SignupView from '@/views/SignupView.vue'
import HomeView from '@/views/HomeView.vue'
import SigninView from '@/views/SigninView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  
     {
      path:'/signin',
      name: 'signin',
      component: SigninView
    },
    {
      path:'/signup',
      name: 'signup',
      component: SignupView
    } ,

       {
      path: '/accueil',
      name: 'accueil',
      component: AccueilView
    },
    {
      path: '/depenses',
      name: 'Depenses',
      component: DepensesView
    },
    {
      path: '/pLanification',
      name: 'Planification',
      component: PlanificationView
    },
    {
      path:'/',
      name:'home',
      component:HomeView
    }
  
   ]
})
 

router.beforeEach((to, form, next) => {
  const token = localStorage.getItem("access_token");
  const loggedIn= localStorage.getItem("user");
  if(to.path == "/signin" && token) {
    return next("/")
  }
  
  const publicPages= [
    "/signin",
    "/signup",
    "/"
    
  ]
  var isMatched = to.matched && publicPages.includes(to.matched[0].path);
  console.log(isMatched);
  console.log(to.matched[0].path);

  const authRequired = !publicPages.includes(to.path) && !isMatched;

  if(authRequired && !loggedIn) {
    next("/signin");
  }else{
    return next();
  }
  
})
export default router
