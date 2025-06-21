<script setup lang="ts">
import { computed } from 'vue'
import icons from '@/components/RAsset/RCustomIcon/customIcon.js'

const props = defineProps({
  name: { 
    type: String, 
    required: true 
  },

  size: { 
    type: [String, Number], 
    default: 24 
  },

  fill: { 
    type: String, 
    default: 'none' 
  }, 

  stroke: { 
    type: String, 
    default: 'currentColor' 
  }
})

const iconData = computed(() => {
  const icon = icons[props.name]
  if (!icon) 
    return { path: '', viewBox: '0 0 24 24' }
  return icon
})
</script>

<template>
  <svg
    :width="size"
    :height="size"
    :fill="fill"
    :stroke="stroke"
    :viewBox="iconData.viewBox"
    xmlns="http://www.w3.org/2000/svg"
    v-html="iconData.path"
  ></svg>
</template>