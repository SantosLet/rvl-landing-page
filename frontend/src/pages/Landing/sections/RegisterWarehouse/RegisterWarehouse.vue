<script setup>
import RButton from '@/components/Buttons/RButton.vue';
import RCard from '@/components/Cards/RCard.vue';
import InputBase from '@/components/Inputs/InputBase.vue';
import RCheckbox from '@/components/Inputs/RCheckbox.vue';
import RAsset from '@/components/RAsset/RAsset.vue';
import InputMask from 'primevue/inputmask';
import InputNumber from 'primevue/inputnumber';
import InputText from 'primevue/inputtext';
</script>

<template>
  <section id="registerWarehouse">
    <div class="container-section">
      <header class="header-register-warehouse">
        <h2 class="text-start text-white pb-0"> Cadastre seu armazém </h2>
        <p class="max-w-[30rem] text-white pt-6 pb-10"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        
        <RCard class="w-full tablet:w-max note:absolute right-8 tablet-md:right-16 -bottom-60 z-50 mx-auto p-8">
          <form class="flex flex-col phone-lg:grid grid-cols-2 gap-6">
            <div class="col-span-1">
              <InputBase label="Nome completo">
                <InputText placeholder="Nome Sobrenome"/>
              </InputBase>
            </div>

            <div class="col-span-1">
              <InputBase label="E-mail">
                <InputText placeholder="Digite seu e-mail"/>
              </InputBase>
            </div>

            <div class="col-span-1">
              <InputBase label="Telefone">
                <InputMask mask="+55 (99) 99999-9999" placeholder="+55 (00) 00000-0000"/>
              </InputBase>
            </div>

            <div class="col-span-1">
              <InputBase label="Tamanho do armazém">
                <InputNumber placeholder="500 a 1000 m²" suffix="m²" />
              </InputBase>
            </div>

            <div class="col-span-2">
              <InputBase label="Localização do armazém">
                <InputText placeholder="Endereço"/>
              </InputBase>
            </div>
            
            <div class="col-span-2">
              <RCheckbox label="Aceito os Termos de Condições e Política de Privacidade. Suas informações são confidenciais." />
            </div>

            <div class="col-span-2 justify-self-end">
              <RButton 
                title="RECEBER MAIS INFORMAÇÕES"
                variant="secondary"
                class="w-max"
              />
            </div>
          </form>
        </RCard>
      </header>
      
      <RAsset name="main_image.png" class="main-image"/>

      <div class="second-card-register-warehouse">
        <RCard color="#9FC244" class="tablet:h-96 w-full relative flex flex-col tablet:flex-row -top-24 z-40 p-0">
          <div class="w-full tablet:w-1/2 flex flex-1 flex-col justify-center px-8 tablet:pl-16 pr-8 py-12">
            <h2 class="w-[28rem] max-w-full text-start pb-0"> Cadastre-se agora e diminua sua vacância física </h2>
            <p class="w-[30rem] max-w-full text-white pt-6"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>

          <div class="center btns-register-warehouse">
            <RButton 
              title="ANUNCIAR MEU ARMAZÉM" 
              variant="primary"
            />

            <RButton 
              title="SABER MAIS COM O SUPORTE" 
              variant="tertiary"
            />
          </div>
        </RCard>

        <RAsset name="detail_main_image.png" class="detail-main-image"/>
      </div>
    </div>


    <div class="detail-footer-testimonials"/>
  </section>
</template>

<style scoped>
.container-section {
  @apply bg-primary relative p-0 overflow-hidden;
}

.header-register-warehouse {
  @apply relative;
}

.main-image {
  @apply w-full phone-sm:h-96 object-cover object-right;
}

.second-card-register-warehouse {
  @apply relative tablet-lg:grid grid-rows-[7rem] gap-8 phone-sm:px-8 tablet-lg:px-16;
}

.detail-main-image {
  @apply hidden tablet-lg:block relative -translate-x-1/2 -bottom-32 z-50 ml-12;
}

.btns-register-warehouse {
  @apply 
    w-full 
    tablet:w-1/2 
    flex-1 flex-wrap gap-y-4 
    place-content-center 
    px-4 pb-16 
    tablet:pr-16 tablet:pb-0;
  background-image: url(/src/assets/icons/last_container_detail_icon.svg);
  background-position: center;
  background-size: 100%;
}

@media (min-width: 320px) {
  .header-register-warehouse {
    padding: 5rem 2rem 3rem;
  }
}

@media (min-width: 960px) {
  .main-image {
    height: 30rem;
  }
}

@media (min-width: 1024px) {
  .header-register-warehouse {
    padding: 4.5rem 4rem 2rem;
  }
}
</style>