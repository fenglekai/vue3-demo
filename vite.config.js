import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'

const {
  resolve
} = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  // 配置路径别名
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [vue()]
})