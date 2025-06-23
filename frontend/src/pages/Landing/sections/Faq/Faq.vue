<script setup>
import RButton from '@/components/Buttons/RButton.vue';
import RAsset from '@/components/RAsset/RAsset.vue';
import { ref } from 'vue';

class Question {
  constructor(title, answer) {
    this.title = title
    this.answer = answer
    this.isOpen = false
  }
}

const questions = ref([
  new Question(
    'Há algum custo para anunciar?',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  ),
  new Question(
    'Como é feita a pré-reserva?',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  ),
  new Question(
    'Como recebo o pagamento?',
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  ),
  new Question(
    'É seguro alugar para qualquer tipo de mercadoria?',
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  ),
  new Question(
    'Preciso de um contrato físico?',
    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  )
])

const currentOpenIndex = ref(null)

const toggleQuestion = (index) => {
  const isSame = currentOpenIndex.value === index
  
  if (currentOpenIndex.value !== null) {
    questions.value[currentOpenIndex.value].isOpen = false
  }

  if (!isSame) {
    questions.value[index].isOpen = true
    currentOpenIndex.value = index
  } else {
    currentOpenIndex.value = null
  }
}
</script>

<template>
  <section id="faq" class="relative overflow-hidden">
    <div class="detail-footer-testimonials"/>

    <div class="bg-gray-light faq-container container-section">
      <div>
        <h2 class="text-left"> Perguntas frequentes </h2>
        <p class="max-w-[30rem] pt-6 pb-10"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        
        <RButton 
          title="fale com o suporte" 
          variant="tertiary" 
          class="px-6 py-2"
        />
      </div>

      <div class="questions-container">
        <div 
          v-for="(question, i) in questions" 
          :key="i"
        >
          <div class="question-header" @click="toggleQuestion(i)">
            <p class="font-bold !text-primary text-lg">{{ question.title }}</p>

            <RAsset v-if="question.isOpen"
              name="minus_icon_green.svg" 
              class="w-5 h-5 ml-2"
            />

            <RAsset v-else
              name="plus_icon_green.svg" 
              class="w-5 h-5 ml-2"
            />
          </div>

          <Transition name="slide-fade">
            <div 
              v-if="question.isOpen" 
              class="question-answer"
              :class="{ 'mb-5' : i + 1 !== questions.length }"
            >
              <p>{{ question.answer }}</p>
            </div>
          </Transition>

          <div v-if="i + 1 !== questions.length" class="question-separator"/>
        </div>
      </div>
    </div>

    <RAsset name="faq_detail_icon_green.svg" class="absolute left-0 -bottom-4 z-40 size-96"/>
  </section>
</template>

<style scoped>
.faq-container {
  @apply flex flex-wrap content-start justify-center gap-8;
  height: 65rem;
}

h2 {
  padding-bottom: 0;
}

p {
  @apply text-gray-dark select-none;
}

.question-header {
  @apply min-h-16 flex justify-between items-center cursor-pointer;
}

.question-answer {
  @apply overflow-hidden;
}

.question-separator {
  @apply border-b border-secondary;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
  display: block;
  overflow: hidden;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  max-height: 0;
}

.slide-fade-enter-to,
.slide-fade-leave-from {
  opacity: 1;
  max-height: 500px;
}

.faq-container > div {
  flex: 1 1 100%; 
}

.questions-container {
  @apply relative z-50;
}

@media (min-width: 960px) {
  .faq-container > div {
    flex: 1 1 45%;
  }
  .questions-container { 
    flex: 1 1 45% 
  }

  .faq-container {
    height: 42rem;
  }
}
</style>