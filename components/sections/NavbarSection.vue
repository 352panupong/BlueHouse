<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowUpRight, Sun, Moon, Menu, X } from 'lucide-vue-next'
import type { NavItem } from '~/data/content'

defineProps<{
  brandShortName: string
  navigation: NavItem[]
  isDark: boolean
}>()

const emit = defineEmits<{
  (e: 'toggleTheme'): void
}>()

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 24
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-colors duration-300"
    :class="[
      isScrolled
        ? 'backdrop-blur-md bg-[#F8F8F6]/85 dark:bg-[#0A0A0A]/85 border-b border-neutral-200/80 dark:border-neutral-800/80'
        : 'bg-transparent',
    ]"
  >
    <div class="editorial-container flex h-20 items-center justify-between">
      <!-- Left: Text Logo uppercase with wide tracking -->
      <a
        href="#top"
        class="text-xs md:text-sm font-semibold uppercase tracking-[0.22em] text-neutral-950 dark:text-neutral-100 transition-opacity hover:opacity-75 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
      >
        {{ brandShortName }}
      </a>

      <!-- Right: 4 menu links + theme switch + Pill CTA -->
      <nav aria-label="Main Navigation" class="hidden md:flex items-center gap-8 lg:gap-10">
        <a
          v-for="item in navigation"
          :key="item.href"
          :href="item.href"
          class="editorial-link text-sm font-medium text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
        >
          {{ item.label }}
        </a>

        <button
          type="button"
          aria-label="สลับโหมดสี Light / Dark"
          class="inline-flex h-9 w-9 items-center justify-center rounded-full text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors cursor-pointer"
          @click="emit('toggleTheme')"
        >
          <Sun v-if="isDark" class="h-4 w-4" />
          <Moon v-else class="h-4 w-4" />
        </button>

        <a
          href="#contact"
          class="group inline-flex items-center gap-2 rounded-full bg-[#1D4ED8] hover:bg-[#1E40AF] dark:bg-[#2563EB] dark:hover:bg-[#3B82F6] px-5 py-2.5 text-sm font-medium text-white transition-all duration-300"
        >
          <span>เริ่มโปรเจกต์</span>
          <ArrowUpRight class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </nav>

      <!-- Mobile menu controls -->
      <div class="flex items-center gap-3 md:hidden">
        <button
          type="button"
          aria-label="สลับโหมดสี Light / Dark"
          class="inline-flex h-9 w-9 items-center justify-center rounded-full text-neutral-700 dark:text-neutral-300"
          @click="emit('toggleTheme')"
        >
          <Sun v-if="isDark" class="h-4 w-4" />
          <Moon v-else class="h-4 w-4" />
        </button>

        <button
          type="button"
          :aria-expanded="mobileMenuOpen"
          aria-label="เปิดเมนูนำทาง"
          class="inline-flex h-10 w-10 items-center justify-center text-neutral-900 dark:text-neutral-100"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <X v-if="mobileMenuOpen" class="h-5 w-5" />
          <Menu v-else class="h-5 w-5" />
        </button>
      </div>
    </div>

    <!-- Mobile Hairline Dropdown (No card box, pure full-width editorial rows) -->
    <div
      v-if="mobileMenuOpen"
      class="md:hidden bg-[#F8F8F6] dark:bg-[#0A0A0A] border-b border-neutral-200 dark:border-neutral-800"
    >
      <nav aria-label="Mobile Navigation" class="editorial-container py-6 flex flex-col">
        <a
          v-for="item in navigation"
          :key="item.href"
          :href="item.href"
          class="py-4 border-t border-neutral-200 dark:border-neutral-800 text-lg font-medium text-neutral-900 dark:text-neutral-100 flex items-center justify-between"
          @click="closeMobileMenu"
        >
          <span>{{ item.label }}</span>
          <ArrowUpRight class="h-4 w-4 text-neutral-400" />
        </a>
        <div class="pt-6 border-t border-neutral-200 dark:border-neutral-800">
          <a
            href="#contact"
            class="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1D4ED8] px-6 py-3.5 text-sm font-medium text-white"
            @click="closeMobileMenu"
          >
            <span>เริ่มโปรเจกต์</span>
            <ArrowUpRight class="h-4 w-4" />
          </a>
        </div>
      </nav>
    </div>
  </header>
</template>
