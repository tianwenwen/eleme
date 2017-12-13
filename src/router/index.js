import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout'
import Goods from '@/components/goods/goods'
import Ratings from '@/components/ratings/ratings'
import Seller from '@/components/seller/seller'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      alias:"/root",
      component: Layout,
      redirect:'/root/goods',
      children:[
        {
          path:'goods',
          name:'goods',
          component:Goods
        },{
          path:'seller',
          name:'seller',
          component:Seller
        },{
          path:'ratings',
          name:'ratings',
          component:Ratings
        }
      ]
    }
  ],
  mode: 'history',
  linkActiveClass: 'active' // 设置点击类名
})
export default router;
