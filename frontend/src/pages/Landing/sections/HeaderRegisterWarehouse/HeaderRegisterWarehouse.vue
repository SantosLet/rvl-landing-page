<script setup>
import RButton from '@/components/Buttons/RButton.vue';
import RAsset from '@/components/RAsset/RAsset.vue';
</script>

<template>
  <section id="advertiseWarehouse" class="flex flex-wrap-reverse">
    <div class="center header-register-warehouse-items">
      <h1 
        class="tablet-md:max-w-[40rem] phone-sm:text-5xl tablet:text-6xl"
      > Anuncie seu armazém e diminua sua vacância física </h1>

      <p 
        class="submessage-section"
      > Conecte-se com milhares de empresas que buscam espaço de armazenagem e aumente a rentabilidade do seu imóvel. </p>
      
      <a href="#registerWarehouse">
        <RButton 
          class="self-start mt-6 px-7 py-3"
          title="Cadastre seu armazém"
          variant="secondary"
        />
      </a>
    </div>

    <div class="header-register-warehouse-images">
      <RAsset name="main_image.png" class="main-image"/>
      <RAsset name="detail_main_image.png" class="detail-main-image"/>
    </div>
  </section>
</template>

<style scoped>
.header-register-warehouse-items {
  @apply 
    tablet-md:w-1/2 
    flex-col 
    !items-start gap-4 
    phone-sm:px-8 
    phone-sm:py-10 
    tablet-md:px-16 
    mx-auto;
}

.header-register-warehouse-images {
  @apply w-1/2 relative flex-1 overflow-hidden;
}

.submessage-section {
  @apply 
    tablet-md:max-w-[30rem] 
    font-light 
    text-black 
    phone-sm:text-xl 
    tablet:text-2xl 
    leading-7;
}

.main-image {
  @apply phone-sm:h-72 tablet-md:h-screen w-full object-cover;
}

.detail-main-image {
  @apply 
    absolute right-0 bottom-0
    w-auto
    max-h-[50%] 
    tablet-md:w-full
    tablet-md:max-h-full;
}

@media (min-width: 960px) {
  .header-register-warehouse-images {
    height: calc(100vh - 5rem);
  }
}
</style>