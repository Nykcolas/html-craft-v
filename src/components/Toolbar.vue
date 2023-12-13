<template>
  <nav class="flex flex-col gap-2">
    <ul class="header flex">
        <li class="border rounded hover:bg-[#e5e7eb] cursor-pointer relative">
            <a @click="openHeaders = !openHeaders" v-html="IconHeading"></a>
            <transition 
                mode="out-in"
                enter-active-class="animate__animated animate__fadeInDown"
                leave-active-class="animate__animated animate__fadeOutDown"
            >
                <ul v-if="openHeaders" class="options divide-y border rounded flex flex-col absolute left-full top-0 bg-white">
                    <li 
                        v-for="(icon, index) in IconHeaders"
                        :key="index" 
                        class="hover:bg-[#e5e7eb] cursor-pointer flex items-center gap-2 p-2"
                    >
                        <a class="bg-white rounded text-6xl" v-html="icon"></a>
                        <span class="font-medium whitespace-nowrap">Cabeçalho {{ index + 1 }}</span>
                    </li>
                </ul>
            </transition>
        </li>
    </ul>
  </nav>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { IconH1, IconH2, IconH3, IconH4, IconH5, IconH6, IconHeading } from '@codexteam/icons';

export default defineComponent({
    name: "Toolbar",
    data() {
        return {
            openHeaders: false as boolean,
            IconHeaders: [IconH1, IconH2, IconH3, IconH4, IconH5, IconH6] as string[],
            IconHeading: IconHeading as string,
        }
    },
    methods: {

    },
});
</script>
<style>
/* .btn {

} */
</style>