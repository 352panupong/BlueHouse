export interface NavItem {
  label: string
  href: string
}

export interface HeroMetric {
  value: string
  label: string
}

export interface ServiceItem {
  id: string
  number: string
  title: string
  subtitle: string
  description: string
  deliverables: string[]
  techStack: string[]
}

export interface WorkResultMetric {
  value: string
  label: string
}

export interface WorkItem {
  id: string
  number: string
  title: string
  client: string
  year: string
  category: string
  summary: string
  impactMetric: string
  impactDetail: string
  challenge: string
  solution: string
  keyFeatures: string[]
  results: WorkResultMetric[]
  techStack: string[]
  image: string
  aspectRatio: '16:10' | '4:3'
}

export interface PricingPackage {
  id: string
  number: string
  name: string
  tagline: string
  pricePrefix: string
  priceAmount: string
  priceUnit: string
  fullPriceText: string
  popular?: boolean
  popularLabel?: string
  included: string[]
  excluded: string[]
  ctaLabel: string
}

export interface ProcessStep {
  number: string
  phaseEn: string
  title: string
  duration: string
  description: string
  keyOutputs: string[]
}

export interface SocialLink {
  label: string
  handle: string
  href: string
}

export interface AgencyContent {
  brand: {
    name: string
    shortName: string
    tagline: string
    location: string
    availabilityText: string
    available: boolean
  }
  navigation: NavItem[]
  hero: {
    eyebrow: string
    headlineLines: string[]
    description: string
    primaryCta: {
      label: string
      href: string
    }
    secondaryCta: {
      label: string
      href: string
    }
    metrics: HeroMetric[]
  }
  servicesSection: {
    eyebrow: string
    title: string
    description: string
    items: ServiceItem[]
  }
  worksSection: {
    eyebrow: string
    title: string
    description: string
    items: WorkItem[]
  }
  pricingSection: {
    eyebrow: string
    title: string
    description: string
    packages: PricingPackage[]
  }
  processSection: {
    eyebrow: string
    title: string
    description: string
    steps: ProcessStep[]
  }
  contact: {
    eyebrow: string
    statement: string
    subStatement: string
    email: string
    lineId: string
    phone: string
    responseSla: string
    socials: SocialLink[]
  }
}

export const agencyContent: AgencyContent = {
  brand: {
    name: 'Blue House Dev Solution',
    shortName: 'BLUE HOUSE DEV SOLUTION',
    tagline: 'Full-Stack Web Engineering & Bespoke Business Systems',
    location: 'Phatthalung, Thailand',
    availabilityText: 'Available for new projects — slot Open',
    available: true,
  },
  navigation: [
    { label: 'Services', href: '#services' },
    // { label: 'Selected Works', href: '#works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    eyebrow: 'FULL-STACK WEB APPLICATION STUDIO',
    headlineLines: [
      'รับออกแบบและพัฒนาระบบเว็บ',
      'ที่สร้างยอดขายและลดภาระงาน',
      'ด้วยวิศวกรรมซอฟต์แวร์ระดับองค์กร',
    ],
    description:
      'เราสร้างเว็บไซต์ธุรกิจ, Web Application เฉพาะทาง และระบบหลังบ้าน (Dashboard / Back-office) ที่เน้นความเร็ว ความปลอดภัย และเสถียรภาพระยะยาว ด้วยสถาปัตยกรรม Nuxt.js, FastAPI และ Database ที่ออกแบบมาเพื่อการเติบโตของธุรกิจคุณ',
    primaryCta: {
      label: 'ปรึกษาโปรเจกต์กับทีมวิศวกร',
      href: '#contact',
    },
    secondaryCta: {
      label: 'ดูผลงานที่ผ่านมา',
      href: '#works',
    },
    metrics: [
      { value: '< 0.8s', label: 'Average Page Load (SSR / Edge)' },
      { value: '99.9%', label: 'Production Uptime Architecture' },
      { value: '100%', label: 'Type-Safe & Custom Built Codebase' },
    ],
  },
  servicesSection: {
    eyebrow: '01 / CAPABILITIES & SERVICES',
    title: 'บริการของเรา',
    description:
      'ครอบคลุมตั้งแต่หน้าบ้านที่ต้องการความน่าเชื่อถือสูง ไปจนถึงระบบหลังบ้านที่จัดการข้อมูลซับซ้อนด้วยโครงสร้างโค้ดที่ดูแลต่อได้ง่าย',
    items: [
      {
        id: 'corporate-platform',
        number: '01',
        title: 'High-Performance Corporate & Brand Website',
        subtitle: 'เว็บไซต์องค์กรและแบรนด์ธุรกิจที่เน้นความเร็ว ภาพลักษณ์ระดับพรีเมียม และ Technical SEO',
        description:
          'ยกระดับความน่าเชื่อถือขององค์กรด้วยเว็บไซต์ที่ออกแบบเฉพาะทาง (Bespoke Editorial UI) ไม่ใช้เทมเพลตสำเร็จรูป โหลดเร็วด้วย Server-Side Rendering (SSR) รองรับการค้นหาบน Google และเชื่อมต่อระบบเก็บ Lead เข้าสู่ทีมขายได้ทันที',
        deliverables: [
          'Custom UI/UX & Swiss Editorial Layout',
          'Server-Side Rendering (SSR) & Core Web Vitals Optimization',
          'Headless CMS / Dynamic Content Management',
          'Technical SEO & Analytics Conversion Tracking',
        ],
        techStack: ['Nuxt 3/4', 'Vue 3', 'TypeScript', 'Tailwind CSS v4'],
      },
      {
        id: 'custom-webapp',
        number: '02',
        title: 'Bespoke Business Web Application',
        subtitle: 'ระบบ Web Application เฉพาะทางที่ออกแบบตาม Workflow จริงของธุรกิจคุณ',
        description:
          'เปลี่ยนกระบวนการทำงานที่กระจัดกระจายบนเอกสารหรือตาราง Excel ให้เป็นระบบเว็บแอปพลิเคชันที่ทำงานเชื่อมโยงกันแบบ Real-time รองรับผู้ใช้งานหลายระดับสิทธิ์ (RBAC) ลดความผิดพลาดของคนและขยายขีดความสามารถในการรองรับลูกค้า',
        deliverables: [
          'B2B / B2C Customer Portal & Booking Workflow',
          'Role-Based Access Control (RBAC) & Audit Trail',
          'Automated Quotation, Invoicing & Document Generation',
          'High-Concurrency Async API Architecture',
        ],
        techStack: ['Nuxt.js', 'FastAPI', 'Python', 'PostgreSQL', 'Docker'],
      },
      {
        id: 'dashboard-backoffice',
        number: '03',
        title: 'Executive Dashboard & Back-Office System',
        subtitle: 'ระบบบริหารจัดการหลังบ้านและ Data Visualization เพื่อการตัดสินใจที่แม่นยำ',
        description:
          'ศูนย์รวมข้อมูลปฏิบัติการขององค์กรไว้ในหน้าจอเดียว ตั้งแต่การจัดการคำสั่งซื้อ คลังสินค้า พนักงาน ไปจนถึงรายงานวิเคราะห์ยอดขายและ KPI แบบ Real-time ที่ออกแบบให้ใช้งานง่าย รวดเร็ว และปลอดภัยสูงสุด',
        deliverables: [
          'Real-time Operational & Financial KPI Dashboard',
          'Inventory, Order & Multi-Branch Operations Management',
          'Data Export (Excel / PDF) & Scheduled Report Automation',
          'Optimized SQL Query & Indexing for Large Datasets',
        ],
        techStack: ['Nuxt.js', 'FastAPI', 'SQLAlchemy', 'PostgreSQL', 'Redis'],
      },
      {
        id: 'api-system-integration',
        number: '04',
        title: 'API Architecture & Legacy System Integration',
        subtitle: 'เชื่อมโยงระบบเดิมเข้ากับแพลตฟอร์มสมัยใหม่ พร้อมยกระดับความปลอดภัยและประสิทธิภาพ',
        description:
          'ออกแบบและพัฒนา RESTful API ประสิทธิภาพสูงสำหรับเชื่อมต่อระหว่างระบบภายในองค์กร (ERP / CRM), Payment Gateway, LINE Official Account และบริการ Cloud พร้อมวางโครงสร้าง Deployment ที่เสถียรและตรวจสอบย้อนหลังได้',
        deliverables: [
          'Secure RESTful API Design with OpenAPI / Pydantic Validation',
          'Payment Gateway, LINE OA & Third-Party Webhook Integration',
          'Database Schema Migration & Query Performance Tuning',
          'Containerized Deployment (Docker, Nginx, TLS & CI/CD)',
        ],
        techStack: ['FastAPI', 'PostgreSQL', 'MySQL', 'Docker Compose', 'Nginx'],
      },
    ],
  },
  worksSection: {
    eyebrow: '02 / SELECTED CASE STUDIES',
    title: 'ผลงานที่คัดสรร',
    description:
      'ตัวอย่างระบบที่เราออกแบบและพัฒนาเพื่อแก้โจทย์ธุรกิจจริง คลิกที่แต่ละโปรเจกต์เพื่อเปิดอ่านรายละเอียด Case Study เชิงลึก',
    items: [
      {
        id: 'logi-command',
        number: '01',
        title: 'ApexFlow Supply Chain & Fleet Back-Office',
        client: 'B2B Logistics & Distribution Enterprise',
        year: '2026',
        category: 'Web Application & Back-Office Dashboard',
        summary:
          'ระบบบริหารจัดการคำสั่งซื้อ การจัดสายรถขนส่ง และติดตามสถานะการกระจายสินค้าแบบ Real-time สำหรับธุรกิจโลจิสติกส์ ทดแทนการคีย์ข้อมูลซ้ำซ้อนหลายแผนก พร้อมระบบออกเอกสารใบส่งของอัตโนมัติ',
        impactMetric: 'ลดเวลาทำงาน 55%',
        impactDetail: 'ลดระยะเวลาประสานงานและออกเอกสารรายวันจาก 4 ชั่วโมง เหลือไม่ถึง 1.5 ชั่วโมงต่อรอบบิล',
        challenge:
          'ลูกค้ามีรถขนส่งในเครือข่ายมากกว่า 180 คัน แต่เดิมใช้การประสานงานผ่านตาราง Spreadsheet แยกตามแผนก ทำให้ข้อมูลสถานะสินค้าไม่อัปเดตตรงกัน เกิดข้อผิดพลาดในการออกใบกำกับขนส่ง และผู้บริหารไม่สามารถดูต้นทุนต่อเที่ยวแบบ Real-time ได้',
        solution:
          'เราออกแบบสถาปัตยกรรม Full-Stack ใหม่ทั้งหมดโดยใช้ Nuxt 3 สำหรับหน้าจอ Dispatch Console และใช้ FastAPI คู่กับ PostgreSQL ในการประมวลผลคิวงานขนส่งความถี่สูง พร้อมระบบ Role-Based Access Control แยกสิทธิ์ระหว่างฝ่ายจัดรถ พนักงานขับรถ และฝ่ายบัญชี',
        keyFeatures: [
          'Real-time Dispatch Board สำหรับจัดสายรถและตรวจสอบสถานะรายพื้นที่',
          'ระบบสร้างใบส่งสินค้า (Delivery Manifest) และวางบิล PDF อัตโนมัติ',
          'Audit Log ตรวจสอบประวัติการแก้ไขข้อมูลย้อนหลังได้ 100%',
          'Executive Telemetry Dashboard สรุปอัตราการส่งตรงเวลา (On-time SLA)',
        ],
        results: [
          { value: '-55%', label: 'เวลาที่ใช้จัดการเอกสารและจัดสายรถต่อวัน' },
          { value: '99.4%', label: 'ความแม่นยำของข้อมูลใบส่งสินค้าและรอบบิล' },
          { value: '< 120ms', label: 'ความเร็วตอบสนองของ API ค้นหาประวัติขนส่ง' },
        ],
        techStack: ['Nuxt 3', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
        image: '/works/project-1.svg',
        aspectRatio: '16:10',
      },
      {
        id: 'medcore-portal',
        number: '02',
        title: 'VitaCore Multi-Branch Clinic Management Platform',
        client: 'Specialized Healthcare & Wellness Group',
        year: '2025',
        category: 'Bespoke Web App & Patient Booking Portal',
        summary:
          'แพลตฟอร์มนัดหมายออนไลน์และระบบจัดการคิวผู้รับบริการ 6 สาขา เชื่อมต่อระบบแจ้งเตือนผ่าน LINE OA และหน้าจอ Executive Dashboard สำหรับผู้บริหารตรวจสอบรายได้และอัตราการใช้บริการรายวัน',
        impactMetric: 'ยอดนัดหมายออนไลน์ +68%',
        impactDetail: 'ลดอัตราคิวหลุด (No-show) ลง 40% และประมวลผลรายงานสรุปยอดรายสาขาได้แบบ Real-time',
        challenge:
          'คลินิกทั้ง 6 สาขารับจองคิวผ่านแอดมินทางแชตเป็นหลัก ทำให้เกิดปัญหาจองคิวชนกัน แอดมินตอบล่าช้าในช่วงเวลาเร่งด่วน และผู้รับบริการลืมนัดหมาย (No-show) สูงถึง 25% ส่งผลให้เสียโอกาสทางรายได้',
        solution:
          'พัฒนาเว็บแอปพลิเคชันจองคิวที่เชื่อมต่อตารางเวลาแพทย์และห้องหัตถการแบบ Real-time บน Nuxt 3 เชื่อมต่อ Webhook กับ LINE Messaging API เพื่อส่งข้อความยืนยันและแจ้งเตือนล่วงหน้าอัตโนมัติ พร้อมระบบ Back-office ให้สาขาบริหารคิวหน้างานได้ทันที',
        keyFeatures: [
          'Multi-Branch Slot Engine คำนวณตารางเวลาว่างของแพทย์และห้องบริการแบบ Real-time',
          'LINE Official Account Integration แจ้งเตือนนัดหมายและกดยืนยันคิวผ่านมือถือ',
          'Unified Customer Profile เชื่อมโยงประวัติการรับบริการข้ามสาขาอย่างปลอดภัย',
          'Daily Branch Revenue & Utilization Dashboard สำหรับทีมบริหาร',
        ],
        results: [
          { value: '+68%', label: 'สัดส่วนการนัดหมายออนไลน์โดยไม่ต้องผ่านแอดมิน' },
          { value: '-40.2%', label: 'อัตราการผิดนัดหมาย (No-show Rate) ลดลงชัดเจน' },
          { value: '6 สาขา', label: 'เชื่อมต่อฐานข้อมูลกลางพร้อมกันแบบ Zero Conflict' },
        ],
        techStack: ['Nuxt 3', 'TypeScript', 'FastAPI', 'PostgreSQL', 'LINE Messaging API'],
        image: '/works/project-2.svg',
        aspectRatio: '4:3',
      },
      {
        id: 'krono-industrial',
        number: '03',
        title: 'KronoTech Industrial B2B Catalog & Quotation Engine',
        client: 'Industrial Machinery & Engineering Supplier',
        year: '2025',
        category: 'Corporate Platform & B2B Quotation System',
        summary:
          'เว็บไซต์องค์กรและแคตตาล็อกสินค้าวิศวกรรมกว่า 2,500 รายการ พร้อมระบบขอใบเสนอราคาออนไลน์ที่เชื่อมเข้าสู่ระบบ Back-office ของทีมวิศวกรฝ่ายขายโดยตรง โหลดหน้าเว็บเร็วระดับ Sub-second',
        impactMetric: 'เพิ่ม B2B Lead คุณภาพ +2.4x',
        impactDetail: 'คะแนน Core Web Vitals 99/100 และลดเวลาที่ฝ่ายขายใช้จัดทำใบเสนอราคาเบื้องต้นลง 60%',
        challenge:
          'เว็บไซต์เดิมของลูกค้าโหลดช้าและไม่รองรับการค้นหาสเปกสินค้าวิศวกรรมที่มีพารามิเตอร์ซับซ้อน ลูกค้าองค์กรต้องโทรสอบถามสเปกทีละรายการ ทำให้ทีมวิศวกรฝ่ายขายเสียเวลาจัดทำใบเสนอราคาเบื้องต้นนานหลายวัน',
        solution:
          'สร้างแพลตฟอร์ม B2B ใหม่ด้วย Nuxt 3 SSR ร่วมกับระบบค้นหาพารามิเตอร์ความเร็วสูงบน FastAPI และฐานข้อมูลที่ทำ Indexing เฉพาะทาง ลูกค้าสามารถเลือกสเปกเปรียบเทียบและกดขอใบเสนอราคา (RFQ) เข้าสู่ระบบ Back-office ของฝ่ายขายได้ในคลิกเดียว',
        keyFeatures: [
          'High-Speed Parametric Search ค้นหาและกรองสเปกสินค้ากว่า 2,500 SKU ในเสี้ยววินาที',
          'Interactive RFQ Cart & Automated Quotation Draft สำหรับวิศวกรฝ่ายขาย',
          'Dynamic Technical Datasheet & SEO Schema สำหรับสินค้าอุตสาหกรรม',
          'Sales Pipeline Back-Office ติดตามสถานะการปิดการขายของแต่ละองค์กร',
        ],
        results: [
          { value: '2.4x', label: 'จำนวน B2B Lead คุณภาพที่ขอใบเสนอราคาผ่านเว็บไซต์' },
          { value: '99/100', label: 'คะแนน Google PageSpeed & Core Web Vitals' },
          { value: '-60%', label: 'ระยะเวลาจัดทำใบเสนอราคาเบื้องต้นของทีมขาย' },
        ],
        techStack: ['Nuxt 3 SSR', 'Tailwind CSS v4', 'FastAPI', 'MySQL', 'Nginx'],
        image: '/works/project-3.svg',
        aspectRatio: '16:10',
      },
    ],
  },
  pricingSection: {
    eyebrow: '03 / แพ็กเกจ',
    title: 'เลือกแพ็กเกจที่เหมาะกับคุณ',
    description:
      'ราคาสบายกระเป๋า คุ้มค่าทุกบาท ดูแลจนจบงาน และมีทีมงานดูแลหลังส่งมอบงาน',
    packages: [
      {
        id: 'starter-single-page',
        number: '01',
        name: 'Single page web / Starter',
        tagline: 'เหมาะสำหรับเริ่มต้นธุรกิจ',
        pricePrefix: 'เริ่มต้นที่',
        priceAmount: '4,900',
        priceUnit: 'บาท',
        fullPriceText: 'เริ่มต้นที่ 4,900 บาท',
        popular: false,
        included: [
          'Landing Page 1 หน้า',
          'Responsive Design',
          'แก้ไข 2 ครั้ง',
          'ส่งงานภายใน 7 วัน',
        ],
        excluded: [
          'ระบบ Admin หลังบ้าน',
          'SEO Setup',
          'ไม่รวม Web hosting',
          'ไม่รวม Domain name',
        ],
        ctaLabel: 'เลือกแพ็กเกจ',
      },
      {
        id: 'project-customized',
        number: '02',
        name: 'Project customized',
        tagline: 'เหมาะสำหรับโครงการที่มีกระบวนการซับซ้อน/มีข้อมูลจำเพาะ',
        pricePrefix: 'เริ่มต้นที่',
        priceAmount: '12,900',
        priceUnit: 'บาท',
        fullPriceText: 'เริ่มต้นที่ 12,900 บาท',
        popular: true,
        popularLabel: 'ยอดนิยม',
        included: [
          'เน้นงานพัฒนา / งานวิจัย',
          'ให้คำปรึกษาฟรี',
          'ศึกษาความเป็นไปได้',
          'เน้นพูดคุยเพื่อร่าง TOR',
          'ระยะดำเนินงานไม่ต่ำกว่า 30 วัน',
          'ระบบ Admin',
          'มีระบบดูแลหลังการส่งงาน',
          'มีระยะเวลาการรับประกันผลงาน',
          'SEO Setup',
          'รวม Web hosting',
          'รวม Domain name',
          'อื่น ๆ ตามการพูดคุย',
        ],
        excluded: [],
        ctaLabel: 'เลือกแพ็กเกจ',
      },
      {
        id: 'health-research-project',
        number: '03',
        name: 'Health research project',
        tagline: 'สำหรับการให้คำปรึกษางานวิจัย',
        pricePrefix: 'เริ่มต้นที่',
        priceAmount: '9,900',
        priceUnit: 'บาท',
        fullPriceText: 'เริ่มต้นที่ 9,900 บาท',
        popular: false,
        included: [
          'เน้นงานวิจัยตลอดจนการวิเคราะห์ข้อมูล',
          'ให้คำปรึกษาฟรี',
          'ศึกษาความเป็นไปได้',
          'ส่งงานภายใน 21 วัน',
          'อื่น ๆ ตามการพูดคุย',
        ],
        excluded: [],
        ctaLabel: 'เลือกแพ็กเกจ',
      },
    ],
  },
  processSection: {
    eyebrow: '04 / ENGINEERING METHODOLOGY',
    title: 'ขั้นตอนการทำงาน',
    description:
      'กระบวนการทำงานที่ชัดเจน โปร่งใส และตรวจสอบได้ในทุกเฟส เพื่อส่งมอบระบบที่ตรงโจทย์ธุรกิจและใช้งานได้จริงตั้งแต่วันแรก',
    steps: [
      {
        number: '01',
        phaseEn: 'Discovery & Architecture',
        title: 'วิเคราะห์โจทย์ธุรกิจและวางสถาปัตยกรรมระบบ',
        duration: 'Week 1',
        description:
          'เจาะลึกปัญหาคอขวดในกระบวนการทำงานปัจจุบัน กำหนด User Flow, Data Model, และขอบเขตระบบ (Scope of Work) ที่ชัดเจนเพื่อป้องกันงบบานปลาย',
        keyOutputs: ['System Architecture Blueprint', 'Database Schema & API Specification', 'Clear Milestone & Timeline'],
      },
      {
        number: '02',
        phaseEn: 'Editorial UI & UX Prototyping',
        title: 'ออกแบบโครงสร้างหน้าจอและประสบการณ์ผู้ใช้',
        duration: 'Week 2 – 3',
        description:
          'ออกแบบ UI ที่เน้นความชัดเจนของข้อมูล (Typography & Hierarchy) ตัดความรกที่ไม่จำเป็นออก เพื่อให้ทั้งลูกค้าและทีมงานหลังบ้านใช้งานได้คล่องตัวที่สุด',
        keyOutputs: ['Interactive Wireframe & UI Design', 'Responsive Layout System', 'Component & State Flow Verification'],
      },
      {
        number: '03',
        phaseEn: 'Full-Stack Engineering',
        title: 'พัฒนาระบบหน้าบ้าน หลังบ้าน และฐานข้อมูล',
        duration: 'Week 3 – 7',
        description:
          'เขียนโค้ดด้วยมาตรฐาน Type-Safe ทั้งระบบ พัฒนา Frontend ด้วย Nuxt.js คู่กับ Backend API ด้วย FastAPI และฐานข้อมูลที่ปรับจูนประสิทธิภาพและความปลอดภัยครบถ้วน',
        keyOutputs: ['Clean Type-Safe Nuxt & FastAPI Codebase', 'RBAC Authentication & Input Validation', 'Staging Environment for Weekly Review'],
      },
      {
        number: '04',
        phaseEn: 'QA, Launch & Handover',
        title: 'ตรวจสอบคุณภาพ ส่งมอบระบบ และดูแลหลังขึ้นระบบจริง',
        duration: 'Week 8+',
        description:
          'ทดสอบความถูกต้องของข้อมูล ความเร็ว และความปลอดภัยก่อนขึ้น Production จริง พร้อมคู่มือการใช้งาน เอกสารระบบ และการรับประกันดูแลหลังส่งมอบ',
        keyOutputs: ['Zero-Downtime Production Deployment', 'Admin Training & System Documentation', 'Post-Launch Warranty & Monitoring'],
      },
    ],
  },
  contact: {
    eyebrow: '05 / START A CONVERSATION',
    statement: 'มีโปรเจกต์ในใจ? มาคุยกัน',
    subStatement:
      'ไม่ว่าจะเป็นการสร้างเว็บไซต์องค์กรใหม่ ยกระดับระบบหลังบ้านเดิม หรือพัฒนา Web Application เฉพาะทาง ส่งรายละเอียดเบื้องต้นมาให้ทีมวิศวกรของเราช่วยประเมินแนวทางและงบประมาณได้โดยไม่มีค่าใช้จ่าย',
    email: 'bluehose.dev@gmail.com',
    lineId: '@bluehousedev',
    phone: '+66 (0) 65-368-4607',
    responseSla: 'ตอบกลับภายใน 24 ชั่วโมงในวันทำการ',
    socials: [
      { label: 'LINE Official', handle: '@791smjep', href: 'https://line.me' },
      // { label: 'GitHub', handle: 'github.com/bluehouse-dev', href: 'https://github.com' },
      // { label: 'LinkedIn', handle: 'Blue House Dev Solution', href: 'https://linkedin.com' },
    ],
  },
}
