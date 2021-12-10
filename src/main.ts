import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
import 'normalize.css' // 样式重置各浏览器统一
import './styles/nprogress.less'
import './styles/global.less' // 全局样式
import Antd from 'ant-design-vue'
import './styles/theme.less' // ant 主题Y样式
import * as Icons from "@ant-design/icons-vue"
import directives from './directives' // 全局指令
import components from './components/global' // 全局组件
const app = createApp(App)
import { createPinia } from 'pinia'
import './permisson' // 权限


for (const i in components) {
    app.component(i, components[i])
}
// 注册全部图标
const icons: any = Icons;
for (const i in icons) {
    app.component(i, icons[i]);
}
const dire: any = directives;
// 注册全局指令
for (const i in dire) {
    app.directive(i, dire[i])
}

app.use(Antd).use(Router).use(createPinia()).mount('#app')
