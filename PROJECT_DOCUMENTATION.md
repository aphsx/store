# 📚 เอกสารคู่มือโปรเจค SHOP.COM

## 🎯 โปรเจคนี้คืออะไร?

โปรเจคนี้คือ **เว็บไซต์ E-Commerce (ร้านค้าออนไลน์)** สำหรับขายเสื้อผ้า ชื่อว่า **SHOP.COM**
เป็นหน้าแรกของเว็บไซต์ที่ออกแบบให้ดูทันสมัย สะอาดตา และมีเอฟเฟกต์ Animation สวยงาม

---

## 🛠️ เทคโนโลยีที่ใช้ (Tech Stack)

### 1. **Next.js 16.0.3** (React Framework)
   - เป็น Framework หลักที่ใช้สร้างเว็บไซต์
   - รองรับ Server-Side Rendering (SSR) และ Static Site Generation (SSG)
   - ใช้ App Router แบบใหม่ (app directory)

### 2. **React 19.2.0**
   - JavaScript Library สำหรับสร้าง User Interface
   - ใช้ Component-based architecture

### 3. **TypeScript 5**
   - เพิ่ม Type Safety ให้กับ JavaScript
   - ช่วยตรวจจับข้อผิดพลาดตอนเขียนโค้ด

### 4. **Tailwind CSS 4**
   - Utility-first CSS Framework
   - ใช้เขียน CSS แบบ inline ในไฟล์ HTML/JSX
   - ทำให้สไตล์เขียนได้เร็วและสะดวก

### 5. **Lucide React** (Icon Library)
   - ไลบรารี่ไอคอนสวยๆ แบบ Modern
   - ใช้สำหรับแสดงไอคอนต่างๆ เช่น:
     - `ShoppingCart` - ไอคอนตะกร้า
     - `User` - ไอคอนผู้ใช้
     - `Search` - ไอคอนค้นหา
     - `Menu`, `X` - ไอคอนเมนูมือถือ
     - `Mail` - ไอคอนอีเมล
     - `Facebook`, `Instagram`, `Twitter` - ไอคอนโซเชียล

---

## 📁 โครงสร้างโปรเจค (Project Structure)

```
store/
├── app/                          # App Router (Next.js 13+)
│   ├── layout.tsx               # Layout หลักของเว็บ (มี Header, Footer)
│   ├── page.tsx                 # หน้าแรก (Home Page)
│   └── globals.css              # CSS ทั่วทั้งเว็บ + Animations
│
├── components/                   # Component ต่างๆ
│   ├── layout/                  # Layout Components
│   │   ├── Header.tsx          # หัวเว็บ (เมนู, ตะกร้า, ค้นหา)
│   │   └── Footer.tsx          # ท้ายเว็บ (ลิงก์, โซเชียล)
│   │
│   ├── home/                    # Components สำหรับหน้าแรก
│   │   ├── HeroSection.tsx     # ส่วน Banner หลัก
│   │   ├── NewArrivals.tsx     # ส่วนสินค้ามาใหม่
│   │   ├── TopSelling.tsx      # ส่วนสินค้าขายดี
│   │   ├── BrowseByStyle.tsx   # ส่วนเลือกสไตล์เสื้อผ้า
│   │   └── Newsletter.tsx      # ส่วนสมัครรับข่าวสาร
│   │
│   └── ui/                      # UI Components แบบ Reusable
│       ├── ProductCard.tsx     # การ์ดแสดงสินค้า
│       └── ScrollReveal.tsx    # Component สำหรับ Animation ตอน Scroll
│
├── lib/                          # ฟังก์ชันและข้อมูลช่วยเหลือ
│   ├── data/
│   │   └── products.ts         # ข้อมูลสินค้าทั้งหมด (Mock Data)
│   ├── types/
│   │   ├── index.ts            # Export Types ทั้งหมด
│   │   └── product.ts          # Type ของสินค้า
│   └── utils/
│       └── constants.ts        # ค่าคงที่ (ชื่อเว็บ, เมนู)
│
├── package.json                  # Dependencies และ Scripts
└── tsconfig.json                # TypeScript Configuration
```

---

## 🧩 รายละเอียด Components แต่ละตัว

### 1️⃣ **app/layout.tsx** - Layout หลัก
**หน้าที่:** กำหนดโครงสร้างหลักของเว็บทุกหน้า

**ทำอะไร:**
- นำเข้า Font "Inter" จาก Google Fonts
- กำหนด Metadata (Title, Description) สำหรับ SEO
- วาง Header และ Footer รอบ content ทุกหน้า

```tsx
<html>
  <body>
    <Header />      {/* หัวเว็บ */}
    {children}      {/* เนื้อหาแต่ละหน้า */}
    <Footer />      {/* ท้ายเว็บ */}
  </body>
</html>
```

---

### 2️⃣ **app/page.tsx** - หน้าแรก
**หน้าที่:** หน้าหลักของเว็บไซต์

**ประกอบด้วย 5 ส่วน:**
1. `<HeroSection />` - Banner หลัก "FIND CLOTHES THAT MATCHES YOUR STYLE"
2. `<NewArrivals />` - แสดงสินค้ามาใหม่ 4 ชิ้น
3. `<TopSelling />` - แสดงสินค้าขายดี 4 ชิ้น
4. `<BrowseByStyle />` - เลือกดูตามสไตล์ (Casual, Formal, Party, Gym)
5. `<Newsletter />` - ฟอร์มสมัครรับข่าวสาร

---

### 3️⃣ **components/layout/Header.tsx** - หัวเว็บ
**หน้าที่:** Navigation Bar (เมนูด้านบน)

**ฟีเจอร์:**
- แสดงโลโก้ "SHOP.COM"
- เมนู: Home, Shop, About
- ปุ่มค้นหา (Search) - กดแล้วขยายเป็นช่องค้นหา
- ปุ่มตะกร้าสินค้า - มี Badge แสดงจำนวน (ตอนนี้ 0)
- ปุ่มบัญชีผู้ใช้ (User)
- Responsive: มีเมนูแบบ Hamburger สำหรับมือถือ

**เทคนิค:**
- ใช้ `useState` จัดการสถานะ (เปิด-ปิด Search, Mobile Menu)
- `sticky top-0` ทำให้ Header ติดด้านบนเมื่อ Scroll
- `backdrop-blur-sm` ทำเอฟเฟกต์พื้นหลังเบลอ

**ไอคอนที่ใช้:**
- `ShoppingCart`, `User`, `Search`, `Menu`, `X` จาก lucide-react

---

### 4️⃣ **components/layout/Footer.tsx** - ท้ายเว็บ
**หน้าที่:** แสดงข้อมูลติดต่อและลิงก์ต่างๆ

**แบ่งเป็น 4 คอลัมน์:**
1. ข้อมูลบริษัท + ปุ่มโซเชียล (Facebook, Instagram, Twitter)
2. ข้อมูลติดต่อ (ที่อยู่, อีเมล, โทรศัพท์)
3. ลิงก์บริการ (Illustration, Mobile Design, SEO, etc.)
4. ลิงก์บริษัท (Service, Features, Team, etc.)

**ไอคอนที่ใช้:**
- `Facebook`, `Instagram`, `Twitter` จาก lucide-react

---

### 5️⃣ **components/home/HeroSection.tsx** - Banner หลัก
**หน้าที่:** ส่วนแรกที่เห็นเมื่อเข้าเว็บ

**ประกอบด้วย:**
- **ซ้าย:** ข้อความใหญ่ "FIND CLOTHES THAT MATCHES YOUR STYLE" + ปุ่ม "Shop Now"
- **ขวา:** Placeholder รูปภาพ (ตอนนี้ใช้ Background + Text "ESSENTIALS")
- **ล่างสุด:** แถบสีดำ (divider)

**Animation:**
- ใช้ `fadeInUp` Keyframe Animation
- เนื้อหาซ้ายขึ้นมาก่อน (0.8s)
- รูปขวาขึ้นตาม (0.8s + delay 0.2s)

---

### 6️⃣ **components/home/NewArrivals.tsx** - สินค้ามาใหม่
**หน้าที่:** แสดงสินค้าใหม่ล่าสุด

**ทำอะไร:**
1. ดึงข้อมูลสินค้าจาก `products` array
2. กรอง (`filter`) เฉพาะสินค้าที่มี `category: 'new-arrivals'`
3. แสดงเป็น Grid 4 คอลัมน์บนเดสก์ท็อป, 2 คอลัมน์บนมือถือ
4. ใช้ `<ProductCard />` แสดงแต่ละสินค้า
5. ห้อมทั้งหมดด้วย `<ScrollReveal>` ทำ Animation ตอน Scroll

---

### 7️⃣ **components/home/TopSelling.tsx** - สินค้าขายดี
**หน้าที่:** แสดงสินค้าขายดี

**เหมือน NewArrivals แต่ต่างกันที่:**
- กรองสินค้า `category: 'top-selling'`
- พื้นหลังเป็นสีเทาอ่อน (`bg-gray-50`)
- ใช้ `direction="right"` ใน ScrollReveal (เลื่อนจากขวา)

---

### 8️⃣ **components/home/BrowseByStyle.tsx** - เลือกสไตล์
**หน้าที่:** แสดงการ์ด 4 สไตล์ให้เลือก

**สไตล์ที่มี:**
1. Casual
2. Formal
3. Party
4. Gym

**เทคนิค:**
- แต่ละการ์ดเป็น Link ไปหน้า Shop พร้อม Query String (?style=casual)
- ใช้ตัวอักษรตัวแรกเป็น Placeholder (เช่น "C" สำหรับ Casual)
- Hover แล้วมีเงา (`hover:shadow-lg`)

---

### 9️⃣ **components/home/Newsletter.tsx** - สมัครรับข่าวสาร
**หน้าที่:** ฟอร์มกรอกอีเมลสมัครรับข่าวสาร

**ฟีเจอร์:**
- ใช้ `useState` เก็บค่า email
- `handleSubmit` ป้องกันการ Refresh หน้า (`e.preventDefault()`)
- ตอนนี้แค่ console.log อีเมล (ยังไม่ได้ส่งจริง)
- พื้นหลังสีดำ มีไอคอน `Mail` ในช่องกรอก

**ไอคอนที่ใช้:**
- `Mail` จาก lucide-react

---

### 🔟 **components/ui/ProductCard.tsx** - การ์ดสินค้า
**หน้าที่:** แสดงสินค้า 1 ชิ้น

**รับ Props:**
- `product` (ชนิด Product)

**แสดงอะไร:**
1. **รูปสินค้า:** ตอนนี้เป็น Placeholder (พื้นสีเทา + ตัวอักษรแรกของชื่อสินค้า)
2. **ชื่อสินค้า:** จำกัด 2 บรรทัด (`line-clamp-2`)
3. **ราคา:** แสดงเป็น "$ 100"

**เทคนิค:**
- ใช้ฟังก์ชัน `getProductColor()` สร้างสีพื้นหลังตาม ID
- `aspect-square` ทำให้รูปเป็นสี่เหลี่ยมจัตุรัส
- `cursor-pointer` + `group` เตรียมไว้สำหรับ Hover Effect

---

### 1️⃣1️⃣ **components/ui/ScrollReveal.tsx** - Animation Component
**หน้าที่:** ทำ Animation เมื่อ Scroll ถึง

**Concept:**
เรียกว่า **"Scroll Reveal Animation"** หรือ **"Intersection Observer Pattern"**

**ทำงานยังไง:**
1. รอจนกว่าผู้ใช้จะ Scroll ลงมาใกล้ Component (10% ของ Component เข้าหน้าจอ)
2. เพิ่ม class `is-visible` ให้ Element
3. CSS จะทำ Transition ให้เนื้อหาเลื่อนเข้ามาและจางขึ้น

**Props:**
- `children` - เนื้อหาที่จะห้อม
- `className` - CSS เพิ่มเติม (ถ้ามี)
- `delay` - หน่วงเวลาก่อน Animation (milliseconds)
- `direction` - ทิศทาง: `'left'` (เลื่อนจากซ้าย) หรือ `'right'` (เลื่อนจากขวา)

**เทคโนโลยีที่ใช้:**
- **Intersection Observer API** - Web API สำหรับตรวจจับว่า Element อยู่ในหน้าจอหรือไม่
- **useRef** - เก็บ Reference ของ DOM Element
- **useEffect** - รัน Observer เมื่อ Component Mount

**CSS ที่ทำงานร่วมกัน (ใน globals.css):**
```css
.scroll-reveal {
  transform: translateX(-50px) scale(0.95);  /* เริ่มต้น: เลื่อนซ้าย + ย่อเล็ก */
  opacity: 0;                                /* โปร่งใส */
  transition: all 0.7s cubic-bezier(...);    /* Animation นุ่มนวล */
}

.scroll-reveal.is-visible {
  transform: translateX(0) scale(1);         /* กลับตำแหน่งปกติ + ขนาดปกติ */
  opacity: 1;                                /* ทึบ */
}
```

---

## 📊 ข้อมูลและ Types

### **lib/types/product.ts** - Type ของสินค้า
```typescript
interface Product {
  id: string;          // รหัสสินค้า
  name: string;        // ชื่อสินค้า
  price: number;       // ราคา
  image: string;       // path รูปภาพ
  category: string;    // หมวดหมู่ (new-arrivals, top-selling)
}
```

### **lib/data/products.ts** - ข้อมูลสินค้า
ข้อมูลสินค้า 8 ชิ้น (Mock Data):
- 4 ชิ้นแรก: `category: 'new-arrivals'`
- 4 ชิ้นหลัง: `category: 'top-selling'`
- ราคาอยู่ระหว่าง $85 - $120

### **lib/utils/constants.ts** - ค่าคงที่
```typescript
SITE_NAME = 'SHOP.COM'

NAV_LINKS = [
  { label: 'home', href: '/' },
  { label: 'Shop', href: '/shop' },
  { label: 'about', href: '/about' }
]
```

---

## 🎨 CSS และ Animations

### **app/globals.css**

**ฟีเจอร์:**
1. **ซ่อน Scrollbar** - ทุก browser
2. **Smooth Scroll** - เลื่อนนุ่มนวล
3. **Font:** Inter จาก Google Fonts
4. **Container:** กว้างสุด 1280px

**Animations 3 แบบ:**

1. **fadeIn** - ค่อยๆ ปรากฏ + เลื่อนขึ้น 20px
2. **fadeInUp** - ค่อยๆ ปรากฏ + เลื่อนขึ้น 30px
3. **scroll-reveal** & **scroll-reveal-right** - เลื่อนจากข้างพร้อมย่อ/ขยาย

**Transition:**
- ใช้ `cubic-bezier(0.4, 0, 0.2, 1)` ทำให้เคลื่อนไหวนุ่มนวล
- ทุก link และ button มี `transition: all 0.3s ease`

---

## 🌟 Pattern และเทคนิคที่ใช้

### 1. **Component Composition**
แยก Component เล็กๆ ประกอบกัน:
- Layout (Header, Footer) ห้อม Page
- Page ประกอบจาก Sections
- Sections ใช้ ProductCard, ScrollReveal

### 2. **Server Components vs Client Components**
- **Server Components (default):** layout.tsx, page.tsx, ProductCard.tsx
- **Client Components (`'use client'`):** Header.tsx, Newsletter.tsx, ScrollReveal.tsx
  - ต้องใช้เมื่อมี State, Event Handlers, Browser APIs

### 3. **Responsive Design**
ใช้ Tailwind Breakpoints:
- Mobile: default
- Tablet: `md:` (768px+)
- Desktop: `lg:` (1024px+)

เช่น:
```tsx
className="grid-cols-2 md:grid-cols-4"  // มือถือ 2 คอลัมน์, เดสก์ท็อป 4 คอลัมน์
```

### 4. **Data Filtering**
```typescript
products.filter(p => p.category === 'new-arrivals')
```
กรองข้อมูลก่อนแสดง

### 5. **Intersection Observer Pattern**
ตรวจจับเมื่อ Element เข้าหน้าจอ → Trigger Animation

---

## 🚀 วิธีรันโปรเจค

```bash
# 1. ติดตั้ง Dependencies
npm install

# 2. รัน Development Server
npm run dev

# 3. เปิดเบราว์เซอร์ไปที่
http://localhost:3000

# 4. Build สำหรับ Production
npm run build

# 5. รัน Production
npm start
```

---

## 📝 สรุป: หน้านี้คืออะไร?

**หน้านี้คือ:**
- เว็บไซต์ E-Commerce หน้าแรก (Landing Page)
- แสดงสินค้าเสื้อผ้า แบ่งเป็น "มาใหม่" และ "ขายดี"
- มี Navigation, ฟอร์มสมัครข่าวสาร, Footer
- ออกแบบ Responsive รองรับทุกหน้าจอ
- มี Scroll Animation ทำให้ดูมีชีวิตชีวา

**เทคโนโลยีหลัก:**
- **Framework:** Next.js 16 + React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Icons:** Lucide React

**ไอคอนที่ใช้ (จาก Lucide React):**
- ShoppingCart, User, Search, Menu, X (ใน Header)
- Mail (ใน Newsletter)
- Facebook, Instagram, Twitter (ใน Footer)

**คอนเซ็ปต์สำคัญ:**
- Component-based Architecture
- Intersection Observer สำหรับ Scroll Animation
- Responsive Design
- TypeScript Type Safety

---

## 🎓 คำศัพท์ที่ควรรู้

| คำ | ความหมาย |
|---|---|
| **Component** | ชิ้นส่วนของ UI ที่นำกลับมาใช้ได้ |
| **Props** | ข้อมูลที่ส่งเข้า Component |
| **State** | ข้อมูลที่เปลี่ยนแปลงได้ใน Component |
| **Hook** | ฟังก์ชันพิเศษของ React (useState, useEffect, useRef) |
| **Responsive** | รองรับหน้าจอทุกขนาด |
| **Animation** | เอฟเฟกต์เคลื่อนไหว |
| **TypeScript** | JavaScript + Type Checking |
| **Intersection Observer** | API ตรวจจับว่า Element อยู่ในหน้าจอหรือไม่ |
| **SSR** | Server-Side Rendering - สร้าง HTML ที่ Server |
| **CSR** | Client-Side Rendering - สร้าง HTML ที่ Browser |

---

**สร้างเมื่อ:** 2025
**โดย:** AI Documentation Generator
**สำหรับ:** โปรเจค SHOP.COM E-Commerce Website
