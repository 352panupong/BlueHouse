<script setup lang="ts">
import { ref, computed } from 'vue'
import { ArrowUpRight } from 'lucide-vue-next'
import type { AgencyContent, WorkItem } from '~/data/content'
import { useAssetUrl } from '~/composables/useAssetUrl'
import CaseStudyDrawer from '~/components/sections/CaseStudyDrawer.vue'

const props = defineProps<{
  section: AgencyContent['worksSection']
}>()

const { withBase } = useAssetUrl()

const selectedWorkId = ref<string | null>(null)

const activeWork = computed<WorkItem | null>(() => {
  if (!selectedWorkId.value) return null
  return props.section.items.find((item) => item.id === selectedWorkId.value) ?? null
})

const openCaseStudy = (work: WorkItem) => {
  selectedWorkId.value = work.id
}

const closeCaseStudy = () => {
  selectedWorkId.value = null
}

const navigateCaseStudy = (direction: 'prev' | 'next') => {
  const items = props.section.items
  if (!selectedWorkId.value || items.length === 0) return
  const currentIndex = items.findIndex((item) => item.id === selectedWorkId.value)
  if (currentIndex === -1) return
  const nextIndex =
    direction === 'next'
      ? (currentIndex + 1) % items.length
      : (currentIndex - 1 + items.length) % items.length
  selectedWorkId.value = items[nextIndex]?.id ?? null
}
</script>

<template>
  <section id="works" class="py-24 md:py-36 border-t border-neutral-200 dark:border-neutral-800">
    <div class="editorial-container">
      <!-- Section Header (Asymmetric 12-col split) -->
      <div class="reveal-section grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 pb-14 md:pb-24 items-end">
        <div class="lg:col-span-7 space-y-4">
          <p class="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
            {{ section.eyebrow }}
          </p>
          <h2 class="text-3xl sm:text-5xl md:text-7xl font-medium tracking-tight text-neutral-950 dark:text-neutral-100">
            {{ section.title }}
          </h2>
        </div>
        <div class="lg:col-span-5">
          <p class="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 max-w-xl leading-relaxed">
            {{ section.description }}
          </p>
        </div>
      </div>

      <!-- Editorial Case Studies List (Split-Screen & Full-Bleed Showcase, ZERO cards) -->
      <div class="divide-y divide-neutral-200 dark:divide-neutral-800 border-t border-b border-neutral-200 dark:border-neutral-800">
        <article
          v-for="(work, index) in section.items"
          :key="work.id"
          role="button"
          tabindex="0"
          :aria-label="`เปิดอ่าน Case Study ${work.title}`"
          class="reveal-section group py-14 sm:py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-start cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          @click="openCaseStudy(work)"
          @keydown.enter.prevent="openCaseStudy(work)"
          @keydown.space.prevent="openCaseStudy(work)"
        >
          <!-- Left / Top Editorial Metadata & Impact Column (5 Columns) -->
          <div
            class="lg:col-span-5 flex flex-col justify-between space-y-6 sm:space-y-8"
            :class="index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'"
          >
            <!-- Top row: Index number, Category, Year -->
            <div class="flex items-center justify-between gap-4 border-b border-neutral-200 dark:border-neutral-800 pb-4">
              <span class="text-[11px] sm:text-xs font-mono uppercase tracking-[0.18em] text-neutral-400 dark:text-neutral-500">
                CASE {{ work.number }} // {{ work.category }}
              </span>
              <span class="text-xs font-mono text-neutral-500 dark:text-neutral-400 shrink-0">
                {{ work.year }}
              </span>
            </div>

            <!-- Project Title & Summary -->
            <div class="space-y-4">
              <p class="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                {{ work.client }}
              </p>
              <h3 class="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-neutral-950 dark:text-neutral-100 group-hover:text-[#1D4ED8] dark:group-hover:text-[#3B82F6] transition-colors flex items-start justify-between gap-4">
                <span>{{ work.title }}</span>
                <ArrowUpRight
                  class="h-6 w-6 shrink-0 text-neutral-400 group-hover:text-[#1D4ED8] dark:group-hover:text-[#3B82F6] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </h3>
              <p class="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {{ work.summary }}
              </p>
            </div>

            <!-- Measurable Business Impact (Typographic Highlight, No Card Box) -->
            <div class="pt-6 border-t border-neutral-200 dark:border-neutral-800 space-y-2">
              <div class="text-xs font-mono uppercase tracking-[0.18em] text-neutral-400 dark:text-neutral-500">
                MEASURABLE IMPACT
              </div>
              <div class="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-[#1D4ED8] dark:text-[#3B82F6]">
                {{ work.impactMetric }}
              </div>
              <p class="text-sm text-neutral-500 dark:text-neutral-400">
                {{ work.impactDetail }}
              </p>
            </div>

            <!-- Tech Stack & Drawer Trigger Prompt -->
            <div class="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-4">
              <div class="flex flex-wrap gap-x-4 gap-y-1.5">
                <span
                  v-for="tech in work.techStack"
                  :key="tech"
                  class="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400"
                >
                  {{ tech }}
                </span>
              </div>

              <span class="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[#1D4ED8] dark:text-[#3B82F6]">
                <span class="editorial-link">อ่าน Case Study</span>
                <ArrowUpRight class="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </div>

          <!-- Right / Visual Showcase Column (7 Columns, 16:10 or 4:3 sharp rounded-sm) -->
          <div
            class="lg:col-span-7"
            :class="index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'"
          >
            <div
              class="overflow-hidden rounded-sm bg-neutral-900"
              :class="work.aspectRatio === '16:10' ? 'aspect-[16/10]' : 'aspect-[4/3]'"
            >
              <img
                :src="withBase(work.image)"
                :alt="work.title"
                loading="lazy"
                class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </article>
      </div>
    </div>

    <!-- Slide-over Drawer for Full Case Study -->
    <CaseStudyDrawer
      :work="activeWork"
      @close="closeCaseStudy"
      @navigate="navigateCaseStudy"
    />
  </section>
</template>
