<script setup lang="ts">
import { ref } from 'vue'
import { ArrowUpRight, Plus, Minus } from 'lucide-vue-next'
import type { AgencyContent } from '~/data/content'

const props = defineProps<{
  section: AgencyContent['servicesSection']
}>()

const activeServiceId = ref<string>(props.section.items[0]?.id ?? '')

const toggleService = (id: string) => {
  activeServiceId.value = activeServiceId.value === id ? '' : id
}
</script>

<template>
  <section id="services" class="py-24 md:py-36 border-t border-neutral-200 dark:border-neutral-800">
    <div class="editorial-container">
      <!-- Asymmetric 12-Column Grid: Left 4 cols sticky header, Right 8 cols interactive hairline list -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        <!-- Left 4 columns: Sticky Section Header -->
        <div class="reveal-section lg:col-span-4 lg:sticky lg:top-28 space-y-4 sm:space-y-5">
          <p class="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
            {{ section.eyebrow }}
          </p>
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-neutral-950 dark:text-neutral-100">
            {{ section.title }}
          </h2>
          <p class="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-sm">
            {{ section.description }}
          </p>
          <div class="pt-2 hidden lg:block">
            <p class="text-xs font-mono text-neutral-400 dark:text-neutral-500">
              คลิกที่แต่ละรายการเพื่อดูขอบเขตงานและ Tech Stack
            </p>
          </div>
        </div>

        <!-- Right 8 columns: Full-width Interactive Hairline Rows (Zero Cards) -->
        <div class="reveal-section reveal-delay-1 lg:col-span-8 border-b border-neutral-200 dark:border-neutral-800">
          <div
            v-for="service in section.items"
            :key="service.id"
            class="border-t border-neutral-200 dark:border-neutral-800 transition-colors duration-200"
            :class="
              activeServiceId === service.id
                ? 'bg-neutral-200/35 dark:bg-neutral-900/50'
                : 'hover:bg-neutral-200/25 dark:hover:bg-neutral-900/30'
            "
          >
            <!-- Row Trigger Button -->
            <button
              type="button"
              :aria-expanded="activeServiceId === service.id"
              :aria-controls="`service-panel-${service.id}`"
              class="group w-full text-left py-7 sm:py-8 md:py-10 px-2 sm:px-4 md:px-6 flex items-start justify-between gap-4 sm:gap-6 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              @click="toggleService(service.id)"
            >
              <div class="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8">
                <span class="text-xs sm:text-sm font-mono text-neutral-400 dark:text-neutral-500 shrink-0">
                  {{ service.number }} /
                </span>
                <div class="space-y-1.5 sm:space-y-2">
                  <h3 class="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-neutral-950 dark:text-neutral-100 group-hover:text-[#1D4ED8] dark:group-hover:text-[#3B82F6] transition-colors">
                    {{ service.title }}
                  </h3>
                  <p class="text-sm md:text-base text-neutral-500 dark:text-neutral-400">
                    {{ service.subtitle }}
                  </p>
                </div>
              </div>

              <span class="mt-1 shrink-0 inline-flex items-center gap-2 text-neutral-400 group-hover:text-neutral-950 dark:group-hover:text-neutral-100 transition-colors">
                <ArrowUpRight
                  class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
                <Minus v-if="activeServiceId === service.id" class="h-4 w-4" />
                <Plus v-else class="h-4 w-4" />
              </span>
            </button>

            <!-- Expanded Content Panel (Editorial columns, no card boxes) -->
            <div
              v-show="activeServiceId === service.id"
              :id="`service-panel-${service.id}`"
              class="px-2 sm:px-4 md:px-6 pb-8 sm:pb-10 pt-2 sm:pl-20 space-y-6 sm:space-y-8"
            >
              <p class="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 max-w-2xl leading-relaxed">
                {{ service.description }}
              </p>

              <div class="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 pt-6 border-t border-neutral-200/80 dark:border-neutral-800/80">
                <!-- Deliverables list -->
                <div class="md:col-span-7 space-y-3">
                  <h4 class="text-xs font-mono uppercase tracking-[0.18em] text-neutral-400 dark:text-neutral-500">
                    KEY DELIVERABLES
                  </h4>
                  <ul class="space-y-2">
                    <li
                      v-for="item in service.deliverables"
                      :key="item"
                      class="text-sm text-neutral-700 dark:text-neutral-300 flex items-baseline gap-3"
                    >
                      <span class="text-[#1D4ED8] dark:text-[#3B82F6] font-mono text-xs">—</span>
                      <span>{{ item }}</span>
                    </li>
                  </ul>
                </div>

                <!-- Tech Stack -->
                <div class="md:col-span-5 space-y-3">
                  <h4 class="text-xs font-mono uppercase tracking-[0.18em] text-neutral-400 dark:text-neutral-500">
                    CORE TECH STACK
                  </h4>
                  <div class="flex flex-wrap gap-x-4 gap-y-2">
                    <span
                      v-for="tech in service.techStack"
                      :key="tech"
                      class="text-sm font-mono text-neutral-900 dark:text-neutral-100 underline decoration-neutral-300 dark:decoration-neutral-700 underline-offset-4"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
