import Vue from 'vue'
import Router from 'vue-router'
import first from '@/components/firstDemo'
import demo2 from '@/components/demo2'
import Hello from '@/components/Hello'


Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: Hello
    //
    // },
    {
      path:'/first',
      name:'first',
      component:first
    },
    {
      path:'/demo2',
      name:'demo2',
      component:demo2
    }
  ]
})
