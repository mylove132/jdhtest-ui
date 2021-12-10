import asyncRoutes from '@/router/asyncRoutes'
import { routesToMenuTree } from "@/utils"
import { RouteRecordRaw } from "vue-router"
import { MenuType } from "@/api/menu/model/index"
export type IMenuState = {
    menuList: MenuType[],
    menuOpenKeys: string[],
    menuSelectedKeys: [],
}

export const menuState = (): IMenuState => {
    return {
        menuList: [],
        menuOpenKeys: [],
        menuSelectedKeys: [],
    }
}