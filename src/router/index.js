import Vue from 'vue'
import Router from 'vue-router'

import Index from 'components/index/index.vue'
import AboutUs from 'components/about-us/about-us.vue'
import Service from 'components/service/service.vue'
import News from 'components/news/news.vue'
import Case from 'components/case/case.vue'
import Sample from 'components/sample/sample.vue'
import Jobs from 'components/jobs/jobs.vue'

import Detail from 'components/detail/detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/aboutus',
      component: AboutUs
    },
    {
      path: '/service',
      component: Service,
      children: [
        {
          path:':title',
          component: Detail
        }
      ]
    },
    {
      path: '/news',
      component: News,
      children: [
        {
          path:':title',
          component: Detail
        }
      ]
    },
    {
      path: '/case',
      component: Case,
      children: [
        {
          path:':title',
          component: Detail
        }
      ]
    },
    {
      path: '/sample',
      component: Sample
    },
    {
      path: '/jobs',
      component: Jobs
    }
  ]
})
