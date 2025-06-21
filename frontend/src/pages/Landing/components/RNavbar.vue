<script setup>
import RAsset from '@/components/RAsset/RAsset.vue';
import RButton from '@/components/Buttons/RButton.vue';
import RSidebar from './RSidebar.vue';
</script>

<template>
  <nav class="rvl-navbar">
    <RSidebar/>

    <RAsset 
      name="burgermenu_icon_white.svg" 
      class="size-9 note:hidden cursor-pointer"
    />
    
    <ul class="navbar-items">
      <li><a href="#advantages"> Vantagens </a></li>
      <li><a href="#howItWorks"> Como funciona? </a></li>
      <li><a href="#testimonials"> Depoimentos </a></li>
      <li><a href="#ourFigures"> Nossos números </a></li>
      <li><a href="#faq"> FAQ </a></li>
      <li>
        <a href="#advertiseWarehouse">
          <RButton 
            title="Anuncie seu galpão"
            variant="secondary"
          />
        </a>
      </li>
      <li>
        <a class="flex gap-3 ml-4"> 
          <p> Entrar na conta </p>
          <RAsset name="user_icon_white.svg" class="user-icon"/>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.rvl-navbar {
  @apply h-full flex items-center px-8 tablet:px-16;
}

.navbar-items {
  @apply w-full text-white hidden note:inline-flex items-center justify-end gap-10;
}

.user-icon {
  @apply h-6;
}
</style>