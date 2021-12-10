<template>
  <div class="siderContent">
    <div class="logo">
      <img :src="logo" :style="{ width: '48px' }" />
      Vite2 Vue3
    </div>
    <a-menu
      :selectedKeys="menuSelectedKeys"
      :openKeys="menuOpenKeys"
      theme="light"
      mode="inline"
      :default-selected-keys="[]"
      @click="handleCLick"
      @select="handleSelect"
      @openChange="openChange"
      class="g-scrollbar-y"
    >
      <template v-for="item in menuList">
        <a-menu-item v-if="!item.children" :key="item.path">
          <icon-font :type="item.iconType" />
          <!-- <span>{{ item.title }}</span> -->
          <a-badge :dot="!item.show">{{ item.title }}</a-badge>
        </a-menu-item>
        <SubMenuItem v-else :key="item.path!" :menu-info="item">
          <p>{{ item }}</p>
        </SubMenuItem>
      </template>
    </a-menu>
  </div>
</template>

<script setup lang="ts">
import SubMenuItem from '@/layout/SubMenuItem'
import logo from '@/assets/svg/logo.svg'
import { computed, onMounted, watchEffect } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useMenuStore } from '@/store/modules/menu'
import { useAppStore } from '@/store/modules/app'
const menuStore = useMenuStore()
const appStore = useAppStore()
const Router = useRouter()
const Route = useRoute()
onMounted(async () => {
  await initMenuList()
})
const menuList = computed(() => {
  return menuStore.menuList
})
const initMenuList = async () => {
  await menuStore.generateMenu();
}

const menuOpenKeys = computed(() => {
  return menuStore.menuOpenKeys
})
const menuSelectedKeys = computed(() => {
  return menuStore.menuSelectedKeys
})
const handleSelect = (item: any) => {
  menuStore.setMenuSelectedKeys(item.selectedKeys)
}
const openChange = (openKeys: string[]) => {
  menuStore.setOpenKeys(openKeys)
}
const handleCLick = (item: any) => {
  appStore.setDrawerStatus(false)
  Router.push({ path: item.key })
}
watchEffect(() => {
  const { matched: matchList } = Route
  const validList = matchList.filter(item => {
    return !item.meta.hide && item.path !== '/'
  })
  const [select, ...open] = validList.reverse()
  const selectedKeys = [select.path]
  const OpenKeys = open.map(item => item.path)
  handleSelect({ selectedKeys })
  openChange(OpenKeys)
})
</script>

<style scoped lang="less">
.siderContent {
  height: 100vh;
  padding: 30px 0px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  .logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 24px;
    font-weight: 600;
    font-size: 18px;
  }
}
.ant-menu-inline {
  border: none;
}
</style>
