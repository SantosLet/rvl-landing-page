<script setup>
import RCard from '@/components/Cards/RCard.vue';
import RAsset from '@/components/RAsset/RAsset.vue';

const cardsInfo = [
  { 
    icon: 'piechart_icon_green.svg', 
    title: 'Diminua a vacância física', 
    description: 'Destaque como o marketplace leva mais interessados ao seu armazém.'
  },
  { 
    icon: 'chartline_icon_green.svg', 
    title: 'Rentabilize seu espaço', 
    description: 'Explique como é possível gerar receita extra a partir de áreas ociosas.'
  },
  { 
    icon: 'wifi_icon_green.svg', 
    title: 'Maior alcance e visibilidade', 
    description: 'Divulgação online, presença em redes sociais e alcance de um público segmentado que realmente precisa de armazém.'
  },
  { 
    icon: 'check_icon_green.svg', 
    title: 'Processo simplificado de pré-reserva', 
    description: 'O sistema cuida da parte burocrática inicial, permitindo que o proprietário negocie os detalhes com o cliente.'
  },
  { 
    icon: 'lock_icon_green.svg', 
    title: 'Suporte e segurança', 
    description: 'Menção a suporte em todas as etapas, desde o cadastro até a eventual negociação.'
  }
]
</script>

<template>
  <section id="advantages" class="bg-gray-light container-section">
    <h2> Vantagens </h2>

    <div class="cards-container">
      <RCard 
        v-for="(e, i) in cardsInfo" 
        :key="i" 
        class="card"
        :color="(i + 1) % 2 == 0 ? '#F5F9EA' : '#FFF'"
        :has-shadow="true"
      >
        <RAsset :name="e.icon" class="size-9 self-end mb"/>

        <p 
          class="leading-none font-semibold text-secondary text-lg mt-3 mb-auto"
        >{{ e.title }}</p>

        <p class="text-black">{{ e.description }}</p>
      </RCard>
    </div>
  </section>
</template>

<style scoped>
.cards-container {
  @apply flex flex-wrap gap-6;
}

.card {
  @apply 
    phone-sm:min-w-52 
    phone:min-w-64 
    grid grid-rows-[4.5rem_repeat(2,max-content)] 
    gap-4 
    phone-sm:!px-8 
    phone:!px-10 
    !pb-8;
}

@media (min-width: 320px) {
  .card:first-child { flex: 1; }
  .card:nth-child(2) { flex: 1; }
  .card:nth-child(3) { flex: 1 1 100%; }
  .card:nth-child(4) { flex: 1; }
  .card:last-child { flex: 1; }
}

@media (min-width: 960px) {
  .card:first-child { flex: 1 1 30% }
  .card:nth-child(2) { flex: 1 1 30% }
  .card:nth-child(3) { flex: 1 1 30% }
  .card:nth-child(4) { flex: 1 1 45% }
  .card:last-child { flex: 1 1 45% }
}
</style>