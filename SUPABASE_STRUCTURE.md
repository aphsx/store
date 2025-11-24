# สรุปโครงสร้าง Supabase ในโปรเจค

## โครงสร้างไฟล์ (File Structure)

```
lib/
├── supabase/
│   ├── client.ts              # Supabase client factory (singleton)
│   ├── errors.ts              # Error handling utilities
│   ├── repositories/
│   │   ├── base.repository.ts      # Generic CRUD operations
│   │   ├── products.repository.ts   # Products-specific queries
│   │   ├── categories.repository.ts # Categories-specific queries
│   │   └── index.ts                # Export all repositories
│   └── index.ts               # Main barrel export
│
├── services/
│   ├── products.service.ts    # Business logic for products
│   ├── categories.service.ts  # Business logic for categories
│   └── index.ts              # Export all services
│
├── database.types.ts         # TypeScript types from Supabase
└── types.ts                  # Frontend types
```

## วิธีการทำงานของแต่ละชั้น (Architecture Layers)

### 1. Client Layer (`lib/supabase/client.ts`)
**หน้าที่:** สร้างและจัดการ Supabase client แบบ singleton

**ฟีเจอร์:**
- ✅ Singleton pattern - มี instance เดียวในทั้งแอป
- ✅ Type-safe กับ Database types
- ✅ ตรวจสอบ environment variables
- ✅ กำหนดค่า auth config
- ✅ มี TABLE_NAMES constants

**ตัวอย่างการใช้:**
```typescript
import { getSupabaseClient, TABLE_NAMES } from '@/lib/supabase'

const supabase = getSupabaseClient()
```

---

### 2. Error Handling Layer (`lib/supabase/errors.ts`)
**หน้าที่:** จัดการ error และ response types

**Types:**
```typescript
// Response type ที่ใช้ทั่วทั้งระบบ
interface ApiResponse<T> {
  data: T | null
  error: SupabaseError | null
  count?: number
}
```

**ฟังก์ชัน:**
- `createSuccessResponse<T>()` - สร้าง success response
- `createErrorResponse<T>()` - สร้าง error response
- `handleSupabaseError()` - แปลง Supabase error เป็น custom error

---

### 3. Repository Layer (`lib/supabase/repositories/`)
**หน้าที่:** Data access layer - จัดการการดึง/เพิ่ม/แก้ไข/ลบข้อมูลจากฐานข้อมูล

#### Base Repository (`base.repository.ts`)
Generic CRUD operations ที่ทุก repository สามารถใช้ได้:

**Methods:**
- `findAll(options?)` - ดึงข้อมูลทั้งหมด (รองรับ sorting, limit)
- `findById(id)` - ดึงข้อมูลตาม ID
- `create(data)` - สร้างข้อมูลใหม่
- `update(id, data)` - แก้ไขข้อมูล
- `delete(id)` - ลบข้อมูล
- `findBy(field, value)` - ค้นหาตาม field

#### Products Repository (`products.repository.ts`)
Methods เฉพาะสำหรับ products:

- `findByCategory(category)` - ค้นหาตามหมวดหมู่
- `findByStyle(style)` - ค้นหาตามสไตล์
- `search(query)` - ค้นหาจาก name, name_en, description
- `findWithFilters(filters)` - ค้นหาด้วย filters หลายอย่าง
- `findLatest(limit)` - ดึงสินค้าล่าสุด (New Arrivals)
- `findFeatured(limit)` - ดึงสินค้าแนะนำ (Top Selling)

**ตัวอย่าง:**
```typescript
import { productsRepository } from '@/lib/supabase'

const response = await productsRepository.findByCategory('polo')
if (response.data) {
  console.log(response.data) // ProductRow[]
}
```

#### Categories Repository (`categories.repository.ts`)
Methods เฉพาะสำหรับ categories:

- `findAllActive()` - ดึง categories ที่ active อย่างเดียว
- `findActiveById(id)` - ดึง active category ตาม ID
- `toggleActive(id, isActive)` - เปิด/ปิดการใช้งาน
- `updateDisplayOrder(id, order)` - เปลี่ยนลำดับการแสดงผล

---

### 4. Service Layer (`lib/services/`)
**หน้าที่:** Business logic layer - แปลง database types เป็น frontend types และจัดการ logic

#### Products Service (`products.service.ts`)
แปลง `ProductRow` (database) เป็น `Product` (frontend)

**Methods:**
- `getAllProducts()` - ดึงสินค้าทั้งหมด
- `getProductById(id)` - ดึงสินค้าตาม ID
- `getProductsByCategory(category)` - ดึงตามหมวดหมู่
- `getProductsByStyle(style)` - ดึงตามสไตล์
- `searchProducts(query)` - ค้นหาสินค้า
- `getLatestProducts(limit)` - ดึงสินค้าล่าสุด
- `getFeaturedProducts(limit)` - ดึงสินค้าแนะนำ

**ตัวอย่าง:**
```typescript
import { getAllProducts } from '@/lib/services/products.service'

const { data, error } = await getAllProducts()
if (data) {
  console.log(data) // Product[] (frontend type)
}
```

#### Categories Service (`categories.service.ts`)
แปลง `CategoryRow` (database) เป็น `Category` (frontend)

**Methods:**
- `getAllCategories()` - ดึงหมวดหมู่ทั้งหมด
- `getActiveCategories()` - ดึงหมวดหมู่ที่ active
- `getCategoryById(id)` - ดึงหมวดหมู่ตาม ID
- `getActiveCategoryById(id)` - ดึง active category ตาม ID
- `toggleCategoryActive(id, isActive)` - เปิด/ปิดการใช้งาน
- `updateCategoryOrder(id, order)` - เปลี่ยนลำดับ

---

## วิธีใช้งานใน Components

### ตัวอย่าง 1: ดึงข้อมูลสินค้าทั้งหมด
```typescript
'use client';

import { useState, useEffect } from 'react';
import { getAllProducts } from '@/lib/services/products.service';
import type { Product } from '@/lib/types';

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      const { data, error } = await getAllProducts();
      if (data) {
        setProducts(data);
      } else if (error) {
        console.error('Error:', error);
      }
      setLoading(false);
    }
    loadProducts();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}
```

### ตัวอย่าง 2: ดึงข้อมูล categories ที่ active
```typescript
'use client';

import { useState, useEffect } from 'react';
import { getActiveCategories } from '@/lib/services/categories.service';
import type { Category } from '@/lib/services/categories.service';

export default function CategoriesSection() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await getActiveCategories();
      if (data) setCategories(data);
    }
    loadCategories();
  }, []);

  return (
    <div>
      {categories.map(cat => (
        <div key={cat.id}>{cat.name}</div>
      ))}
    </div>
  );
}
```

### ตัวอย่าง 3: ค้นหาสินค้า
```typescript
import { searchProducts } from '@/lib/services/products.service';

const handleSearch = async (query: string) => {
  const { data, error } = await searchProducts(query);
  if (data) {
    console.log('Found:', data);
  }
};
```

---

## สรุปข้อดีของโครงสร้างนี้

### ✅ Professional Architecture
- **Separation of Concerns** - แยก data access, business logic, และ UI
- **Single Responsibility** - แต่ละ layer มีหน้าที่ชัดเจน
- **Type Safety** - ใช้ TypeScript types ตลอดทั้งระบบ

### ✅ Easy to Maintain
- เพิ่ม table ใหม่: สร้าง repository + service
- แก้ไข query: แก้ที่ repository
- เปลี่ยน business logic: แก้ที่ service
- Components ไม่ต้องรู้ว่า database ทำงานยังไง

### ✅ Reusable
- Base repository มี CRUD operations พร้อมใช้
- Service layer แปลง types อัตโนมัติ
- Backward compatibility exports

### ✅ Testable
- แต่ละ layer test แยกกันได้
- Mock repositories สำหรับ testing
- Error handling ที่สม่ำเสมอ

---

## Migration Summary

### Files ที่ถูกลบ (Deleted):
- ❌ `lib/supabase.ts` - old simple client
- ❌ `lib/services/products.ts` - old service
- ❌ `lib/services/categories.ts` - old service

### Files ที่สร้างใหม่ (Created):
- ✅ `lib/supabase/client.ts`
- ✅ `lib/supabase/errors.ts`
- ✅ `lib/supabase/repositories/base.repository.ts`
- ✅ `lib/supabase/repositories/products.repository.ts`
- ✅ `lib/supabase/repositories/categories.repository.ts`
- ✅ `lib/services/products.service.ts`
- ✅ `lib/services/categories.service.ts`

### Files ที่อัพเดต (Updated):
- 🔄 `components/home/NewArrivals.tsx`
- 🔄 `components/home/TopSelling.tsx`
- 🔄 `components/home/ProductCategories.tsx`
- 🔄 `app/shop/page.tsx`
- 🔄 `app/product/[id]/page.tsx`
- 🔄 `lib/auth-helpers.ts`
- 🔄 `contexts/AuthContext.tsx`

---

## Database Tables

### Products Table
```sql
- id (uuid)
- name (text)
- name_en (text)
- base_price (numeric)
- image (text)
- category (text)
- description (text)
- sizes (text[])
- colors (text[])
- material (text)
- weight (numeric)
- min_order_qty (integer)
- lead_time_days (integer)
- is_customizable (boolean)
- style (text)
- created_at (timestamptz)
- updated_at (timestamptz)
```

### Product Categories Table
```sql
- id (uuid)
- name (text)
- name_en (text)
- icon (text)
- product_count (integer)
- is_active (boolean)
- display_order (integer)
- created_at (timestamptz)
- updated_at (timestamptz)
```

---

## Tips & Best Practices

### 1. เสมอใช้ Service Layer ใน Components
```typescript
// ✅ ถูกต้อง
import { getAllProducts } from '@/lib/services/products.service'

// ❌ ไม่ควร
import { productsRepository } from '@/lib/supabase'
```

### 2. จัดการ Error อย่างถูกต้อง
```typescript
const { data, error } = await getAllProducts()
if (error) {
  console.error('Error:', error.message)
  // แสดง error UI
  return
}
// ใช้ data ต่อ
```

### 3. ใช้ Loading States
```typescript
const [loading, setLoading] = useState(true)
// ... load data
setLoading(false)

if (loading) return <LoadingSpinner />
```

### 4. Type Safety
```typescript
// ใช้ types จาก services
import type { Product } from '@/lib/types'
import type { Category } from '@/lib/services/categories.service'
```

---

## การเพิ่ม Table ใหม่

### ขั้นตอน:
1. สร้าง migration SQL
2. อัพเดต `database.types.ts`
3. สร้าง repository ใหม่ใน `lib/supabase/repositories/`
4. สร้าง service ใหม่ใน `lib/services/`
5. Export ใน index files
6. ใช้ใน components

**ตัวอย่าง:**
```typescript
// 1. lib/supabase/repositories/orders.repository.ts
export class OrdersRepository extends BaseRepository<'orders'> {
  constructor() {
    super(getSupabaseClient(), 'orders')
  }
  // เพิ่ม methods เฉพาะ orders
}

// 2. lib/services/orders.service.ts
export class OrdersService {
  static async getAllOrders() {
    // business logic
  }
}
```

---

สร้างโดย Claude Code 🤖
อัพเดตล่าสุด: 2025-11-24
