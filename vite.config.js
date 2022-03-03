import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'

const {
  resolve
} = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  // 配置生产环境公共路径
  base: './',
  server: {
    // 服务端口
    port: 8008,
    // 启动服务自动打开浏览
    open: true,
    // 跨域处理
    proxy: {
      '/ug/api/wuhan/app/data/list-total': 'https://c.m.163.com'
    }
  },
  // 配置路径别名
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      vue: 'vue/dist/vue.esm-bundler.js'
    },
  },
  plugins: [vue()],
})