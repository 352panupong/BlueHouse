<script setup lang="ts">
import { watch, onMounted, onUnmounted } from 'vue'
import { X, ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-vue-next'
import type { WorkItem } from '~/data/content'
import { useAssetUrl } from '~/composables/useAssetUrl'

const props = defineProps<{
  work: WorkItem | null
}>()

const { withBase } = useAssetUrl()

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'navigate', direction: 'prev' | 'next'): void
}>()

const handleKeydown = (event: KeyboardEvent) => {
  if (!props.work) return
  if (event.key === 'Escape') {
    emit('close')
  } else if (event.key === 'ArrowRight') {
    emit('navigate', 'next')
  } else if (event.key === 'ArrowLeft') {
    emit('navigate', 'prev')
  }
}

watch(
  () => props.work,
  (activeWork) => {
    if (typeof document === 'undefined') return
    document.body.style.overflow = activeWork ? 'hidden' : ''
  }
)

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
})
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="work"
        class="fixed inset-0 z-50 flex justify-end bg-neutral-950/55 backdrop-blur-xs"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="`drawer-title-${work.id}`"
        @click.self="emit('close')"
      >
        <!-- Editorial Slide-Over Drawer Panel (Full height, hairline border-l, zero card boxes) -->
        <Transition
          appear
          enter-active-class="transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]"
          enter-from-class="translate-x-full"
          enter-to-class="translate-x-0"
          leave-active-class="transition-transform duration-250 ease-in"
          leave-from-class="translate-x-0"
          leave-to-class="translate-x-full"
        >
          <aside
            v-if="work"
            class="relative h-full w-full max-w-2xl overflow-y-auto bg-[#F8F8F6] dark:bg-[#0A0A0A] text-neutral-950 dark:text-neutral-100 border-l border-neutral-200 dark:border-neutral-800 flex flex-col justify-between"
          >
            <!-- Sticky Top Bar -->
            <div class="sticky top-0 z-10 flex items-center justify-between px-6 sm:px-10 h-20 bg-[#F8F8F6]/90 dark:bg-[#0A0A0A]/90 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
              <div class="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                <span>CASE STUDY {{ work.number }}</span>
                <span>//</span>
                <span>{{ work.year }}</span>
              </div>

              <button
                type="button"
                aria-label="ปิดรายละเอียดผลงาน"
                class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-100 py-2 px-3 cursor-pointer transition-colors"
                @click="emit('close')"
              >
                <span>ESC / CLOSE</span>
                <X class="h-4 w-4" />
              </button>
            </div>

            <!-- Main Case Study Editorial Content -->
            <div class="px-6 sm:px-10 py-10 space-y-12 flex-1">
              <!-- Title & Client Metadata -->
              <div class="space-y-4">
                <p class="text-xs font-mono uppercase tracking-[0.18em] text-[#1D4ED8] dark:text-[#3B82F6]">
                  {{ work.category }} — {{ work.client }}
                </p>
                <h2
                  :id="`drawer-title-${work.id}`"
                  class="text-3xl sm:text-4xl font-medium tracking-tight leading-tight text-neutral-950 dark:text-neutral-100"
                >
                  {{ work.title }}
                </h2>
                <p class="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {{ work.summary }}
                </p>
              </div>

              <!-- Preview Artwork (Sharp rounded-sm, no card padding) -->
              <div class="overflow-hidden rounded-sm bg-neutral-900 aspect-[16/10] border-t border-b border-neutral-200 dark:border-neutral-800">
                <img
                  :src="withBase(work.image)"
                  :alt="work.title"
                  class="h-full w-full object-cover"
                />
              </div>

              <!-- Measurable Results Row (Frameless hairline grid) -->
              <div class="pt-8 border-t border-neutral-200 dark:border-neutral-800 space-y-6">
                <h3 class="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500">
                  01 / MEASURABLE RESULTS (ผลลัพธ์ที่วัดผลได้)
                </h3>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200 dark:divide-neutral-800">
                  <div
                    v-for="(res, idx) in work.results"
                    :key="res.label"
                    :class="[
                      idx > 0 ? 'pt-4 sm:pt-0 sm:pl-6' : '',
                    ]"
                  >
                    <div class="text-3xl font-medium tracking-tight text-[#1D4ED8] dark:text-[#3B82F6]">
                      {{ res.value }}
                    </div>
                    <p class="mt-1.5 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {{ res.label }}
                    </p>
                  </div>
                </div>
              </div>

              <!-- Client Challenge -->
              <div class="pt-8 border-t border-neutral-200 dark:border-neutral-800 space-y-3">
                <h3 class="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500">
                  02 / THE CHALLENGE (ปัญหาของลูกค้า)
                </h3>
                <p class="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {{ work.challenge }}
                </p>
              </div>

              <!-- Engineering Solution -->
              <div class="pt-8 border-t border-neutral-200 dark:border-neutral-800 space-y-4">
                <h3 class="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500">
                  03 / ENGINEERING SOLUTION (แนวทางแก้ไขและสถาปัตยกรรม)
                </h3>
                <p class="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {{ work.solution }}
                </p>

                <ul class="pt-3 space-y-2.5">
                  <li
                    v-for="feature in work.keyFeatures"
                    :key="feature"
                    class="text-sm text-neutral-600 dark:text-neutral-300 flex items-baseline gap-3"
                  >
                    <span class="font-mono text-xs text-[#1D4ED8] dark:text-[#3B82F6]">—</span>
                    <span>{{ feature }}</span>
                  </li>
                </ul>
              </div>

              <!-- Tech Stack -->
              <div class="pt-8 border-t border-neutral-200 dark:border-neutral-800 space-y-4">
                <h3 class="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500">
                  04 / TECH STACK &amp; INFRASTRUCTURE
                </h3>
                <div class="flex flex-wrap gap-x-6 gap-y-2">
                  <span
                    v-for="tech in work.techStack"
                    :key="tech"
                    class="text-sm font-mono text-neutral-900 dark:text-neutral-100 underline decoration-neutral-300 dark:decoration-neutral-700 underline-offset-4"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Sticky Drawer Footer: Prev / Next Case Study + CTA -->
            <div class="sticky bottom-0 z-10 px-6 sm:px-10 py-5 bg-[#F8F8F6]/95 dark:bg-[#0A0A0A]/95 backdrop-blur-md border-t border-neutral-200 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-4">
              <div class="flex items-center gap-6">
                <button
                  type="button"
                  class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-100 cursor-pointer transition-colors"
                  @click="emit('navigate', 'prev')"
                >
                  <ArrowLeft class="h-4 w-4" />
                  <span>PREV</span>
                </button>
                <span class="text-neutral-300 dark:text-neutral-700">|</span>
                <button
                  type="button"
                  class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-100 cursor-pointer transition-colors"
                  @click="emit('navigate', 'next')"
                >
                  <span>NEXT</span>
                  <ArrowRight class="h-4 w-4" />
                </button>
              </div>

              <a
                href="#contact"
                class="group inline-flex items-center gap-2 rounded-full bg-[#1D4ED8] hover:bg-[#1E40AF] dark:bg-[#2563EB] dark:hover:bg-[#3B82F6] px-5 py-2.5 text-xs font-medium text-white transition-all"
                @click="emit('close')"
              >
                <span>ปรึกษาระบบลักษณะนี้</span>
                <ArrowUpRight class="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </aside>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
