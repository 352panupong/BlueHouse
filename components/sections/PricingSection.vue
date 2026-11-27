<script setup lang="ts">
import { ArrowUpRight, Check, Minus } from 'lucide-vue-next'
import type { AgencyContent, PricingPackage } from '~/data/content'

defineProps<{
  section: AgencyContent['pricingSection']
  selectedPackageName?: string
}>()

const emit = defineEmits<{
  (e: 'selectPackage', pkg: PricingPackage): void
}>()
</script>

<template>
  <section id="pricing" class="py-24 md:py-36 border-t border-neutral-200 dark:border-neutral-800">
    <div class="editorial-container">
      <!-- Editorial Section Header (Asymmetric 12-Column Split) -->
      <div class="reveal-section grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 pb-14 md:pb-24 items-end">
        <div class="lg:col-span-7 space-y-4">
          <p class="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
            {{ section.eyebrow }}
          </p>
          <h2 class="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-neutral-950 dark:text-neutral-100">
            {{ section.title }}
          </h2>
        </div>
        <div class="lg:col-span-5">
          <p class="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 max-w-xl leading-relaxed">
            {{ section.description }}
          </p>
        </div>
      </div>

      <!-- Anti-Card Editorial Pricing Ledger:
           - Desktop: 3 columns separated by thin vertical hairlines (lg:divide-x)
           - Mobile: Stacked rows separated by thin horizontal hairlines (divide-y)
           - ZERO card boxes, ZERO drop shadows, ZERO rounded-xl borders -->
      <div class="reveal-section reveal-delay-1 grid grid-cols-1 lg:grid-cols-3 border-t border-b border-neutral-200 dark:border-neutral-800 divide-y lg:divide-y-0 lg:divide-x divide-neutral-200 dark:divide-neutral-800">
        <article
          v-for="(pkg, idx) in section.packages"
          :key="pkg.id"
          class="py-12 sm:py-14 flex flex-col justify-between transition-colors duration-300"
          :class="[
            idx % 3 === 0 ? 'lg:pr-10' : '',
            idx % 3 === 1 ? 'lg:px-10' : '',
            idx % 3 === 2 ? 'lg:pl-10' : '',
            idx >= 3 ? 'lg:border-t lg:border-neutral-200 dark:lg:border-neutral-800' : '',
            pkg.popular ? 'bg-neutral-200/20 dark:bg-neutral-900/35' : '',
          ]"
        >
          <!-- Top Meta, Title & Price -->
          <div class="space-y-8">
            <!-- Index & Popular Indicator (Editorial Tag, not a glossy badge) -->
            <div class="flex items-center justify-between gap-4 border-b border-neutral-200 dark:border-neutral-800 pb-4">
              <span class="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500">
                PLAN {{ pkg.number }}
              </span>

              <span
                v-if="pkg.popular"
                class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-[#1D4ED8] dark:text-[#3B82F6] font-semibold"
              >
                <span class="h-1.5 w-1.5 rounded-full bg-[#1D4ED8] dark:bg-[#3B82F6]"></span>
                <span>{{ pkg.popularLabel ?? 'ยอดนิยม' }}</span>
              </span>
            </div>

            <!-- Package Name & Tagline -->
            <div class="space-y-2.5">
              <h3 class="text-2xl sm:text-3xl font-medium tracking-tight text-neutral-950 dark:text-neutral-100">
                {{ pkg.name }}
              </h3>
              <p class="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed min-h-[2.5rem]">
                {{ pkg.tagline }}
              </p>
            </div>

            <!-- High-Contrast Typographic Price -->
            <div class="pt-6 border-t border-neutral-200 dark:border-neutral-800 space-y-1">
              <div class="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                {{ pkg.pricePrefix }}
              </div>
              <div class="flex items-baseline gap-2">
                <span
                  class="text-4xl sm:text-5xl font-medium tracking-tight"
                  :class="pkg.popular ? 'text-[#1D4ED8] dark:text-[#3B82F6]' : 'text-neutral-950 dark:text-neutral-100'"
                >
                  {{ pkg.priceAmount }}
                </span>
                <span class="text-base font-medium text-neutral-500 dark:text-neutral-400">
                  {{ pkg.priceUnit }}
                </span>
              </div>
            </div>

            <!-- Included Features List -->
            <div class="pt-6 border-t border-neutral-200 dark:border-neutral-800 space-y-4">
              <div class="text-[11px] font-mono uppercase tracking-[0.18em] text-neutral-400 dark:text-neutral-500">
                INCLUDED // สิ่งที่ได้รับ
              </div>
              <ul class="space-y-3">
                <li
                  v-for="item in pkg.included"
                  :key="item"
                  class="text-sm text-neutral-800 dark:text-neutral-200 flex items-start gap-3"
                >
                  <Check class="h-4 w-4 shrink-0 mt-0.5 text-[#1D4ED8] dark:text-[#3B82F6]" />
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>

            <!-- Excluded Features List (Muted / Faded when present) -->
            <div
              v-if="pkg.excluded.length > 0"
              class="pt-6 border-t border-neutral-200/80 dark:border-neutral-800/80 space-y-4"
            >
              <div class="text-[11px] font-mono uppercase tracking-[0.18em] text-neutral-400/80 dark:text-neutral-600">
                NOT INCLUDED // สิ่งที่ไม่รวม
              </div>
              <ul class="space-y-2.5">
                <li
                  v-for="item in pkg.excluded"
                  :key="item"
                  class="text-sm text-neutral-400 dark:text-neutral-600 flex items-start gap-3 line-through decoration-neutral-300 dark:decoration-neutral-700"
                >
                  <Minus class="h-4 w-4 shrink-0 mt-0.5 text-neutral-300 dark:text-neutral-700" />
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Bottom Package Selection Action -->
          <div class="pt-10 mt-10 border-t border-neutral-200 dark:border-neutral-800">
            <button
              type="button"
              class="group w-full inline-flex items-center justify-between rounded-full px-6 py-4 text-sm font-medium transition-all duration-300 cursor-pointer"
              :class="
                pkg.popular
                  ? 'bg-[#1D4ED8] hover:bg-[#1E40AF] dark:bg-[#2563EB] dark:hover:bg-[#3B82F6] text-white'
                  : 'border border-neutral-900 dark:border-neutral-200 text-neutral-950 dark:text-neutral-100 hover:bg-neutral-950 hover:text-white dark:hover:bg-neutral-100 dark:hover:text-neutral-950'
              "
              @click="emit('selectPackage', pkg)"
            >
              <span>{{ pkg.ctaLabel }}</span>
              <ArrowUpRight class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
