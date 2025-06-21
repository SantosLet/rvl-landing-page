<script setup lang="ts">
// const emits = defineEmits([]);

const props = defineProps({
  color: {
    type: String,
    default: '#fff'
  },

  hasShadow: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <div 
    class="p-4 rounded-xl" 
    :class="{ 'shadow-soft': hasShadow}"
    :style="{ backgroundColor: props.color }"
  >
    <slot/>
  </div>
</template>

<style scoped>

</style>