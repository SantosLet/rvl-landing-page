<script setup>
const props = defineProps({
  label: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <div class="checkbox-wrapper">
    <input class="input" id="checkbox-filled-3" type="checkbox"/>
    <label class="checkbox" for="checkbox-filled-3"><span>
    <svg width="12px" height="10px">
      <use xlink:href="#check-4"></use>
    </svg></span><span class="text-gray-dark text-light text-xxs"
    >
      {{ props.label }}
    </span></label>
    <svg class="inline-svg">
      <symbol id="check-4" viewbox="0 0 12 10">
        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
      </symbol>
    </svg>
  </div>
</template>

<style scoped>

</style>