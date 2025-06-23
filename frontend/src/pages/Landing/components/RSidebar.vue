<script setup>
import RButton from '@/components/Buttons/RButton.vue';
import RAsset from '@/components/RAsset/RAsset.vue';

const emits = defineEmits(["close"])

const props = defineProps({
  itsOpen: {
    type: Boolean,
    default: false
  }
})

const closeSidebar = () => {
  emits('close', false)
}

const navLinks = [
  { href: '#advantages', text: 'Vantagens' },
  { href: '#howItWorks', text: 'Como funciona?' },
  { href: '#testimonials', text: 'Depoimentos' },
  { href: '#ourFigures', text: 'Nossos números' },
  { href: '#faq', text: 'FAQ' }
]
</script>

<template>
  <Transition name="sidebar">
    <navbar v-if="itsOpen" class="rvl-sidebar-nav">
      <header class="header-sidebar" @click="closeSidebar">
        <RAsset 
          name="burgermenu_right_icon_white.svg" 
          class="size-7 place-self-end select-none"
        />
      </header>

      <div class="separator-dark"/>

      <ul class="navbar-items">
        <li v-for="(e, i) in navLinks" :key="i">
          <a :href="e.href" @click="closeSidebar">{{ e.text }}</a>
        </li>

        <li class="btn-warehouse">
          <a href="#advertiseWarehouse" @click="closeSidebar">
            <RButton 
              title="Anuncie seu galpão"
              variant="secondary"
            />
          </a>
        </li>
      </ul>

      <a class="flex gap-3 place-self-center py-4" @click="closeSidebar"> 
        <p>Entrar na conta</p>
        <RAsset name="user_icon_white.svg" class="user-icon"/>
      </a>
    </navbar>
  </Transition>
</template>

<style scoped>
.rvl-sidebar-nav {
  @apply 
    absolute top-0 left-0
    h-screen
    w-52 
    text-white
    bg-primary 
    grid grid-rows-[repeat(2,max-content)_1fr]
    gap-2;
    z-index: 1000;
  -webkit-box-shadow: 2px 0px 10px 0px rgba(65, 65, 65, 0.748);
  -moz-box-shadow: 2px 0px 10px 0px rgba(65, 65, 65, 0.748);
  box-shadow: 2px 0px 10px 0px rgba(65, 65, 65, 0.748);
}

.sidebar-enter-active,
.sidebar-leave-active {
  transition: all 0.3s ease;
}

.sidebar-enter-from,
.sidebar-leave-to {
  transform: translateX(-13rem);
}

.sidebar-enter-to,
.sidebar-leave-from {
  transform: translateX(0);
}

.header-sidebar {
  @apply cursor-pointer px-4 py-2;
}

.separator-dark {
  @apply bg-secondary shadow-none;
}

.navbar-items > li:not(.btn-warehouse) {
  @apply 
    px-6 py-4 
    hover:bg-primary-dark 
    cursor-pointer
    duration-150;
}

.btn-warehouse {
  @apply place-self-center scale-90 py-4;
}

.user-icon {
  @apply size-6;
}
</style>