<template>
  <nav class="flex flex-col gap-2">
    <ul class="header flex">
        <li ref="Heading" :class="`${openHeaders ? 'selected' : ''} border rounded btn cursor-pointer relative`">
            <a @click="openHeaders = !openHeaders" ref="Heading" v-html="IconHeading"></a>
            <transition mode="out-in" name="scale">
                <Headers v-show="openHeaders" :height="height" @selected="selectItem" @close="openHeaders = false" />
            </transition>
        </li>
    </ul>
  </nav>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { IconHeading } from "@codexteam/icons";
import Headers from "./Headers.vue"
export default defineComponent({
    name: "Toolbar",
    components: {
        Headers
    },
    props: {
        height: {
            type: String,
            default: "10rem",
        },
    },
    data() {
        return {
            openHeaders: false as boolean,
            IconHeading: IconHeading as string,
        }
    },
    methods: {
        emitEvent(event: Event) {
            const elmtTarget = event.target as HTMLElement;
            const elmt = elmtTarget.closest('li') as HTMLElement;
            
            if (elmt.classList.contains('selected')) {
                elmt.classList.remove('selected');
            } else {
                elmt.classList.add('selected');
            }
        },
        handleClickOutside(event: Event) {
            const Heading = this.$refs.Heading as HTMLElement;
            const elmt = event.target as HTMLElement;
            if (!Heading.contains(elmt)) {
                this.openHeaders = false;
            }
        },
        selectItem(index: number) {
            const elmt = this.$refs.editable as HTMLElement;
            this.openHeaders = false;
        }
    },
    mounted() {
        document.addEventListener('click', this.handleClickOutside);
    },
    beforeDestroy() {
        document.removeEventListener('click', this.handleClickOutside);
    },
});
</script>
<style scoped>
.selected {
    background: #e5e7eb76;
}
.btn:hover {
    background: #e5e7eb7d;
}

.scale-enter-from,
.scale-leave-to {
    transform: scale(0.9);
    opacity: 0;
}

.scale-enter-active,
.scale-leave-active {
    transition: all 300ms ease;
}

</style>