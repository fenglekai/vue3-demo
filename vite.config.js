import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'

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
  },
  // 配置路径别名
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      vue: 'vue/dist/vue.esm-bundler.js'
    },
  },
  plugins: [vue(), legacy({
    targets: ['defaults', 'not IE 11']
  })]
})