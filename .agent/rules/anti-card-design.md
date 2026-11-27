# Design Rule: Anti-Card & Editorial Minimalism

## STRICTLY FORBIDDEN (ห้ามทำเด็ดขาด)
1. **NO Generic Cards:** ห้ามสร้างกล่องสี่เหลี่ยมที่มีขอบมน ใส่เงา และพื้นหลังสีขาว/เทาซ้อนกัน (เช่น `bg-white rounded-xl shadow-md p-6 border`) เพื่อแสดงรายการบริการ หรือผลงาน
2. **NO Generic Gradients:** ห้ามใช้พื้นหลังไล่สีม่วง-น้ำเงินแบบเว็บ AI ทั่วไป
3. **NO Cluttered Icons:** ห้ามใส่ไอคอนวงกลมสีสันสดใสไว้ด้านบนของทุกหัวข้อ

## REQUIRED DESIGN PATTERNS (สิ่งที่ต้องใช้แทน)
1. **Hairline Dividers:** ใช้เส้นคั่นบางๆ (`border-t border-neutral-200 dark:border-neutral-800`) แบ่งรายการบริการ, ขั้นตอนการทำงาน หรือผลงาน แทนการตีกรอบสี่เหลี่ยม
2. **Typography as UI:** ใช้ขนาดตัวอักษรที่ตัดกันชัดเจน (High Contrast) เช่น หัวข้อหลัก `text-5xl md:text-7xl tracking-tight font-medium` คู่กับคำอธิบาย `text-base text-neutral-500 max-w-xl`
3. **Asymmetric & Split Layouts:** ใช้ Grid 12 คอลัมน์แบบไม่สมมาตร เช่น ฝั่งซ้าย 4 คอลัมน์เป็นหัวข้อแบบ Sticky (`lg:sticky lg:top-24`), ฝั่งขวา 8 คอลัมน์เป็นเนื้อหาที่เลื่อนได้
4. **Interactive List Rows:** รายการบริการหรือผลงาน ให้ทำเป็นแถวแนวนอนเต็มความกว้าง (Full-width rows) เมื่อ Hover แล้วเปลี่ยนสีพื้นหลังเบาๆ หรือมีลูกศร (`ArrowUpRight`) ขยับเฉียงขึ้น
5. **Color Palette:** ใช้สีพื้นหลังโทน Neutral ที่ดูสะอาดและแพง เช่น Off-white (`#FAFAFA` / `#F5F5F3`) กับตัวอักษรสีดำสนิท (`#111111`) หรือ Dark Mode โทน `#0A0A0A` กับ `#EDEDED` และใช้ Accent Color เพียง 1 สีเท่านั้น (เช่น Emerald, Cobalt Blue หรือ Warm Orange) เฉพาะปุ่ม CTA สำคัญ
6. **Generous Whitespace:** เว้นระยะห่างระหว่าง Section อย่างน้อย `py-24 md:py-36` เพื่อให้เว็บดูโปร่งและหายใจได้
7. **Pricing & Packages Section (ใช้ Editorial Grid / Hairline Columns แทน Card):**
   - **ห้ามใช้ Card มีเงาหรือกรอบมนล้อมรอบ** ให้ใช้เส้นแบ่งแนวตั้งบางๆ (`divide-y lg:divide-y-0 lg:divide-x divide-neutral-200 dark:divide-neutral-800`) คั่นระหว่างแต่ละแพ็กเกจแทน
   - ตัวเลขราคาให้ใช้ฟอนต์ขนาดใหญ่ (`text-4xl md:text-5xl font-semibold tracking-tight`) เพื่อดึงดูดสายตา
   - แพ็กเกจแนะนำ ("ยอดนิยม") ไม่ต้องใส่กรอบสีน้ำเงินล้อมรอบ แต่ให้ใช้ป้าย Badge เล็กๆ ด้านบนชื่อแพ็กเกจ และเปลี่ยนสีปุ่ม CTA ให้เด่นด้วยสี Accent ของเว็บ
   - รายการที่ไม่รวม (Excluded items) ให้ลดความเด่นด้วยสีจางลง (`text-neutral-400 line-through`) แทนการใส่ไอคอนรกๆ