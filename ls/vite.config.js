import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
    base:'./',
    plugins: [
        vue(),
    ],
    css: {
        // css预处理器
        preprocessorOptions: {
            scss: {
                // 引入 mixin.scss 这样就可以在全局中使用 mixin.scss中预定义的变量了
                // 给导入的路径最后加上 ;
            }
        }
    }
})
