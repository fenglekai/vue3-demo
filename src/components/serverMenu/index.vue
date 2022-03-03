<template>
  <div class="flex-wrapper">
      <div class="back-btn">
        <el-button
          type="primary"
          :icon="ArrowLeft"
          circle
          @click="router.push('/')"
        ></el-button>
      </div>

    <div class="main-wrapper">
      <iframe
        style="width: 100%; height: 100%; border-width: 0"
        src="https://demo.frontend-flk.site/welcome/"
      ></iframe>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { ArrowLeft } from "@element-plus/icons-vue";

const router = useRouter();
</script>

<style lang="scss" scoped>
.flex-wrapper {
  display: flex;
  flex-direction: column;
}
.main-wrapper {
  width: 100%;
  height: 100vh;
  flex-grow: 1;
}
.back-btn {
  padding-left: 10px;
  position: fixed;
  left: -40px;
  top: 10px;
  transition: 0.3s all ease;
}
.back-btn:hover {
  left: 0px;
  top: 10px;
}
</style>