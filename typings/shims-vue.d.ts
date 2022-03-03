declare module '*.vue' {// ts全局定义.vue文件判断
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}