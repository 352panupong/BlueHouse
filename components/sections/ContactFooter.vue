<script setup lang="ts">
import { ref, watch } from 'vue'
import { ArrowUpRight, Copy, Check, Send } from 'lucide-vue-next'
import type { AgencyContent, PricingPackage } from '~/data/content'

const props = defineProps<{
  brand: AgencyContent['brand']
  contact: AgencyContent['contact']
  selectedPackage: PricingPackage | null
}>()

const copiedType = ref<'email' | 'line' | 'inquiry' | null>(null)
const toastMessage = ref<string | null>(null)
let toastTimer: ReturnType<typeof setTimeout> | null = null

const inquirySubject = ref('')
const inquiryName = ref('')
const inquiryContact = ref('')
const inquiryMessage = ref('')

const showToast = (msg: string) => {
  toastMessage.value = msg
  if (toastTimer) clearTimeout(toastTimer)
  toastTimer = setTimeout(() => {
    copiedType.value = null
    toastMessage.value = null
  }, 3000)
}

watch(
  () => props.selectedPackage,
  (pkg) => {
    if (!pkg) return
    inquirySubject.value = `สนใจแพ็กเกจ: ${pkg.name} (${pkg.fullPriceText})`
    inquiryMessage.value = `สวัสดีทีมงาน ${props.brand.name}\n\nต้องการสอบถามและเริ่มโปรเจกต์ในแพ็กเกจ "${pkg.name}" (${pkg.fullPriceText})\nรายละเอียดโปรเจกต์เบื้องต้น: `
    showToast(`เลือกแพ็กเกจ "${pkg.name}" แล้ว — กรอกข้อมูลเพิ่มเติมหรือกดส่งได้ทันที`)
  },
  { immediate: true }
)

const triggerCopy = async (value: string, type: 'email' | 'line', label: string) => {
  try {
    await navigator.clipboard.writeText(value)
    copiedType.value = type
    showToast(`คัดลอก ${label} (${value}) เรียบร้อยแล้ว`)
  } catch {
    copiedType.value = null
  }
}

const buildFormattedInquiry = () => {
  const subject = inquirySubject.value.trim() || 'สอบถามบริการพัฒนาเว็บไซต์ / Web Application'
  const sender = inquiryName.value.trim() ? `ผู้ติดต่อ: ${inquiryName.value.trim()}\n` : ''
  const replyTo = inquiryContact.value.trim() ? `ช่องทางติดต่อกลับ: ${inquiryContact.value.trim()}\n` : ''
  const body = inquiryMessage.value.trim() || 'ต้องการปรึกษาแนวทางการพัฒนาระบบและประเมินงบประมาณ'
  return {
    subject,
    fullBody: `${subject}\n${sender}${replyTo}\n${body}`,
  }
}

const copyInquiryForLine = async () => {
  const { fullBody } = buildFormattedInquiry()
  try {
    await navigator.clipboard.writeText(fullBody)
    copiedType.value = 'inquiry'
    showToast(`คัดลอกข้อความสำหรับส่งทาง LINE (${props.contact.lineId}) เรียบร้อยแล้ว`)
  } catch {
    copiedType.value = null
  }
}

const sendViaEmail = () => {
  const { subject, fullBody } = buildFormattedInquiry()
  const mailtoUrl = `mailto:${props.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(fullBody)}`
  window.location.href = mailtoUrl
  showToast('กำลังเปิดโปรแกรมส่งอีเมลพร้อมข้อมูลแพ็กเกจที่เลือก')
}
</script>

<template>
  <footer id="contact" class="py-24 md:py-36 border-t border-neutral-200 dark:border-neutral-800">
    <div class="editorial-container space-y-16 sm:space-y-20 md:space-y-24">
      <!-- Big Editorial Statement -->
      <div class="reveal-section space-y-6 sm:space-y-8">
        <p class="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
          {{ contact.eyebrow }}
        </p>

        <h2 class="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.12] sm:leading-[1.05] text-neutral-950 dark:text-neutral-100 break-words">
          {{ contact.statement }}
        </h2>

        <p class="text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
          {{ contact.subStatement }}
        </p>
      </div>

      <!-- Editorial Pre-filled Project Brief Form + Direct Channels (Split 12-Col Grid, Zero Cards) -->
      <div class="reveal-section reveal-delay-1 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-10 sm:pt-12 border-t border-neutral-200 dark:border-neutral-800 items-start">
        <!-- Left 7 Columns: Editorial Hairline Project Brief Form (Auto-prefilled from PricingSection) -->
        <div class="lg:col-span-7 space-y-8">
          <div class="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-200 dark:border-neutral-800 pb-4">
            <span class="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
              PROJECT BRIEF // แจ้งรายละเอียดโปรเจกต์
            </span>
            <span
              v-if="selectedPackage"
              class="text-xs font-mono text-[#1D4ED8] dark:text-[#3B82F6]"
            >
              เลือกแพ็กเกจ: {{ selectedPackage.name }}
            </span>
          </div>

          <form class="space-y-8" @submit.prevent="sendViaEmail">
            <!-- Subject / Selected Package -->
            <div class="space-y-2">
              <label
                for="inquiry-subject"
                class="block text-xs font-mono uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400"
              >
                01 / หัวข้อติดต่อ หรือ แพ็กเกจที่สนใจ
              </label>
              <input
                id="inquiry-subject"
                v-model="inquirySubject"
                type="text"
                placeholder="เช่น สนใจแพ็กเกจ Project customized หรือ พัฒนาระบบ Web Application"
                class="w-full bg-transparent border-0 border-b border-neutral-300 dark:border-neutral-700 focus:border-[#1D4ED8] dark:focus:border-[#3B82F6] py-3 text-base sm:text-lg font-medium text-neutral-950 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:outline-none transition-colors"
              />
            </div>

            <!-- Two-column Name & Contact info -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div class="space-y-2">
                <label
                  for="inquiry-name"
                  class="block text-xs font-mono uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400"
                >
                  02 / ชื่อผู้ติดต่อ หรือ ชื่อองค์กร
                </label>
                <input
                  id="inquiry-name"
                  v-model="inquiryName"
                  type="text"
                  placeholder="ชื่อของคุณ / บริษัท"
                  class="w-full bg-transparent border-0 border-b border-neutral-300 dark:border-neutral-700 focus:border-[#1D4ED8] dark:focus:border-[#3B82F6] py-3 text-base text-neutral-950 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:outline-none transition-colors"
                />
              </div>

              <div class="space-y-2">
                <label
                  for="inquiry-contact"
                  class="block text-xs font-mono uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400"
                >
                  03 / เบอร์โทรศัพท์ / LINE / อีเมลติดต่อกลับ
                </label>
                <input
                  id="inquiry-contact"
                  v-model="inquiryContact"
                  type="text"
                  placeholder="เช่น 08x-xxx-xxxx หรือ LINE ID"
                  class="w-full bg-transparent border-0 border-b border-neutral-300 dark:border-neutral-700 focus:border-[#1D4ED8] dark:focus:border-[#3B82F6] py-3 text-base text-neutral-950 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <!-- Message / Details -->
            <div class="space-y-2">
              <label
                for="inquiry-message"
                class="block text-xs font-mono uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400"
              >
                04 / รายละเอียดโปรเจกต์เบื้องต้น
              </label>
              <textarea
                id="inquiry-message"
                v-model="inquiryMessage"
                rows="4"
                placeholder="เล่าโจทย์ธุรกิจ ขอบเขตงาน หรือกำหนดการส่งมอบที่คุณต้องการ..."
                class="w-full bg-transparent border-0 border-b border-neutral-300 dark:border-neutral-700 focus:border-[#1D4ED8] dark:focus:border-[#3B82F6] py-3 text-base text-neutral-950 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:outline-none transition-colors resize-y"
              ></textarea>
            </div>

            <!-- Submit / Copy Actions -->
            <div class="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-4 pt-2">
              <button
                type="submit"
                class="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#1D4ED8] hover:bg-[#1E40AF] dark:bg-[#2563EB] dark:hover:bg-[#3B82F6] px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 cursor-pointer"
              >
                <Send class="h-4 w-4" />
                <span>ส่งรายละเอียดทางอีเมล</span>
              </button>

              <button
                type="button"
                class="inline-flex items-center justify-center gap-2.5 rounded-full border border-neutral-300 dark:border-neutral-700 hover:border-neutral-950 dark:hover:border-neutral-200 px-6 py-3.5 text-sm font-medium text-neutral-900 dark:text-neutral-100 transition-all duration-200 cursor-pointer"
                @click="copyInquiryForLine"
              >
                <Check v-if="copiedType === 'inquiry'" class="h-4 w-4 text-[#1D4ED8] dark:text-[#3B82F6]" />
                <Copy v-else class="h-4 w-4" />
                <span>{{ copiedType === 'inquiry' ? 'คัดลอกข้อความแล้ว' : 'คัดลอกข้อความส่งทาง LINE' }}</span>
              </button>
            </div>
          </form>
        </div>

        <!-- Right 5 Columns: Direct Email & LINE ID Copy + Social Channels -->
        <div class="lg:col-span-5 lg:border-l lg:border-neutral-200 dark:lg:border-neutral-800 lg:pl-12 space-y-10">
          <!-- Direct Contact Copy Section -->
          <div class="space-y-6">
            <div class="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500">
              DIRECT CHANNELS // {{ contact.responseSla }}
            </div>

            <!-- Email Copy Row -->
            <div class="space-y-2.5">
              <div class="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                EMAIL ADDRESS
              </div>
              <div class="flex flex-wrap items-center justify-between gap-3">
                <a
                  :href="`mailto:${contact.email}`"
                  class="text-lg sm:text-xl font-medium tracking-tight text-neutral-950 dark:text-neutral-100 editorial-link break-all"
                >
                  {{ contact.email }}
                </a>

                <button
                  type="button"
                  class="inline-flex items-center gap-2 rounded-full bg-[#1D4ED8] hover:bg-[#1E40AF] dark:bg-[#2563EB] dark:hover:bg-[#3B82F6] px-4 py-2 text-xs font-mono uppercase tracking-wider text-white transition-all duration-200 cursor-pointer shrink-0"
                  @click="triggerCopy(contact.email, 'email', 'อีเมล')"
                >
                  <Check v-if="copiedType === 'email'" class="h-3.5 w-3.5" />
                  <Copy v-else class="h-3.5 w-3.5" />
                  <span>{{ copiedType === 'email' ? 'คัดลอกแล้ว' : 'Copy Email' }}</span>
                </button>
              </div>
            </div>

            <!-- LINE ID Copy Row -->
            <div class="pt-5 border-t border-neutral-200 dark:border-neutral-800 space-y-2.5">
              <div class="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                LINE OFFICIAL ID
              </div>
              <div class="flex flex-wrap items-center justify-between gap-3">
                <span class="text-lg sm:text-xl font-medium tracking-tight text-neutral-950 dark:text-neutral-100 font-mono">
                  {{ contact.lineId }}
                </span>

                <button
                  type="button"
                  class="inline-flex items-center gap-2 rounded-full border border-neutral-300 dark:border-neutral-700 hover:border-neutral-950 dark:hover:border-neutral-200 px-4 py-2 text-xs font-mono uppercase tracking-wider text-neutral-900 dark:text-neutral-100 transition-all duration-200 cursor-pointer shrink-0"
                  @click="triggerCopy(contact.lineId, 'line', 'LINE ID')"
                >
                  <Check v-if="copiedType === 'line'" class="h-3.5 w-3.5 text-[#1D4ED8] dark:text-[#3B82F6]" />
                  <Copy v-else class="h-3.5 w-3.5" />
                  <span>{{ copiedType === 'line' ? 'คัดลอกแล้ว' : 'Copy LINE ID' }}</span>
                </button>
              </div>
            </div>

            <div class="pt-4 border-t border-neutral-200 dark:border-neutral-800 text-xs font-mono text-neutral-500 dark:text-neutral-400">
              TEL: {{ contact.phone }}
            </div>
          </div>

          <!-- Social Channels Hairline List -->
          <div class="border-b border-neutral-200 dark:border-neutral-800 pt-4">
            <div class="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500 pb-4">
              CONNECT &amp; PROFILES
            </div>

            <a
              v-for="social in contact.socials"
              :key="social.label"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              class="group py-4 px-2 -mx-2 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between hover:bg-neutral-200/35 dark:hover:bg-neutral-900/40 transition-colors"
            >
              <div>
                <div class="text-sm font-medium text-neutral-950 dark:text-neutral-100">
                  {{ social.label }}
                </div>
                <div class="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                  {{ social.handle }}
                </div>
              </div>
              <ArrowUpRight
                class="h-4 w-4 text-neutral-400 group-hover:text-neutral-950 dark:group-hover:text-neutral-100 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom Colophon -->
      <div class="pt-10 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-neutral-500 dark:text-neutral-400">
        <div>
          © {{ new Date().getFullYear() }} {{ brand.name }}. ALL RIGHTS RESERVED.
        </div>
        <div>
          ENGINEERED WITH NUXT.JS &amp; TAILWIND CSS V4 — SWISS EDITORIAL GRID
        </div>
      </div>
    </div>

    <!-- Minimal Bottom-Right Editorial Toast Notification -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 translate-y-3"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-3"
      >
        <div
          v-if="toastMessage"
          role="status"
          aria-live="polite"
          class="fixed bottom-5 right-5 left-5 sm:left-auto z-50 flex items-center gap-3 bg-[#111111] text-[#F8F8F6] dark:bg-[#EDEDED] dark:text-[#0A0A0A] border border-neutral-800 dark:border-neutral-300 px-5 py-3.5"
        >
          <span class="h-2 w-2 rounded-full bg-[#2563EB] shrink-0"></span>
          <span class="text-xs font-mono tracking-wide">{{ toastMessage }}</span>
        </div>
      </Transition>
    </Teleport>
  </footer>
</template>
