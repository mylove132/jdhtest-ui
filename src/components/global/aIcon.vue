<template>
  <component :is="type" />
</template>

<script setup lang='ts'>
defineProps({
  type: String,
})
</script>

<style lang="less" scoped></style>
