import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/pages/index'
import Recommend from '../components/pages/recommend'
import Search from '../components/pages/search'
import Song from '../components/pages/song'
import Play from '../components/pages/play'
import Bofang from '../components/pages/bofang'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      component:Index,
      children:[
        {
          path:'recommend',
          component:Recommend
        },
        {
          path:'song',
          component:Song
        },
        {
          path:'search',
          component:Search
        },
        {
          path:'',
          redirect:Recommend
        }
      ]
    },
    {
      path:'/play',
      component:Play
    },
    {
      path:'/playlist/:id',
      component:Song
    },
    {
      path:'/play/:id',
      component:Bofang
    },
    {
      path:'*',
      component:Index
    }
  ]
})
