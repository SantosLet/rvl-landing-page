<script setup>
const figuresInfo = [
  { number: '+5384', label: 'armazéns cadastrados' },
  { number: '+4268', label: 'check-ins' },
  { number: '%85', label: 'dos armazéns ocupados' }
]
</script>

<template>
  <section id="ourFigures" class="container-section">
    <h2> Nossos números </h2>
      
    <div class="figures-container">
      <div v-for="(e, i) in figuresInfo" :key="i" class="figure-items">
        <h1 class="figure">{{ e.number }}</h1>
        <p class="figure-label">{{ e.label }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container-section {
  @apply phone-sm:py-28 note:py-[7.5rem];
}

.figures-container {
  @apply w-full text-center flex flex-wrap justify-evenly gap-x-8 gap-y-10;
}

.figure {
  @apply text-secondary;
}

.figure-label {
  @apply font-light text-gray-dark;
}
</style>