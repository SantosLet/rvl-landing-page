<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: ''
  },

  variant: {
    type: String as () => 'primary' | 'secondary' | 'tertiary',
    default: 'primary',
  },
});
</script>

<template>
  <PButton 
    :class="[
      'h-max px-5 py-03 border-2 rounded-full transition-colors duration-150',
      { 
        'primary-button': variant === 'primary',
        'secondary-button': variant === 'secondary',
        'tertiary-button': variant === 'tertiary' 
      },
    ]">
    <p 
      class="text-xs font-semibold font-satoshi uppercase"
    >{{ props.title }}</p>
  </PButton>
</template>

<style scoped>
.primary-button {
  @apply bg-primary text-white border-primary hover:bg-primary-dark hover:border-primary-dark;
}

.secondary-button {
  @apply bg-secondary text-white border-secondary hover:bg-secondary-dark hover:border-secondary-dark;
}

.tertiary-button {
  @apply bg-transparent text-primary border-primary hover:bg-primary/10;
}
</style>