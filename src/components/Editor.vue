<template>
    <div class="html-craft-v">
        <div class="border rounded">
            <div class="border-b p-2">
                <Toolbar :height="height" />
            </div>
            <div
                :style="`height: ${height};`"
                ref="editable"
                class="editable h-full focus-visible:outline-none p-2 overflow-x-hidden"
                contenteditable
                @input="updateContent"
            >
                <p>primeiro codigo</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Toolbar from "./Toolbar.vue"
export default defineComponent({
    name: "Editor",
    components: {
        Toolbar
    },
    props: {
        height: {
            type: String,
            default: "10rem",
        },
    },
    methods: {
        updateContent() {
            const element = this.$refs.editable as HTMLElement;
            this.$emit("update:modelValue", element.innerHTML);
        },
    },
});
</script>