# Project: Personal Web Development Agency & Portfolio

## Tech Stack
- **Framework:** Nuxt 3/4 (Vue 3 Composition API, `<script setup lang="ts">`)
- **Styling:** Tailwind CSS v4 (CSS-first configuration)
- **Icons:** Lucide Icons (`lucide-vue-next`) หรือ `@nuxt/icon`
- **Fonts:** Google Fonts (`Plus Jakarta Sans` หรือ `Syne` สำหรับภาษาอังกฤษ + `IBM Plex Sans Thai` หรือ `Line Seed Sans TH` สำหรับภาษาไทย)
- **Animation:** CSS Transitions / `@vueuse/motion` (เน้น Smooth, Subtle, ไม่รก)

## Business Goal
เว็บไซต์ส่วนตัวสำหรับโปรโมทธุรกิจรับทำเว็บไซต์และระบบ Web Application (Full-stack) เพื่อดึงดูดลูกค้ากลุ่มองค์กร, SME และธุรกิจที่ต้องการงานคุณภาพสูง มีความเป็นมืออาชีพ น่าเชื่อถือ และแตกต่างจากเว็บรับทำเว็บทั่วไป

## Architecture & Coding Standards
- แยก Component ตาม Section ใน `components/sections/` (เช่น `HeroSection.vue`, `ServicesSection.vue`, `WorkShowcase.vue`)
- เก็บข้อมูลเนื้อหา (Services, Projects, Tech Stack) แยกไว้ใน `data/content.ts` เพื่อให้แก้ไขข้อความได้ง่ายโดยไม่ต้องแก้โค้ด UI
- รองรับ Responsive 100% (Mobile-first) และ SEO พื้นฐานผ่าน `useSeoMeta`
- เขียน TypeScript แบบ Strict ไม่มี `any`