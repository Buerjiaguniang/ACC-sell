import Vue from 'vue'
import Router from 'vue-router'
import resource from 'vue-resource'
import Header from '@/components/header/header'
import Goods from '../components/goods/goods'
import Seller from '../components/seller/seller'
import Ratings from '../components/ratings/ratings'

import '../common/stylus/index.styl'
// import '../common/stylus/icon.styl'

Vue.use(resource)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Header',
      name: 'Header',
      component: Header
    },
    {
      path: '/Goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/Seller',
      name: 'Seller',
      component: Seller
    },
    {
      path: '/Ratings',
      name: 'Ratings',
      component: Ratings
    }
  ]
})
