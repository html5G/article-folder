import Vue from 'vue'
import Router from 'vue-router'
import QrcodeReader from '@/components/QrcodeReader'
import index from '@/src/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/QrcodeReader',
      name: 'QrcodeReader',
      component: QrcodeReader
    },
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})
