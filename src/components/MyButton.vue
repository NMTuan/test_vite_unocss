<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-08 20:19:33
 * @LastEditTime: 2022-07-08 20:50:49
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \test__vite_vue\src\components\MyButton.vue
-->
<template>
    <button :class="useClass">
        <slot />
    </button>
</template>
<script setup>
import { defineProps, ref } from 'vue';
const props = defineProps({
    type: {
        type: String,
        default: ''
    }
})

let useClass = ref([])
switch (props.type) {
    case 'primary':
        useClass.value.push('bg-sky-400')
        break
    case 'success':
        useClass.value.push('bg-green-400')
        break
    case 'warning':
        useClass.value.push('bg-yellow-400')
        break
    case 'danger':
        useClass.value.push('bg-red-400')
        break
}
</script>

