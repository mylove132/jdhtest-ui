<template>
    <a-breadcrumb>
        <a-breadcrumb-item v-for="(item: any, index) in matchList" :key="index">
            <router-link :to="{ path: item.path }">
                <HomeOutlined v-if="item.path === '/'" />
                <template v-else>{{ item.meta.title }}</template>
            </router-link>
        </a-breadcrumb-item>
    </a-breadcrumb>
</template>

<script setup lang="ts">
import { reactive, toRefs, watchEffect } from "vue"
import { useRoute } from 'vue-router'
const route = useRoute()
const currentRouteInfo = reactive({
  matchList: [],
})

watchEffect(() => {
  const { matched } = route
  currentRouteInfo.matchList = [...matched] as []
})
const { matchList } = {
  ...toRefs(currentRouteInfo),
}
</script>