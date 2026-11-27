---
name: editorial-portfolio
description: ออกแบบและสร้าง Section สำหรับเว็บโปรโมทธุรกิจรับทำเว็บไซต์สไตล์ Editorial, Swiss Grid และ Minimalist โดยไม่ใช้ Card
---

# Editorial Portfolio Layout Blueprint

เมื่อสร้างหน้าเว็บไซต์ ให้จัดโครงสร้างแต่ละ Section ตามแนวทางนี้:

1. **Navigation Bar:**
   - Minimal, โปร่งใสหรือ `backdrop-blur-md`, ไม่มีเส้นขอบหนา
   - ซ้าย: ชื่อแบรนด์ (Text Logo ตัวพิมพ์ใหญ่ เว้นช่องไฟ `tracking-widest`), ขวา: ลิงก์ 3-4 เมนู + ปุ่ม "เริ่มโปรเจกต์" แบบ Pill (`rounded-full`)

2. **Hero Section (เหนือรอยพับหน้าจอ):**
   - จัดวางแบบ Editorial: ตัวอักษรขนาดใหญ่มาก (Oversized Typography) 2-3 บรรทัด สื่อสารคุณค่าชัดเจน (เช่น "รับออกแบบและพัฒนาระบบเว็บ ที่สร้างยอดขายและลดภาระงาน")
   - ด้านล่างแบ่งเป็น 2 ฝั่ง: ซ้ายเป็นคำอธิบายสั้นๆ 2 บรรทัด + ปุ่ม CTA หลัก, ขวาเป็นสถานะรับงาน (เช่นจุดสีเขียวกะพริบ "Available for new projects") และตัวเลขสถิติสั้นๆ แบบไม่มีกรอบ

3. **Services Section (ใช้ Interactive Accordion หรือ Bordered List):**
   - แบ่ง 2 คอลัมน์: ซ้ายเป็นหัวข้อ "บริการของเรา" (Sticky), ขวาเป็นรายการบริการแบบเส้นคั่นแนวนอน (`01 / ...`, `02 / ...`, `03 / ...`)
   - คลิกหรือ Hover เพื่อขยายดูรายละเอียดและ Tech Stack ที่ใช้ได้

4. **Selected Works / Portfolio (ใช้ Split-Screen หรือ Full-Bleed Showcase):**
   - แสดงผลงานแบบเต็มพื้นที่ (Editorial Case Study) ไม่ใส่กรอบ Card
   - รูปภาพสัดส่วน `16:10` หรือ `4:3` ขอบคมหรือมนเล็กน้อย (`rounded-sm`) คู่กับข้อมูล: ชื่อโปรเจกต์, ปี, ประเภทงาน, และผลลัพธ์ที่ได้ (เช่น "ลดเวลาทำงาน 50%")

5. **Work Process (ขั้นตอนการทำงาน):**
   - ใช้ Layout แบบ Horizontal Timeline หรือ Numbered Columns ที่คั่นด้วยเส้นบางๆ (`border-l`) ตั้งแต่ 01 Discovery -> 02 Design -> 03 Development -> 04 Launch

6. **Contact / Footer CTA:**
   - พื้นที่ขนาดใหญ่เต็มจอ (Big Statement) ตัวอักษรใหญ่ "มีโปรเจกต์ในใจ? มาคุยกัน" พร้อมปุ่มคัดลอกอีเมล (Click to copy) และลิงก์ Line / GitHub / LinkedIn