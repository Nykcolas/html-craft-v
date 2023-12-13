<template>
  <div class="p-8">
    {{ html }}
    <Editor v-model="html"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Editor from './components/Editor.vue';

export default defineComponent({
  name: 'App',
  components: {
    Editor
  },
  data() {
    return {
      html: "",
    }
  },
});
</script>