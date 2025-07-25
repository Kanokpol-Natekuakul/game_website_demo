# GameHub 

แพลตฟอร์มเกมสมัยใหม่ที่สร้างด้วย React, TypeScript และ Tailwind CSS แบบ responsive ค้นพบ เรียกดู และสำรวจเกมทุกประเภทและแพลตฟอร์ม

## ✨ ฟีเจอร์

- **Responsive Design** - ปรับให้เหมาะกับ desktop, tablet และ mobile
- **ค้นพบเกม** - เรียกดูเกมแนะนำ, เกมยอดนิยม และเกมใหม่ล่าสุด
- **กรองข้อมูลขั้นสูง** - กรองเกมตามหมวดหมู่, ราคา, คะแนน และวันที่วางจำหน่าย
- **ค้นหาแบบเรียลไทม์** - ค้นหาเกมได้อย่างรวดเร็วด้วยการค้นหาแบบทันที
- **รายละเอียดเกม** - ข้อมูลเกมที่ครบถ้วนพร้อมความต้องการของระบบ
- **ระบบ Wishlist** - บันทึกเกมที่สนใจไว้ในรายการปรารถนา
- **ตะกร้าสินค้า** - เพิ่มเกมลงตะกร้าพร้อมการแจ้งเตือน
- **รองรับ Dark Mode** - สามารถใช้งานได้ทั้งธีมสว่างและมืด
- **UI แบบ Interactive** - เอฟเฟกต์เคลื่อนไหวและ hover ที่นุ่มนวล

## 🚀 เทคโนโลยีที่ใช้

- **Framework**: React 18.3.1
- **ภาษา**: TypeScript 5.6.2
- **Build Tool**: Vite 6.0.5
- **Styling**: Tailwind CSS 3.4.17
- **Routing**: React Router DOM 7.4.0
- **Icons**: Lucide React 0.484.0
- **การแจ้งเตือน**: React Hot Toast 2.5.2
- **เอฟเฟกต์**: Tailwind CSS Animate 1.0.7
- **Utilities**: clsx, tailwind-merge

## 📁 โครงสร้างโปรเจค

```
gamehub/
├── public/                        # ไฟล์สาธารณะ
├── src/
│   ├── components/                # คอมโพเนนต์ต่าง ๆ
│   │   ├── game-card/
│   │   │   └── game-card.tsx      # คอมโพเนนต์การ์ดเกม
│   │   ├── layout/
│   │   │   ├── header.tsx         # ส่วนหัวการนำทาง
│   │   │   ├── footer.tsx         # ส่วนท้ายเว็บไซต์
│   │   │   └── layout.tsx         # โครงสร้างหลัก
│   │   └── ui/
│   │       └── button.tsx         # คอมโพเนนต์ปุ่มที่ใช้ซ้ำได้
│   ├── data/
│   │   └── games.ts               # ข้อมูลเกมจำลอง
│   ├── lib/
│   │   └── utils.ts               # ฟังก์ชันยูทิลิตี้
│   ├── pages/
│   │   ├── home-page.tsx          # หน้าแรก
│   │   ├── games-page.tsx         # หน้ารายการเกม
│   │   ├── game-detail-page.tsx   # หน้ารายละเอียดเกม
│   │   └── not-found-page.tsx     # หน้า 404
│   ├── App.tsx                    # คอมโพเนนต์หลัก
│   ├── main.tsx                   # จุดเริ่มต้นแอปพลิเคชัน
│   └── index.css                  # สไตล์ทั่วไป
├── index.html                     # เทมเพลต HTML
├── package.json                   # Dependencies และ scripts
├── tailwind.config.js             # การตั้งค่า Tailwind
├── tsconfig.json                  # การตั้งค่า TypeScript
└── vite.config.ts                 # การตั้งค่า Vite
```

## 🛠️ การติดตั้งและตั้งค่า

### ข้อกำหนดเบื้องต้น

- Node.js 18+ 
- npm หรือ yarn
- Git

### เริ่มต้นใช้งาน

1. **โคลน repository**
   ```bash
   git clone <repository-url>
   cd gamehub
   ```

2. **ติดตั้ง dependencies**
   ```bash
   npm install
   # หรือ
   yarn install
   ```

3. **เริ่มเซิร์ฟเวอร์พัฒนา**
   ```bash
   npm run dev
   # หรือ
   yarn dev
   ```

4. **เปิดในเบราว์เซอร์**
   ```
   http://localhost:5173
   ```

## 📜 คำสั่งที่ใช้ได้

| คำสั่ง | คำอธิบาย |
|--------|----------|
| `npm run dev` | เริ่มเซิร์ฟเวอร์พัฒนาด้วย host 0.0.0.0 |
| `npm run build` | สร้างไฟล์สำหรับ production |
| `npm run lint` | รัน ESLint และตรวจสอบ TypeScript |
| `npm run format` | จัดรูปแบบโค้ดด้วย Prettier |
| `npm run preview` | ดูตัวอย่าง production build |

## 🎮 โครงสร้างข้อมูลเกม

```typescript
interface Game {
  id: string;           // รหัสเกม
  title: string;        // ชื่อเกม
  description: string;  // คำอธิบาย
  imageUrl: string;     // URL รูปภาพ
  category: string;     // หมวดหมู่
  price: number | null; // ราคา (null = ฟรี)
  discount?: number;    // ส่วนลด (%)
  rating: number;       // คะแนนรีวิว
  releaseDate: string;  // วันที่วางจำหน่าย
  platform: string[];  // แพลตฟอร์ม
  developer: string;    // ผู้พัฒนา
  publisher: string;    // ผู้จัดจำหน่าย
  features: string[];   // ฟีเจอร์พิเศษ
}
```

## 🎨 ภาพรวมคอมโพเนนต์

### GameCard Component
- แสดงข้อมูลเกมในรูปแบบการ์ด
- แสดงคะแนนด้วยดาว
- จัดการรูปแบบราคาและส่วนลด
- รูปภาพ responsive พร้อมเอฟเฟกต์ hover
- ฟังก์ชัน Wishlist

### Layout Components
- **Header**: การนำทางพร้อมเมนูมือถือ, ค้นหา และปุ่มผู้ใช้
- **Footer**: ลิงก์, สมัครรับข่าวสาร และโซเชียลมีเดีย
- **Layout**: โครงสร้างหลักพร้อมการแจ้งเตือน

### หน้าต่าง ๆ
- **HomePage**: ส่วน Hero พร้อมเกมแนะนำ, ยอดนิยม และใหม่
- **GamesPage**: รายการเกมทั้งหมดพร้อมตัวกรองและค้นหา
- **GameDetailPage**: ข้อมูลเกมโดยละเอียดและตัวเลือกการซื้อ
- **NotFoundPage**: หน้า 404 พร้อมตัวเลือกการนำทาง

## 🔍 รายละเอียดฟีเจอร์

### การกรองและค้นหาเกม
- กรองตามหมวดหมู่ (Action RPG, Racing, Strategy ฯลฯ)
- เรียงตามคะแนน, ราคา (ต่ำไปสูง, สูงไปต่ำ) หรือวันที่วางจำหน่าย
- ค้นหาแบบเรียลไทม์ในชื่อเกม
- การกรองหมวดหมู่ผ่าน URL

### Responsive Design
- แนวทาง Mobile-first
- เมนูการนำทางที่พับได้
- เลย์เอาต์แบบ grid ที่ปรับตัวได้
- อินเทอร์เฟซที่เป็นมิตรกับการสัมผัส

### องค์ประกอบ Interactive
- เพิ่มลงตะกร้าพร้อมการแจ้งเตือน
- ฟังก์ชันสลับ Wishlist
- แชร์ลิงก์เกม
- เอฟเฟกต์ hover และแอนิเมชัน

## 🎯 การนำฟีเจอร์หลักมาใช้

### ระบบค้นหาและกรอง
```typescript
// กรองตามหมวดหมู่และคำค้นหา
const filteredGames = allGames.filter(game => {
  const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase());
  const matchesCategory = !activeCategory || game.category === activeCategory;
  return matchesSearch && matchesCategory;
});
```

### การนำทาง Responsive
```tsx
// สลับเมนูมือถือพร้อมแอนิเมชันที่นุ่มนวล
const [isMenuOpen, setIsMenuOpen] = useState(false);

// การแสดงผลแบบมีเงื่อนไขตามขนาดหน้าจอ
<div className={cn("md:hidden", isMenuOpen ? "block" : "hidden")}>
  {/* เนื้อหาเมนูมือถือ */}
</div>
```

### การแจ้งเตือน Toast
```tsx
import toast from 'react-hot-toast';

const handleAddToCart = () => {
  toast.success(`${game.title} เพิ่มลงตะกร้าแล้ว!`);
};
```

## 🚀 Production Build

1. **สร้างโปรเจค**
   ```bash
   npm run build
   ```

2. **ดูตัวอย่าง build**
   ```bash
   npm run preview
   ```

ไฟล์ build จะถูกเก็บไว้ในไดเรกทอรี `dist/`

## 🎨 Styling และ Theming

### การตั้งค่า Tailwind CSS
- โทนสีที่กำหนดเองด้วยตัวแปร CSS
- รองรับ Dark mode
- Responsive breakpoints
- แอนิเมชันที่กำหนดเอง
- Utilities เฉพาะคอมโพเนนต์

### ตัวแปร CSS
```css
:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --primary: 240 5.9% 10%;
  /* ... ตัวแปรอื่น ๆ */
}

.dark {
  --background: 240 10% 3.9%;
  --foreground: 0 0% 98%;
  /* ... ตัวแปร dark mode */
}
```

## 🔧 แนวทางการพัฒนา

### การจัดระเบียบโค้ด
- จัดคอมโพเนนต์ตามฟีเจอร์/โดเมน
- คอมโพเนนต์ UI ที่ใช้ซ้ำได้ใน `components/ui/`
- ข้อมูลและ types ในไดเรกทอรี `data/`
- Utilities ในไดเรกทอรี `lib/`

### แนวทางปฏิบัติที่ดีของ TypeScript
- เปิดใช้ Strict mode
- กำหนด Interface สำหรับโครงสร้างข้อมูลทั้งหมด
- การพิมพ์ที่เหมาะสมสำหรับ props ของคอมโพเนนต์
- ไม่ใช้ any types โดยนัย

### รูปแบบคอมโพเนนต์
- ใช้ Functional components กับ hooks
- กำหนด Props interface
- Forward refs สำหรับคอมโพเนนต์ UI
- รูปแบบการแสดงผลแบบมีเงื่อนไข

## 📱 การปรับปรุงสำหรับมือถือ

- ขนาดปุ่มที่เป็นมิตรกับการสัมผัส
- เลย์เอาต์ grid แบบ responsive
- เมนูการนำทางสำหรับมือถือ
- การโหลดรูปภาพที่ปรับปรุงแล้ว
- การเลื่อนและทรานซิชันที่นุ่มนวล

## 🌟 การพัฒนาในอนาคต

### ฟีเจอร์ที่วางแผนไว้
- การยืนยันตัวตนและโปรไฟล์ผู้ใช้
- ฟังก์ชันตะกร้าสินค้าจริง
- ระบบรีวิวและให้คะแนนเกม
- ตัวกรองการค้นหาขั้นสูง
- เครื่องมือเปรียบเทียบเกม
- ฟีเจอร์โซเชียลและชุมชน

### การปรับปรุงทางเทคนิค
- Server-side rendering (SSR)
- ฟีเจอร์ Progressive Web App (PWA)
- การเชื่อมต่อ API จริง
- การจัดการ state (Redux/Zustand)
- ชุดทดสอบ (Jest/Vitest)
- การรองรับหลายภาษา (i18n)

## 🐛 การแก้ปัญหา

### ปัญหาที่พบบ่อย

**ข้อผิดพลาดใน Build**
```bash
# ล้าง node modules และติดตั้งใหม่
rm -rf node_modules package-lock.json
npm install
```

**ข้อผิดพลาด TypeScript**
```bash
# รันการตรวจสอบ type
npm run lint
npx tsc --noEmit
```

**ปัญหา Styling**
```bash
# สร้าง Tailwind ใหม่
npm run build
```

### เคล็ดลับเรื่องประสิทธิภาพ
- รูปภาพได้รับการปรับปรุงสำหรับเว็บ
- คอมโพเนนต์ใช้ memoization ที่เหมาะสม
- Lazy loading เพื่อประสิทธิภาพที่ดีขึ้น
- รูปแบบการ re-render ที่มีประสิทธิภาพ



**สร้างด้วย ❤️ โดยใช้ React, TypeScript และ Tailwind CSS**
