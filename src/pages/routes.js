import {createRouter} from 'vue-router'
import Homepage from '@/pages/home/Home.vue';
import Page from '@/pages/page/Page.vue';

const routes = [
  {
    path: '/',
    component: Homepage
  },

  {
    path: '/:id/',
    component: Page
  },

  // {
  //   path: '/cart/',
  //   component: Cart
  // },
]

export default function (history) {
  return createRouter({
    history,
    routes
  })
}
