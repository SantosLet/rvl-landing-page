<script setup>
import { useAsset } from '@/composables/useAsset';

const props = defineProps({
  name: { 
    type: String, 
    required: true 
  }, 

  alt: { 
    type: String, 
    default: '' 
  },

  customClass: { 
    type: String, 
    default: '' 
  },

  loading: { 
    type: String, 
    default: 'lazy' 
  },
});

const src = useAsset(props.name);
</script>

<template>
  <img
    :src="src"
    :alt="alt"
    :class="customClass"
  />
</template>
