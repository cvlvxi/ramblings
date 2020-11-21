import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Awesome from "../awesome/Awesome"
import ShowCaseHome from "../showcase/ShowCaseHome"
import Sorting from "../showcase/2020-11/sorting/Sorting"


Vue.use(Router)

import { BlogEntries } from '../blog/blog.js';
import { ShowCaseEntries } from '../showcase/showcase.js'


let showCaseRoutes = []

for(let [section, entries] of Object.entries(ShowCaseEntries)) {
  for (let entry of entries) {
    const child = {
      path: `/showcase/${section}/${entry.id}`,
      name: entry.id,
      component: () => entry.component,
      props: entry.props
    }
    showCaseRoutes.push(child)
  }
}


const blogRoutes = Object.keys(BlogEntries).map(section => {
  const children = BlogEntries[section].map(child => ({
    path: child.id,
    name: child.id,
    component: () => import(`../blog/${section}/${child.id}.md`)
  }))
  return {
    path: `/${section}`,
    name: section,
    component: () => import('../components/Blog.vue'),
    children
  }
})

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      props: true
    },
    {
      path: '/awesome',
      name: 'awesome',
      component: Awesome,
    },
    {
      path: '/showcase',
      name: 'showcase',
      component: ShowCaseHome,
      props: true
    },
    {
      path: '/sorting',
      name: 'sorting',
      component: Sorting,
      props: false
    },
    ...blogRoutes,
    ...showCaseRoutes
  ]
})
