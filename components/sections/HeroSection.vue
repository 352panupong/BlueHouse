<script setup lang="ts">
import { ArrowUpRight, ArrowDownRight } from 'lucide-vue-next'
import type { AgencyContent } from '~/data/content'

defineProps<{
  brand: AgencyContent['brand']
  hero: AgencyContent['hero']
}>()
</script>

<template>
  <section id="top" class="pt-28 pb-20 sm:pt-36 sm:pb-24 md:pt-48 md:pb-36">
    <div class="editorial-container">
      <!-- Top Editorial Meta Bar -->
      <div class="reveal-section flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 pb-6 sm:pb-8 border-b border-neutral-200 dark:border-neutral-800">
        <p class="text-[11px] sm:text-xs font-mono uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
          {{ hero.eyebrow }}
        </p>
        <p class="text-[11px] sm:text-xs font-mono uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
          {{ brand.location }} // NUXT.JS &amp; FASTAPI SPECIALISTS
        </p>
      </div>

      <!-- Oversized Editorial Headline (Responsive fluid sizing so mobile never overflows) -->
      <div class="reveal-section reveal-delay-1 py-10 sm:py-14 md:py-16 lg:py-20">
        <h1 class="text-[1.75rem] sm:text-5xl md:text-6xl lg:text-[4.4rem] font-medium tracking-tight leading-[1.22] sm:leading-[1.14] text-neutral-950 dark:text-neutral-100 max-w-6xl break-words">
          <span
            v-for="(line, index) in hero.headlineLines"
            :key="index"
            class="block"
            :class="index === 1 ? 'text-neutral-500 dark:text-neutral-400 my-1 sm:my-1.5' : ''"
          >
            {{ line }}
          </span>
        </h1>
      </div>

      <!-- Bottom Split: Left short description + Primary CTA | Right availability status + unboxed metrics -->
      <div class="reveal-section reveal-delay-2 pt-8 sm:pt-10 border-t border-neutral-200 dark:border-neutral-800 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
        <!-- Left 7 columns: Concise value description + Primary CTA -->
        <div class="lg:col-span-7 flex flex-col justify-between space-y-7 sm:space-y-8">
          <p class="text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed">
            {{ hero.description }}
          </p>

          <div class="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-4 sm:gap-6">
            <a
              :href="hero.primaryCta.href"
              class="group inline-flex items-center justify-center gap-3 rounded-full bg-[#1D4ED8] hover:bg-[#1E40AF] dark:bg-[#2563EB] dark:hover:bg-[#3B82F6] px-6 sm:px-7 py-3.5 sm:py-4 text-sm md:text-base font-medium text-white transition-all duration-300"
            >
              <span>{{ hero.primaryCta.label }}</span>
              <ArrowUpRight class="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            <a
              :href="hero.secondaryCta.href"
              class="group inline-flex items-center justify-center sm:justify-start gap-2 text-sm md:text-base font-medium text-neutral-900 dark:text-neutral-100 py-2"
            >
              <span class="editorial-link">{{ hero.secondaryCta.label }}</span>
              <ArrowDownRight class="h-4 w-4 text-neutral-500 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
          </div>
        </div>

        <!-- Right 5 columns: Pulsing Availability Status & Frameless Editorial Statistics -->
        <div class="lg:col-span-5 pt-8 lg:pt-0 border-t lg:border-t-0 lg:border-l border-neutral-200 dark:border-neutral-800 lg:pl-10 space-y-6 sm:space-y-8">
          <!-- Status indicator -->
          <div class="inline-flex items-center gap-3">
            <span class="relative flex h-2.5 w-2.5 shrink-0">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span class="text-xs sm:text-sm font-mono uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
              {{ brand.availabilityText }}
            </span>
          </div>

          <!-- Unboxed Stats Row separated only by hairline dividers -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-neutral-200 dark:border-neutral-800 divide-y sm:divide-y-0 divide-neutral-200/70 dark:divide-neutral-800/70">
            <div
              v-for="(metric, idx) in hero.metrics"
              :key="metric.label"
              class="flex sm:block items-baseline justify-between gap-4"
              :class="idx > 0 ? 'pt-4 sm:pt-0' : ''"
            >
              <div class="text-2xl md:text-3xl font-medium tracking-tight text-neutral-950 dark:text-neutral-100 shrink-0">
                {{ metric.value }}
              </div>
              <div class="text-xs text-neutral-500 dark:text-neutral-400 leading-snug text-right sm:text-left sm:mt-1.5">
                {{ metric.label }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
