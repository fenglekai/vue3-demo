<script lang="ts" setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Home from './components/Home.vue'
</script>

<template>
  <Home class="animate__animated animate__fadeIn" />
</template>

<style>
body {
  margin: 0;
  min-width: 1440px;
  /* 滚动条不占宽度 */
  overflow: overlay;
}
p {
  margin-block-start: 0em;
  margin-block-end: 0em;
}
/*定义滚动条高宽及背景
 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
  background-color: transparent;
}
/* 定义滚动条按钮 */
::-webkit-scrollbar-button {
  display: none;
}
/*定义滚动条轨道
 内阴影+圆角*/
::-webkit-scrollbar-track {
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background-color: transparent;
}
/*定义滑块
 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.5);
}
::-webkit-scrollbar-thumb:hover {
  background-color: rgba(255, 255, 255, 0.6);
}
/* 定义滚动条x和y交汇部分 */
::-webkit-scrollbar-corner {
  display: none;
}
</style>
