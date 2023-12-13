<template>
    <div class="editor-component">
        <div class="border rounded">
            <div class="border-b p-2">
                <Toolbar />
            </div>
            <div
                :style="`height: ${height};`"
                ref="editable"
                class="editable h-full focus-visible:outline-none p-2"
                contenteditable="true"
                @input="updateContent"
            >
                <p>Conteúdo inicial</p>
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
            this.$emit("input", element);
        },
    },
});
</script>