import { RouteRecordRaw } from "vue-router"

const modules = import.meta.globEager('./modules/*.ts')
const asyncRoutes: RouteRecordRaw[] = []
Object.keys(modules).forEach(file => {
  asyncRoutes.push(modules[file].default)
})

export default asyncRoutes