<script setup lang="ts">
import type { AgencyContent } from '~/data/content'

defineProps<{
  section: AgencyContent['processSection']
}>()
</script>

<template>
  <section id="process" class="py-24 md:py-36 border-t border-neutral-200 dark:border-neutral-800">
    <div class="editorial-container">
      <!-- Top Editorial Heading -->
      <div class="reveal-section grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 pb-14 md:pb-24 items-end">
        <div class="lg:col-span-6 space-y-4">
          <p class="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
            {{ section.eyebrow }}
          </p>
          <h2 class="text-3xl sm:text-4xl md:text-6xl font-medium tracking-tight text-neutral-950 dark:text-neutral-100">
            {{ section.title }}
          </h2>
        </div>
        <div class="lg:col-span-6">
          <p class="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 max-w-xl leading-relaxed">
            {{ section.description }}
          </p>
        </div>
      </div>

      <!-- Horizontal Timeline / 4 Numbered Columns separated by thin border-l hairlines -->
      <div class="reveal-section reveal-delay-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-neutral-200 dark:border-neutral-800">
        <div
          v-for="(step, idx) in section.steps"
          :key="step.number"
          class="py-10 md:py-12 flex flex-col justify-between space-y-10 border-b lg:border-b-0 border-neutral-200 dark:border-neutral-800"
          :class="[
            idx > 0 ? 'lg:border-l lg:border-neutral-200 dark:lg:border-neutral-800 lg:pl-8' : '',
            idx < section.steps.length - 1 ? 'lg:pr-8' : '',
            idx % 2 === 1 ? 'md:border-l md:border-neutral-200 dark:md:border-neutral-800 md:pl-8' : 'md:pr-8',
          ]"
        >
          <div class="space-y-6">
            <!-- Step Number & Duration -->
            <div class="flex items-center justify-between">
              <span class="text-3xl md:text-4xl font-mono font-light text-neutral-950 dark:text-neutral-100">
                {{ step.number }}
              </span>
              <span class="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                {{ step.duration }}
              </span>
            </div>

            <!-- English Phase & Thai Title -->
            <div class="space-y-2">
              <div class="text-xs font-mono uppercase tracking-[0.16em] text-[#1D4ED8] dark:text-[#3B82F6]">
                {{ step.phaseEn }}
              </div>
              <h3 class="text-xl font-medium tracking-tight text-neutral-950 dark:text-neutral-100 leading-snug">
                {{ step.title }}
              </h3>
            </div>

            <!-- Step Description -->
            <p class="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {{ step.description }}
            </p>
          </div>

          <!-- Key Outputs list separated by top hairline -->
          <div class="pt-6 border-t border-neutral-200 dark:border-neutral-800 space-y-2.5">
            <div class="text-[11px] font-mono uppercase tracking-[0.18em] text-neutral-400 dark:text-neutral-500">
              DELIVERABLES
            </div>
            <ul class="space-y-1.5">
              <li
                v-for="output in step.keyOutputs"
                :key="output"
                class="text-xs font-mono text-neutral-700 dark:text-neutral-300 flex items-baseline gap-2"
              >
                <span class="text-neutral-400">/</span>
                <span>{{ output }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
