import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RouterViewLayout from '@/components/RouterViewLayout.vue'

// 导入指定图表下的所有文件
const PieChartModules = import.meta.glob('@/views/PieChart/*.vue')
const gaugeChartModules = import.meta.glob('@/views/GaugeChart/*.vue')
const barChartModules = import.meta.glob('@/views/BarChart/*.vue')
const liquidFillModules = import.meta.glob('@/views/LiquidFill/*.vue')
const FunnelChartModules = import.meta.glob('@/views/FunnelChart/*.vue')
const MapChartModules = import.meta.glob('@/views/MapChart/*.vue')


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/pieChart',
      name: 'PieChart',
      component: RouterViewLayout,
      redirect: '/pieChart/one',
      children: generateRoutes(PieChartModules,'PieChart')
    },
    {
      path: '/gaugeChart',
      name: 'GaugeChart',
      component: RouterViewLayout,
      redirect: '/gaugeChart/one',
      children: generateRoutes(gaugeChartModules,'GaugeChart')
    },
    {
      path: '/barChart',
      name: "BarChart",
      component: RouterViewLayout,
      redirect: '/barChart/one',
      children: generateRoutes(barChartModules,'BarChart')
    },
    {
      path: '/liquidFill',
      name: 'LiquidFill',
      redirect: '/liquidFill/one',
      component: RouterViewLayout,
      children: generateRoutes(liquidFillModules,'LiquidFill')
    },
    {
      path: '/funnelChart',
      name: 'FunnelChart',
      redirect: '/funnelChart/one',
      component: RouterViewLayout,
      children: generateRoutes(FunnelChartModules,'FunnelChart')
    },
    {
      path: '/mapChart',
      name: 'MapChart',
      redirect: '/mapChart/one',
      component: RouterViewLayout,
      children: generateRoutes(MapChartModules,'MapChart')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})


/**
 * 根据导入的文件构建路由信息
 * @param {*} modules
 * @param {*} replaceStr
 * @returns
 */
function generateRoutes(modules,replaceStr){
  const routes = []
  for(let path in modules) {
    const splitPath = path.split('/')
    const name = splitPath[splitPath.length - 1].replace('.vue','')
    routes.push({
      path: name.replace(replaceStr,''),
      name,
      component: modules[path]
    })
  }
  return routes
}

export default router
