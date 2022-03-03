<<<<<<< HEAD
<template>
  <div class="app-main">
    <router-view v-slot="{ Component }">
      <transition :name="transitionName">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts" setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const transition = ["slide-left", "slide-right"];
let transitionName = ref(transition[0]);
const route = useRoute();
watch(
  () => route.meta.index,
  (newIndex: any, oldIndex: any) => {
    if (newIndex > oldIndex) {
      transitionName.value = transition[0];
    } else {
      transitionName.value = transition[1];
    }
  }
);
</script>

<style>
html {
  overflow: overlay;
}
.app-main {
  margin: 0;
  min-width: 1440px;
}
body {
  margin: 0;
  padding: 0;
=======
<script lang="ts" setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "./components/HelloWorld.vue";
import Home from "./components/Home.vue";
</script>

<template>
  <Home class="animate__animated animate__fadeIn" />
</template>

<style>
body {
  margin: 0;
  min-width: 1440px;
  overflow-x: overlay;
  overflow-y: hidden;
>>>>>>> 747ff841d65d59df20aea5de9992fcb1ae3305f8
}
p {
  margin-block-start: 0em;
  margin-block-end: 0em;
}
<<<<<<< HEAD
/*定义滑块
 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  background-color: rgba(121, 115, 115, 0.5);
  /* outline-offset: -2px;
  outline: 2px solid #FFFFFF;
  border: 2px solid #FFFFFF; */
  border-radius: 4px;
  -webkit-border-radius: 4px;
  transition: .3s all ease;
}
/*---鼠标点击滚动条显示样式--*/
::-webkit-scrollbar-thumb:hover {
  background-color: rgba(121, 115, 115, 0.8);
  border-radius: 4px;
  -webkit-border-radius: 4px;
}
/*---滚动条大小--*/
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
/*---滚动框背景样式--*/
::-webkit-scrollbar-track-piece {
  background-color: transparent;
  border-radius: 0;
  -webkit-border-radius: 0;
}
::-webkit-scrollbar-thumb:active {
  background-color: rgba(121, 115, 115, 1);
  border-radius: 4px;
  -webkit-border-radius: 4px;
}
/* x和y轴交汇部分 */
::-webkit-scrollbar-corner {
  background-color: rgba(255,255,255, 0.001);
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 0.5s;
}
.slide-right-enter {
  opacity: 0;
}
.slide-right-leave-active {
  opacity: 0;
}
.slide-left-enter {
  opacity: 0;
}
.slide-left-leave-active {
  opacity: 0;
=======
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
  background-color: rgba(138, 255, 142, 0.7);
}
::-webkit-scrollbar-thumb:hover {
  background-color: rgba(138, 255, 142, 1);
}
/* 定义滚动条x和y交汇部分 */
::-webkit-scrollbar-corner {
  display: none;
>>>>>>> 747ff841d65d59df20aea5de9992fcb1ae3305f8
}
</style>
