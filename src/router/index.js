import Vue from 'vue'
import Router from 'vue-router'

/*import Index from 'components/index/index.vue'
import AboutUs from 'components/about-us/about-us.vue'
import Service from 'components/service/service.vue'
import News from 'components/news/news.vue'
import Case from 'components/case/case.vue'
import Sample from 'components/sample/sample.vue'
import Jobs from 'components/jobs/jobs.vue'

import Detail from 'components/detail/detail.vue'*/

const Index = (resolve) => {
  import('components/index/index.vue').then((module) => {
    resolve(module)
  })
}
const AboutUs = (resolve) => {
  import('components/about-us/about-us.vue').then((module) => {
    resolve(module)
  })
}
const Service = (resolve) => {
  import('components/service/service.vue').then((module) => {
    resolve(module)
  })
}
const News = (resolve) => {
  import('components/news/news.vue').then((module) => {
    resolve(module)
  })
}
const Case = (resolve) => {
  import('components/case/case.vue').then((module) => {
    resolve(module)
  })
}
const Sample = (resolve) => {
  import('components/sample/sample.vue').then((module) => {
    resolve(module)
  })
}
const Jobs = (resolve) => {
  import('components/jobs/jobs.vue').then((module) => {
    resolve(module)
  })
}
const Detail = (resolve) => {
  import('components/detail/detail.vue').then((module) => {
    resolve(module)
  })
}


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
