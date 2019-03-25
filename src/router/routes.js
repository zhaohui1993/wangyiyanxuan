/**
 * Created by Administrator on 2019/3/8.
 */

import Cart from '../pages/Cart/Cart.vue'
import Catagory from '../pages/Catagory/Catagory.vue'
import Home from '../pages/Home/Home.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Recommend from '../pages/Recommend/Recommend.vue'
import LoginMethods from '../pages/loginMethods/loginMethods.vue'
import Tab from '../pages/Recommend/tab.vue'

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
    children :[{
      path: '/recommend/tab/:id',
      component: Tab,
      meta: {
        showFooter: true
      }
    },
      //重定向
      {
        path: '/',
        redirect: '/recommend/tab/0'
      }
    ],
    meta: {
      showFooter: true
    }
  },
  {
    path:'/search',
    component: Search
  },
  {
    path:'/login/:id',
    component:LoginMethods
  },
  {
    path:'/',
    redirect: '/home'
  }
]
