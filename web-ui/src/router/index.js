import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard'),
      meta: { title: '蒹葭面板', icon: 'dashboard' }
    }]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree'),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form'),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2'),
        name: 'Menu2',
        meta: { title: 'menu2' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },

  {
    path: '/user',
    component: Layout,
    redirect: '/user/userop',
    name: 'user',
    meta: {
      title: '用户管理',
      icon: 'el-icon-user'
    },
    children: [
      {
        path: 'userop',
        component: () => import('@/views/user/userop'),
        name: 'UserOp',
        meta: { title: '用户管理' }
      },
      {
        path: 'orgop',
        component: () => import('@/views/user/orgop'),
        name: 'OrgOp',
        meta: { title: '组织管理' }
      }
    ]
  },

  {
    path: '/role',
    component: Layout,
    redirect: '/role/roleop',
    name: 'role',
    meta: {
      title: '角色管理',
      icon: 'el-icon-suitcase\n'
    },
    children: [
      {
        path: 'roleop',
        component: () => import('@/views/role/roleop'),
        name: 'RoleOp',
        meta: { title: '角色管理' }
      },
      {
        path: 'roleexcept',
        component: () => import('@/views/role/roleexcept'),
        name: 'RoleExcept',
        meta: { title: '角色关系' }
      }
    ]
  },

  {
    path: '/resource',
    component: Layout,
    redirect: '/resource/menu',
    name: 'resource',
    meta: {
      title: '资源管理',
      icon: 'el-icon-monitor'
    },
    children: [
      {
        path: 'menu',
        component: () => import('@/views/resource/menu'),
        name: 'Menu',
        meta: { title: '菜单管理' }
      },
      {
        path: 'op',
        component: () => import('@/views/resource/op'),
        name: 'Op',
        meta: { title: '操作管理' }
      }
    ]
  },

  {
    path: '/content',
    component: Layout,
    redirect: '/content/pic',
    name: 'content',
    meta: {
      title: '内容管理',
      icon: 'el-icon-files'
    },
    children: [
      {
        path: 'pic',
        component: () => import('@/views/content/pic'),
        name: 'Pic',
        meta: { title: '图床管理' }
      },
      {
        path: 'video',
        component: () => import('@/views/content/video'),
        name: 'Video',
        meta: { title: '媒资管理' }
      }
    ]
  },

  {
    path: '/setting',
    component: Layout,
    redirect: '/setting/basic',
    name: 'setting',
    meta: {
      title: '系统设置',
      icon: 'el-icon-setting'
    },
    children: [
      {
        path: 'basic',
        component: () => import('@/views/setting/basic'),
        name: 'Basic',
        meta: { title: '基础设置' }
      },
      {
        path: 'audit',
        component: () => import('@/views/setting/audit'),
        name: 'Audit',
        meta: { title: '审计日志' }
      },
      {
        path: 'tool',
        component: () => import('@/views/setting/tool'),
        name: 'Tool',
        meta: { title: '在线工具' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
