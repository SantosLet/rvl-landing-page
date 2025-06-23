<script setup>
const props = defineProps({
  label: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="flex flex-col gap-2">
    <p class="font-bold text-primary">{{ label }}</p>

    <slot></slot>
  </div>
</template>

<style scoped>

</style>