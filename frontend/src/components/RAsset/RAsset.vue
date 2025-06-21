<script setup>
import { useAsset } from '@/components/RAsset/composables/useAsset';

const props = defineProps({
  name: { 
    type: String, 
    required: true 
  }, 

  alt: { 
    type: String, 
    default: '' 
  },
});

const src = useAsset(props.name);
</script>

<template>
  <img
    :src="src"
    :alt="alt"
  />
</template>
