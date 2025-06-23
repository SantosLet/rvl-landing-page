<script setup>
import RCard from '@/components/Cards/RCard.vue';
import RatingReadonly from '@/components/Inputs/RatingReadonly.vue';

const cardsInfo = [
  { stars: 5 },
  { stars: 4 },
  { stars: 5 },
]
</script>

<template>
  <section id="testimonials" class="bg-gray-medium container-section">
    <h2> Depoimentos </h2>
    
    <div class="cards-container">
      <RCard
        v-for="(e, i) in cardsInfo" 
        :key="i" 
        class="card"
        :has-shadow="true"
      >
        <RatingReadonly :stars="e.stars" />
        
        <p class="comment">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <p class="font-bold text-primary"> — Lorem Ipsum </p>

        <p class="text-black text-sm pl-6"> Coca-cola </p>
      </RCard>
    </div>
  </section>
</template>

<style scoped>
.container-section {
  @apply phone-sm:pb-28 note:pb-40;
}

.cards-container {
  @apply flex flex-wrap gap-6;
}

.card {
  @apply 
    phone-sm:min-w-64
    tablet-md:min-w-80
    phone-sm:!p-8 
    phone:!p-10
    tablet:!p-12;
}

.comment {
  @apply font-light text-gray-dark text-[1.05rem] pt-4 pb-2;
}

@media (min-width: 320px) {
  .card:first-child { flex: 1; }
  .card:nth-child(2) { flex: 1; }
  .card:nth-child(3) { flex: 1 1 100%; }
}

@media (min-width: 960px) {
  .card:first-child { flex: 1 1 30% }
  .card:nth-child(2) { flex: 1 1 30% }
  .card:nth-child(3) { flex: 1 1 30% }
}
</style>