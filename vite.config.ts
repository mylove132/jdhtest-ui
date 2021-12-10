import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import { viteMockServe } from "vite-plugin-mock";
import ViteComponents, { AntDesignVueResolver } from "vite-plugin-components";
import path from "path";

export default defineConfig(({ command, mode }) => {
  return {
    // 项目插件
    plugins: [
      vue(),
      ViteComponents({
        customComponentResolvers: [AntDesignVueResolver()],
        globalComponentsDeclaration: true
      }),
      viteMockServe({
        mockPath: "mock",
        localEnabled: command === "serve",
      }),
    ],
    // 基础配置
    base:
      mode === "development"
        ? "/"
        : "https://cdn200.oss-cn-hangzhou.aliyuncs.com/",
    publicDir: "public",
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    // 服务配置
    server: {
      port: 8702,
      host: '0.0.0.0',
      open: true
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            "@border-color-base": "#dce3e8",
          },
          javascriptEnabled: true,
        },
      },
    },
    build: {
      outDir: "dist",
      assetsDir: "assets",
      assetsInlineLimit: 4096,
      cssCodeSplit: true,
      sourcemap: false,
      terserOptions: {
        compress: {
          // 生产环境去除console
          drop_console: true,
        },
      },
    },
  };
});
