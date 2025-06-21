<script setup>
import { ref } from 'vue'
import { sections as importedSections } from '@/pages/Landing/sections/landingSections'
// const emits = defineEmits([]);

// const props = defineProps({

// });

const sections = ref(importedSections)
</script>

<template>
  <header>
    <nav></nav>
  </header>

  <main>
    <component 
      v-for="(section, index) in sections" 
      :key="index"
      :is="section.component" 
      v-bind="section.props"
    />
  </main>

  <footer>
    
  </footer>
</template>

<style scoped>

</style>