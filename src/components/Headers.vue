<template>
    <transition 
        mode="out-in"
        name="scale"
    >
        <ul :style="`height: ${height}`" class="options divide-y border rounded flex flex-col absolute top-0 bg-white">
            <li 
                v-for="(icon, index) in IconHeaders"
                :key="index" 
                class="cursor-pointer flex items-center px-2 py-1 btn"
                @click="emitEvent(index, $event)"
            >
                <a class="bg-white rounded text-6xl" v-html="icon"></a>
                <span class="font-medium whitespace-nowrap">Cabeçalho {{ index + 1 }}</span>
            </li>
            <li 
                class="cursor-pointer flex items-center px-2 py-1 btn"
                @click="removeSelected"
            >
                <a class="bg-white rounded text-6xl" v-html="IconCross"></a>
                <span class="font-medium whitespace-nowrap">Deletar</span>
            </li>
        </ul>
    </transition>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { IconH1, IconH2, IconH3, IconH4, IconH5, IconH6, IconCross } from "@codexteam/icons";

export default defineComponent({
    name: "Toolbar",
    props: {
        height: {
            type: String,
            default: "10rem",
        },
    },
    data() {
        return {
            IconCross: IconCross as string,
            IconHeaders: [IconH1, IconH2, IconH3, IconH4, IconH5, IconH6] as string[],
        }
    },
    methods: {
        emitEvent(index: number, event: Event) : void {
            const elmtTarget = event.target as HTMLElement;
            const elmt = elmtTarget.closest("li") as HTMLElement;
            const paternElement = elmt.closest("ul") as HTMLElement;
            const liElement = paternElement.querySelectorAll("li");
            
            for (const key in liElement) {
                const li = liElement[key];
                if (typeof li == "object") {
                    li.classList.remove("selected")
                }
            }
            
            if (!elmt.classList.contains("selected")) {
                elmt.classList.add("selected");
                this.$emit("selected", (index + 1));
            }
        },
        removeSelected(event: Event) {
            const elmtTarget = event.target as HTMLElement;
            const elmt = elmtTarget.closest("li") as HTMLElement;
            const paternElement = elmt.closest("ul") as HTMLElement;
            const liElement = paternElement.querySelectorAll("li");

            for (const key in liElement) {
                const li = liElement[key];
                if (typeof li == "object") {
                    li.classList.remove("selected")
                }
            }
            this.$emit("close");
        },
    },
});
</script>
<style scoped>
.selected {
    color: #38bdf8;
    background: #e5e7eb76;
}

.btn:hover {
    background: #e5e7eb7d;
}

.options {
    left: calc(100% + 0.25rem);
    overflow-x: hidden;
}

</style>