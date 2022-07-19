import { RouteRecordRaw } from 'vue-router'

export function mapMenusToRoutes(userMenu: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []
  const recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        routes.push({
          path: menu.url,
          component: () => import(`@/views${menu.url}`)
        })
      } else {
        recurseGetRoute(menu.children)
      }
    }
    return routes
  }
  return recurseGetRoute(userMenu)
}
