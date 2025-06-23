<script setup>
import { ref, markRaw } from 'vue'
import { sections as importedSections } from '@/pages/Landing/sections/landingSections'
import RButton from '@/components/Buttons/RButton.vue';
import RNavbar from './components/RNavbar.vue';
import RAsset from '@/components/RAsset/RAsset.vue';

const sections = ref(importedSections.map(section => ({
  component: markRaw(section.component),
  props: section.props
})))
</script>

<template>
  <header class="rvl-header">
    <RNavbar/>
  </header>

  <main class="overflow-y-auto scroll-smooth">
    <component 
      v-for="(section, index) in sections" 
      :key="index"
      :is="section.component" 
      v-bind="section.props"
    />

    <footer class="rvl-footer">
      <div class="footer-items">
        <div class="flex items-end gap-4 mr-6 mb-03">
          <RAsset name="facebook_icon_green.svg" /> 
          <RAsset name="instagram_icon_green.svg" />
          <RAsset name="linkedin_icon_green.svg" />
        </div>
    
        <ul class="footer-list-info">
          <li>
            <p> Aluguel </p>
            <a> Aluguel um galpão </a>
            <a> Dúvidas frequentes </a>
          </li>
    
          <li>
            <p> Locatários </p>
            <a> Meus espaços </a>
            <a> Solicitações </a>
          </li>
    
          <li>
            <p> Suporte </p>
            <a> Central de atendimento </a>
            <a> Denuncie </a>
          </li>
        </ul>
    
        <a href="#advertiseWarehouse">
          <RButton 
            class="self-end"
            title="Anuncie seu galpão"
            variant="secondary"
          />
        </a>
      </div>

      <div class="bg-primary h-14 border-t border-secondary"></div>
    </footer>
  </main>
</template>

<style scoped>
.rvl-header {
  @apply bg-primary h-20 w-full border-b-2 border-secondary;
}

.rvl-footer {
  @apply h-max bg-primary my-auto;
}

.footer-items {
  @apply 
    h-max 
    w-full 
    flex 
    flex-wrap-reverse 
    justify-between 
    gap-x-8 
    gap-y-10 
    phone-sm:px-8 
    phone-sm:mx-auto 
    tablet:px-16 
    py-20;
}

.footer-list-info {
  @apply text-white h-max flex flex-wrap gap-x-20 gap-y-10;
}

.footer-list-info > li {
  @apply flex flex-col gap-1;
}

.footer-list-info > li > p {
  @apply font-bold;
}
</style>