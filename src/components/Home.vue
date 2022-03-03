<template>
  <el-container>
    <el-aside class="aside">
      <div style="margin-top: 40px">
        <img src="@/assets/images/Fill.png" />
      </div>
      <div style="height: 80vh; overflow: hidden">
        <div ref="menuImg" class="menu-img hvr_grow">
          <img src="@/assets/images/menu.png" @click="openMenu('')" />
        </div>
        <div ref="menuList" class="menu-list">
          <p @click="choiceAnimate">circleMenuAnimation</p>
          <p @click="choiceAnimate">percentageWaterBalloon</p>
          <p @click="choiceAnimate">bubbleBackground</p>
          <p @click="choiceAnimate">timeWarpBackground</p>
          <p @click="choiceAnimate">snowflakeBackground</p>
          <p @click="choiceAnimate">textRain</p>
          <p @click="choiceAnimate">remoteSensingSpacecraft</p>
          <p @click="choiceAnimate">dynamicColorChange</p>
          <p @click="choiceAnimate">hairGlassEffect</p>
          <p @click="choiceAnimate">collosionOfSmallBalls</p>
          <p @click="choiceAnimate">collosionOfSmallBalls2</p>
          <p @click="choiceAnimate">JqueryParallax</p>
          <p @click="choiceAnimate">largeScreenRandomLottery</p>
          <p @click="choiceAnimate">3DFlipAndMask</p>
        </div>
      </div>
    </el-aside>
    <el-container style="max-height: 100vh">
      <el-header class="header">
        <div class="left-menu">
          <p
            class="hvr_border_underline_from_center"
            @click="openMenu('backHome')"
          >
            Home
          </p>
          <p class="hvr_border_underline_from_center" @click="toServerMenu">
            My Cloud Server
          </p>
        </div>
        <div class="right-menu">
          <p class="hvr_border_underline_from_center">Contact</p>
          <p class="hvr_border_underline_from_center">About Us</p>
          <div class="right-icon">
            <div style="position: relative">
              <div class="search-box">
                <div class="input-3">
                  <el-autocomplete
                    v-model="inputValue"
                    :fetch-suggestions="querySearch"
                    placeholder="Please Input"
                    @select="handleSelect"
                  />
                </div>
                <button
                  type="button"
                  class="input3-btn"
                  name="button"
                  @click="inputValue = ''"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </el-header>
      <el-main style="padding: 0">
        <div v-show="isHome" class="main">
          <div class="main-left">
            <div
              class="section"
              style="
                position: relative;
                top: 40%;
                left: 50%;
                transform: translate(-50%, -50%);
              "
            >
              <div class="text-3">
                <div class="a">✨💖🔥👏👉</div>
                <div class="a">✨💖🔥👏👉</div>
                <a href="http://fenglekai.github.io" target="_blank"
                  ><img
                    src="@/assets/images/GitHub.png"
                    alt=""
                    width="60"
                  />Fenglekai Blog</a
                >
              </div>
            </div>
          </div>
          <div class="main-right">
            <img src="@/assets/images/homeImg.png" />
          </div>
        </div>
        <iframe
          v-show="!isHome"
          style="width: 100%; height: 99%"
          :src="animateSrc"
          frameborder="0"
        ></iframe>
      </el-main>
    </el-container>
    <!-- 底部一言 start -->
    <div v-show="isHome" class="footer">
      <span class="span-margin"
        >{{ hitokoto.hitokoto }}
        <br />
        <p style="text-align: right">
          《{{ hitokoto.from }}》 {{ hitokoto.from_who }}
        </p>
      </span>
      <div class="img-margin" @click="getHitokoto">
        <img src="@/assets/images/right.png" />
      </div>
    </div>
    <!-- 底部一言 end -->
  </el-container>
</template>

<script lang="ts">
import { onMounted, reactive, toRefs, ref, defineComponent } from "vue";
import { useRouter } from "vue-router";
import { ElMessage, TargetOrder } from "element-plus";
import request from "@/utils/request";
// 之前的建立上下文方式
// const path = require("path");
// const files = require.context("@/components/context", false, /\.vue$/);
// const modules = {};
// files.keys().forEach(key => {
//   const name = path.basename(key, ".vue");
//   modules[name] = files(key).default || files(key);
// });
// ES6的建立上下文方式
// const files = import.meta.globEager("/src/components/*.vue");
// const files = import.meta.globEager("/src/static/**");
export default defineComponent({
  name: "Home",
  setup(props: any, context: any) {
    const state = reactive({
      hitokoto: {
        hitokoto: "",
        from: "",
        from_who: "",
      },
      waiting: false,
      isHome: true,
      // animateSrc: "/src/assets/static/circleMenuAnimation/index.html",
      animateSrc: `${
        import.meta.env.DEV ? "public/" : "./"
      }static/circleMenuAnimation/index.html`,
      inputValue: "",
    });
    const router = useRouter();
    const menuImg = ref();
    const menuList = ref();
    const restaurants = ref();
    // 搜索
    function searchClick() {
      const input3: Element | any = document.querySelector(".input-3");
      const input3Btn: Element | any = document.querySelector(".input3-btn");
      if (input3.className.indexOf("inclicked") == -1) {
        input3.className = "input-3 inclicked";
        input3Btn.className = "input3-btn close";
      } else {
        input3.className = "input-3";
        input3Btn.className = "input3-btn";
      }
    }
    // 搜索提示
    const querySearch = (queryString: string, cb: any) => {
      const results = queryString
        ? restaurants.value.filter(createFilter(queryString))
        : restaurants.value;
      // call callback function to return suggestions
      cb(results);
    };
    const createFilter = (queryString: string) => {
      return (restaurant: any) => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    };
    const loadAll = () => {
      const temp = [...menuList.value.children];
      const menuData = temp.map((item) => {
        return {
          value: item.innerText,
        };
      });
      return menuData;
    };
    const handleSelect = (item: any) => {
      openMenu("search");
      state.animateSrc = `${import.meta.env.DEV ? "public/" : "./"}static/${
        item.value
      }/index.html`;
    };
    // 获取一言接口
    const getHitokoto = async () => {
      if (state.waiting)
        return ElMessage.info("请细细品味这句话~（等10秒后再试试）");
      state.waiting = true;
      await request({
        url: "https://v1.hitokoto.cn/?c=d&c=e&c=h&c=i&c=j&c=k",
        method: "get",
      })
        .then((res: any) => {
          state.hitokoto = res;
        })
        .catch((err) => {
          ElMessage.info("没有换句成功喔，你是不是没仔细看");
          console.log(err);
        });
      state.waiting = false;
    };
    const getFreeApi = async () => {
      await request({
        url: "https://api.apiopen.top/getJoke?page=1&count=10&type=all",
        method: "get",
      })
        .then((res: any) => {
          console.log(res);
        })
        .catch((err: any) => {
          console.log(err);
        });
    };
    // 打开菜单
    function openMenu(value: string) {
      if (value === "search") {
        state.isHome = false;
      } else if (value === "backHome") {
        state.isHome = true;
      } else {
        state.isHome = !state.isHome;
      }
      if (!state.isHome) {
        menuImg.value.style.top = "5%";
        menuList.value.style.top = "8%";
        menuList.value.style.height = "auto";
      } else {
        menuImg.value.style.top = null;
        menuList.value.style.top = null;
        menuList.value.style.height = "0px";
      }
    }
    // 选择动画
    const choiceAnimate = (e: any) => {
      state.animateSrc = `${import.meta.env.DEV ? "public/" : "./"}static/${
        e?.target?.innerText
      }/index.html`;
    };
    // 跳转服务页面
    const toServerMenu = () => {
      router.push("ServerMenu");
    };
    // 页面挂载完成
    onMounted(() => {
      const input3Btn: Element | any = document.querySelector(".input3-btn");
      input3Btn.addEventListener("click", () => {
        searchClick();
      });
      getHitokoto();
      restaurants.value = loadAll();
      // window.onload = () => {
      //   document.onkeyup = (ev) => {
      //     if(ev.key === 'Enter') {
      //       console.log(ev);
      //     }
      //   }
      // }
    });
    return {
      searchClick,
      restaurants,
      querySearch,
      loadAll,
      handleSelect,
      getHitokoto,
      getFreeApi,
      openMenu,
      choiceAnimate,
      ...toRefs(state),
      menuImg,
      menuList,
      toServerMenu,
    };
  },
});
</script>

<style lang="scss" scoped>
$color-primary: #fbfa34;
$color-green: #8aff8e;
.aside {
  width: 12.55vw;
  height: 100vh;
  background-color: $color-primary;
  text-align: center;
  z-index: 1;
  .menu-img {
    position: relative;
    top: 50%;
    cursor: pointer;
    transition: 0.3s;
  }
  .menu-list {
    height: 0px;
    overflow: hidden;
    position: relative;
    top: 50%;
    transition: 0.3s;
    p {
      cursor: pointer;
      margin-top: 5px;
      color: rgba(0, 0, 0, 0.7);
      transition: 0.3s all ease;
      position: relative;
      &:hover {
        color: rgba(0, 0, 0, 1);
      }
      &:before {
        content: "";
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: $color-green!important;
        transform: scaleX(0);
        transform-origin: 0 50%;
        transition-property: transform;
        transition-duration: 0.3s;
        transition-timing-function: ease-out;
      }
      &:hover:before {
        transform: scaleX(1);
      }
    }
  }
}
.header {
  padding: 0;
  height: 10vh;
  display: flex;
  justify-content: space-between;
}
.hvr_border_underline_from_center::before {
  background-color: $color-green !important;
}
.left-menu {
  height: 100%;
  margin-left: 31px;
  display: inherit;
  p {
    height: 80%;
    margin-left: 60px;
    line-height: 10.15vh;
    font-family: AlibabaPuHuiTi-Regular;
    font-weight: bold;
    cursor: pointer;
  }
}

.right-menu {
  display: flex;
  justify-content: end;
  p {
    height: 80%;
  }
  .right-icon {
    display: inherit;
    height: 100%;
    background-color: $color-green;
    line-height: 13vh;
    padding: 0 40px 0 40px;
    img {
      margin-right: 20px;
      cursor: pointer;
    }
  }
  p {
    margin-right: 60px;
    line-height: 10.15vh;
    font-family: AlibabaPuHuiTi-Regular;
    font-weight: bold;
    cursor: pointer;
  }
}
.main {
  display: flex;
  padding: 0;
  height: 90vh;
  .main-left {
    height: 100%;
    flex: 3;
  }
  .main-right {
    height: 100%;
    flex: 6;
    img {
      float: right;
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 100%;
    }
  }
}
.footer {
  width: 42.76vw;
  height: 18.06vh;
  background-color: #000;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  color: $color-primary;
  font-family: AlibabaPuHuiTi-Bold;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .span-margin {
    margin-left: calc(42.76vw / 11);
    width: 500px;
    word-break: break-all;
  }
  .img-margin {
    height: 30px;
    margin-right: calc(42.76vw / 18);
    line-height: 60px;
    cursor: pointer;
    filter: brightness(0.3);
    transition: 0.3s;
  }
  .img-margin:hover {
    filter: brightness(1);
  }
}
</style>

<style lang="scss" scoped>
@import "@/styles/input.css";
@import "@/styles/text.css";
@import "@/styles/hover.min.css";
.search-box {
  height: 100%;
  line-height: 15px;
  position: relative;
  .input-3 {
    position: relative;
    top: 50%;
    transform: translate(0%, -50%);
  }
}
</style>

<style lang="scss">
.el-autocomplete {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .el-input {
    height: 100%;
    .el-input__inner {
      background-color: transparent;
      border-color: transparent;
      height: 100%;
    }
  }
}
</style>