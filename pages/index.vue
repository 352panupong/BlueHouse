<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { agencyContent, type PricingPackage } from '~/data/content'
import { useScrollReveal } from '~/composables/useScrollReveal'
import NavbarSection from '~/components/sections/NavbarSection.vue'
import HeroSection from '~/components/sections/HeroSection.vue'
import ServicesSection from '~/components/sections/ServicesSection.vue'
import WorkShowcase from '~/components/sections/WorkShowcase.vue'
import PricingSection from '~/components/sections/PricingSection.vue'
import ProcessSection from '~/components/sections/ProcessSection.vue'
import ContactFooter from '~/components/sections/ContactFooter.vue'

useSeoMeta({
  title: `${agencyContent.brand.name} — รับทำเว็บไซต์ธุรกิจและพัฒนาระบบ Web Application (Nuxt.js & FastAPI)`,
  description: agencyContent.hero.description,
  ogTitle: `${agencyContent.brand.name} — Full-Stack Web Engineering Studio`,
  ogDescription: agencyContent.hero.description,
  ogType: 'website',
})

const isDark = ref(false)
const selectedPackage = ref<PricingPackage | null>(null)

const applyThemeClass = (dark: boolean) => {
  if (typeof document !== 'undefined') {
    document.documentElement.classList.toggle('dark', dark)
  }
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  applyThemeClass(isDark.value)
}

const handleSelectPackage = async (pkg: PricingPackage) => {
  selectedPackage.value = { ...pkg }
  await nextTick()
  if (typeof document !== 'undefined') {
    const contactEl = document.getElementById('contact')
    contactEl?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    const subjectInput = document.getElementById('inquiry-subject') as HTMLInputElement | null
    setTimeout(() => {
      subjectInput?.focus({ preventScroll: true })
    }, 650)
  }
}

useScrollReveal('.reveal-section')

onMounted(() => {
  applyThemeClass(isDark.value)
})
</script>

<template>
  <div class="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] selection:bg-[#1D4ED8] selection:text-white">
    <NavbarSection
      :brand-short-name="agencyContent.brand.shortName"
      :navigation="agencyContent.navigation"
      :is-dark="isDark"
      @toggle-theme="toggleTheme"
    />

    <main>
      <HeroSection
        :brand="agencyContent.brand"
        :hero="agencyContent.hero"
      />

      <ServicesSection
        :section="agencyContent.servicesSection"
      />

      <!-- <WorkShowcase
        :section="agencyContent.worksSection"
      /> -->

      <PricingSection
        :section="agencyContent.pricingSection"
        :selected-package-name="selectedPackage?.name"
        @select-package="handleSelectPackage"
      />

      <ProcessSection
        :section="agencyContent.processSection"
      />
    </main>

    <ContactFooter
      :brand="agencyContent.brand"
      :contact="agencyContent.contact"
      :selected-package="selectedPackage"
    />
  </div>
</template>
