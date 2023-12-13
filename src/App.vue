<template>
  <div class="p-8">
    <Editor />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Editor from './components/Editor.vue';

export default defineComponent({
  name: 'App',
  components: {
    Editor
  }
});
</script>