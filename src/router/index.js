import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/Login";
import {servie} from "../api/request";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Index from "../views/Index"
NProgress.configure({
  easing: 'ease',  // 动画方式
  speed: 500,  // 递增进度条的速度
  showSpinner: false, // 是否显示加载ico
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3 // 初始化时的最小百分比
})

Vue.use(VueRouter)
const routes = [
  {
    path: "/login",
    name:"Login",
    component: Login
  },
  {
    path: "/",
    name: "Index",
    component: Index
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to,from,next)=>{
  NProgress.start();
  if (to.name !== "Login"){
    let token = window.localStorage.getItem("token")
    if (token){
      servie.defaults.headers.common["Authorization"] = `Bearer ${token}`
      next();
    }else{
      next("/login");
    }
  }else{
    next();
  }
})

router.afterEach(()=>{
  NProgress.done();
})

export default router
