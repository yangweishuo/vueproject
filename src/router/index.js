//引入路由模块
import Vue from 'vue'
import Router from 'vue-router'
//使用路由模块
Vue.use(Router)
import Home from '../components/home/Home'
import Login from '../components/login/Login'
import Register from '../components/login/Register'
import Search from '../components/search/Search'
import Detailed from '../components/home/detailedlist/Detailedlist'
import Dlist from '../components/home/detailedlist/Dlist'


export default new Router({
  routes: [
    {path: '/',redirect:'home'},
    {path: '/home', component:Home},
    {path: '/login', component:Login},
    {path: '/register', component:Register},
    {path: '/search', component:Search},
    {path: '/detailedlist',component:Detailed},
    {path: '/dlist',component:Dlist},
  ]

})
