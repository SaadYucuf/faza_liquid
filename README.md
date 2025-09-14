Faza Liquit - Moliyaviy Savdo Platformasi
Bu Faza Liquit nomli moliyaviy savdo platformasining zamonaviy, sezgir (responsive) veb-ilovasi. Loyiha foydalanuvchilar uchun shaxsiy kabinet, hisoblar balansi, savdo tarixi va sozlamalarni boshqarish imkonini beradi.
Ilova Next.js, TypeScript va Tailwind CSS kabi zamonaviy texnologiyalar yordamida qurilgan bo'lib, shadcn/ui komponentlar kutubxonasidan foydalanilgan.
✨ Asosiy Xususiyatlari
Xavfsiz Avtorizatsiya: Tizimga kirish sahifasi va himoyalangan marshrutlar (protected routes).
Boshqaruv Paneli (Dashboard): Foydalanuvchi balansi, hisob ma'lumotlari va savdo operatsiyalari tarixi.
Tranzaksiyalar Tarixi: Barcha pul o'tkazmalari (kirim va chiqim) ro'yxati.
Profilni Boshqarish: Foydalanuvchi profili, verifikatsiya statusi va shaxsiy ma'lumotlar.
Xavfsizlik Sozlamalari: Parolni o'zgartirish va boshqa qurilmalardan chiqish imkoniyati.
Adaptiv Dizayn: Barcha qurilmalarda (desktop, planshet, mobil) qulay ishlash uchun to'liq moslashuvchan interfeys.
Yorug' va Qorong'u Rejim (Light/Dark Mode): Foydalanuvchi xohishiga ko'ra mavzuni o'zgartirish imkoniyati.
Bildirishnomalar (Toast Notifications): Tizimdagi muvaffaqiyatli yoki xatolik bilan yakunlangan amallar haqida xabarlar.
🛠 Texnologiyalar Steki
Freymvork: Next.js (App Router bilan)
Til: TypeScript
Stillashtirish: Tailwind CSS
UI Komponentlar: shadcn/ui (Radix UI + Tailwind CSS asosida)
Ikonkalar: Lucide React
Holatni Boshqarish (State Management): React Hooks (useState, useContext)
Formlar: React Hook Form
🚀 Ishga Tushirish
Loyihani o'z kompyuteringizda ishga tushirish uchun quyidagi amallarni bajaring:
1. Talablar:
Node.js (v18 yoki undan yuqori)
pnpm (yoki npm, yarn)
2. Loyihani yuklab olish:
code
Bash
git clone https://github.com/sizning-repo- manzilingiz/faza-liquit.git
cd faza-liquit
3. Kerakli paketlarni o'rnatish:
code
Bash
pnpm install
4. Development serverni ishga tushirish:
code
Bash
pnpm dev
5. Brauzerda ochish:
Endi brauzeringizda http://localhost:3000 manzilini oching va loyihani ko'rishingiz mumkin.
🔑 Tizimga Kirish Ma'lumotlari
Bu loyihada oddiy, client-side (brauzerda saqlanuvchi) avtorizatsiya ishlatilgan. Tizimga kirish uchun quyidagi statik ma'lumotlardan foydalaning:
Email: dmamajanova02@gmail.com
Parol: 271973
📁 Loyiha Tuzilmasi
code
Code
faza-liquit/
├── app/                  # Barcha sahifalar va marshrutlar (App Router)
│   ├── dashboard/
│   ├── profile/
│   ├── security/
│   ├── ...
│   ├── layout.tsx
│   └── page.tsx
├── components/           # Qayta ishlatiladigan komponentlar
│   ├── ui/               # shadcn/ui komponentlari
│   ├── auth-provider.tsx
│   ├── dashboard-layout.tsx
│   └── protected-route.tsx
├── hooks/                # Maxsus React hook'lar
│   └── use-toast.ts
├── lib/                  # Yordamchi funksiyalar (masalan, cn)
└── public/               # Statik fayllar (rasm, shriftlar)
📄 Litsenziya
Bu loyiha MIT litsenziyasi asosida tarqatiladi.
