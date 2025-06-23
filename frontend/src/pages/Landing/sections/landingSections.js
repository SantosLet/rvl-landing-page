import { markRaw } from 'vue'
import Advantages from './Advantages/Advantages.vue'
import HowItWorks from './HowItWorks/HowItWorks.vue'
import Testimonials from './Testimonials/Testimonials.vue'
import OurFigures from './OurFigures/OurFigures.vue'
import Faq from './Faq/Faq.vue'
import RegisterWarehouse from './RegisterWarehouse/RegisterWarehouse.vue'
import HeaderRegisterWarehouse from './HeaderRegisterWarehouse/HeaderRegisterWarehouse.vue'

export const sections = [
  { component: markRaw(HeaderRegisterWarehouse), props: {} },
  { component: markRaw(Advantages), props: {} },
  { component: markRaw(HowItWorks), props: {} },
  { component: markRaw(Testimonials), props: {} },
  { component: markRaw(OurFigures), props: {} },
  { component: markRaw(Faq), props: {} },
  { component: markRaw(RegisterWarehouse), props: {} },
]