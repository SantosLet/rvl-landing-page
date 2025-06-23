<script setup>
import RAsset from '@/components/RAsset/RAsset.vue';

const steps = [
  {
    icon: 'create_account',
    title: "Crie sua conta",
    description: "Informações básicas (nome, e-mail, telefone, dados da empresa)."
  },
  {
    icon: 'describe_warehouse',
    title: "Descreva seu armazém",
    description: "Insira localização, características, capacidade de posições-palete, valor por posição-palete/movimento."
  },
  {
    icon: 'get_prebooked',
    title: "Receba pré-reservas",
    description: "Os clientes enviam solicitações conforme períodos e especificações do armazém desejado."
  },
  {
    icon: 'contract',
    title: "Negocie e feche contrato",
    description: "O proprietário e o cliente entram em contato para definir os detalhes (contrato, valores adicionais, etc.)."
  }
]
</script>

<template>
  <section id="howItWorks" class="container-section">
    <h2> Como funciona? </h2>

    <div class="steps-container">
      <div v-for="(e, i) in steps" :key="i" class="step">
        <RAsset :name="`${e.icon}_icon_green.svg`" class="size-10 self-center"/>

        <div class="relative h-full w-full flex items-center justify-center">
          <div class="step-dot"/>
          <div class="step-line" :class="{ 'first-step' : i == 0, 'last-step' : i == 3}"/>
        </div>

        <p class="font-bold text-primary text-lg">{{ e.title }}</p>
        <p class="phone:max-w-[17rem]">{{ e.description }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
h2 {
  @apply text-start;
}

.steps-container {
  @apply flex flex-wrap justify-center gap-y-14;
}

.step {
  @apply text-center note:flex-1 grid grid-rows-[2.5rem_2rem_max-content_1fr] justify-items-center gap-3;
  width: 22rem;
}

.step-line {
  @apply w-full bg-secondary;
  height: 1px;
}

.first-step, .last-step {
  @apply absolute w-1/2;
}

.first-step {
  @apply right-0;
}

.last-step {
  @apply left-0;
}

.step-dot {
  @apply absolute size-5 bg-secondary rounded-full;
}
</style>