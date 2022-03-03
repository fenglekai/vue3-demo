import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
<<<<<<< HEAD
=======
import legacy from '@vitejs/plugin-legacy'
>>>>>>> 747ff841d65d59df20aea5de9992fcb1ae3305f8

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
<<<<<<< HEAD
    // 跨域处理
    proxy: {
      '/ug/api/wuhan/app/data/list-total': 'https://c.m.163.com'
    }
=======
>>>>>>> 747ff841d65d59df20aea5de9992fcb1ae3305f8
  },
  // 配置路径别名
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      vue: 'vue/dist/vue.esm-bundler.js'
    },
  },
<<<<<<< HEAD
  plugins: [vue()],
=======
  plugins: [vue(), legacy({
    targets: ['defaults', 'not IE 11']
  })]
>>>>>>> 747ff841d65d59df20aea5de9992fcb1ae3305f8
})