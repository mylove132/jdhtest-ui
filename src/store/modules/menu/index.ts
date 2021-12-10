import { getMenuList } from '@/api/menu';
import { defineStore } from 'pinia'
import { menuState } from './state'
import { MenuType } from '@/api/menu/model/index'

export const useMenuStore = defineStore('menu', {
   state: menuState,
   actions: {
    setMenuList (menuList: MenuType[]) {
        this.menuList = menuList;
    },
    setOpenKeys (menuOpenKeys: string[]) {
        this.menuOpenKeys = menuOpenKeys;
    },
    setMenuSelectedKeys (menuSelectedKeys:[]) {
        this.menuSelectedKeys = menuSelectedKeys;
    },
    async generateMenu() {
        const res = await getMenuList();
        this.setMenuList(res)
      }
   }
})