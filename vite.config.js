/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-08 20:15:32
 * @LastEditTime: 2022-07-08 20:17:55
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \test__vite_vue\vite.config.js
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), Unocss({})]
})
