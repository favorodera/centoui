import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

/**
 * Eagerly discovers all view modules matching the `*-view.vue` convention.
 * Each key is a relative path; each value is a dynamic import factory.
 *
 * @example
 * // "../views/dashboard-view.vue" → () => Promise<unknown>
 */
const viewModules = import.meta.glob('../views/*-view.vue')

/**
 * Derives a route record from each discovered view module.
 *
 * Naming convention: `{name}-view.vue` → `{ path: "/{name}", name: "{name}" }`
 *
 * Files that don't match the pattern are silently skipped.
 *
 * @example
 * // "../views/button-view.vue" → { path: "/button", name: "button", component: ... }
 */
const generatedRoutes = Object
  .entries(viewModules)
  .reduce<RouteRecordRaw[]>((routes, [path, component]) => {
    const name = path.match(/\/([^/]+)-view\.vue$/)?.[1]
    if (name) {
      routes.push({ path: `/${name}`, name, component })
    }
    return routes
  }, [])

/**
 * Full route table consumed by Vue Router.
 *
 * Includes all auto-generated view routes, plus a root redirect to the first
 * discovered view when at least one view exists. If no views are found the
 * redirect is omitted and the router starts with an empty table.
 */
const routes: RouteRecordRaw[] = [
  ...generatedRoutes,
  // Redirect "/" to the first discovered view so the app always lands somewhere meaningful.
  ...(generatedRoutes[0] ? [{ path: '/', redirect: generatedRoutes[0].path }] : []),
]

/**
 * Application router.
 *
 * Uses HTML5 history mode; the base URL is injected by Vite via `BASE_URL`
 * so the app works correctly when hosted on a sub-path.
 */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
