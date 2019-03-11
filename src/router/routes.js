/**
 * Created by Administrator on 2019/3/8.
 */

import Cart from '../pages/Cart/Cart.vue'
import Catagory from '../pages/Catagory/Catagory.vue'
import Home from '../pages/Home/Home.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'
import Recommend from '../pages/Recommend/Recommend.vue'
// import CatagoryList from '../pages/Catagory/catagoryList.vue'

export default [
  {
    path:'/cart',
    component: Cart,
    meta: {
      showFooter: true
    }
  },
  {
    path:'/catagory',
    component: Catagory,
    meta: {
      showFooter: true
    }
  },
  {
    path:'/home',
    component: Home,
    meta: {
      showFooter: true
    }
  },
  {
    path:'/profile',
    component: Profile
  },
  {
    path:'/recommend',
    component: Recommend,
    meta: {
      showFooter: true
    }
  },
  {
    path:'/search',
    component: Search
  },
  {
    path:'/login',
    component: Login
  },
  {
    path:'/',
    redirect: '/home'
  }
]
