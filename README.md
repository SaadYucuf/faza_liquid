# 🌟 Faza Liquit - Moliyaviy Savdo Platformasi

Faza Liquit — zamonaviy va sezgir (responsive) moliyaviy savdo platformasining veb-ilovasi. Foydalanuvchilar uchun shaxsiy kabinet, balans nazorati, savdo tarixi va shaxsiy sozlamalarni boshqarish imkonini beradi.

Ilova **Next.js**, **TypeScript** va **Tailwind CSS** texnologiyalari asosida qurilgan bo'lib, **shadcn/ui** komponentlaridan foydalanilgan.

---

## ✨ Asosiy Xususiyatlar

- **🔐 Xavfsiz Avtorizatsiya:** Tizimga kirish sahifasi va himoyalangan marshrutlar (protected routes)
- **📊 Boshqaruv Paneli:** Foydalanuvchi balansi, hisob ma'lumotlari va savdo tarixi
- **💸 Tranzaksiyalar Tarixi:** Barcha pul o'tkazmalari (kirim/chiqim) ro'yxati
- **👤 Profilni Boshqarish:** Profil, verifikatsiya statusi va shaxsiy ma'lumotlar
- **🛡️ Xavfsizlik Sozlamalari:** Parolni o'zgartirish va boshqa qurilmalardan chiqish
- **🖥️ Adaptiv Dizayn:** Desktop, planshet va mobil uchun to'liq moslashuvchan interfeys
- **🌙 Yorug' va Qorong'u Rejim:** Light/Dark mode
- **🔔 Bildirishnomalar:** Toast notifications orqali tezkor xabarlar

---

## 🛠 Texnologiyalar Steki

| Texnologiya     | Tavsif                                      |
| --------------- | ------------------------------------------- |
| Next.js         | App Router bilan zamonaviy React framework  |
| TypeScript      | Tip xavfsizligi uchun                       |
| Tailwind CSS    | Tez va moslashuvchan UI uchun               |
| shadcn/ui       | Radix UI + Tailwind asosidagi komponentlar  |
| Lucide React    | Zamonaviy SVG ikonkalar                     |
| React Hooks     | (useState, useContext) holatni boshqarish   |
| React Hook Form | Formlar va validatsiya                      |

---

## 🚀 Ishga Tushirish Yo'riqnomasi

1. **Talablar:**
   - [Node.js](https://nodejs.org/) (v18+)
   - [pnpm](https://pnpm.io/) (yoki npm/yarn)

2. **Loyihani yuklab olish:**
   ```bash
   git clone https://github.com/SaadYucuf/faza_liquid.git
   cd faza_liquid
   ```

3. **Kerakli paketlarni o'rnatish:**
   ```bash
   pnpm install
   ```

4. **Development serverni ishga tushirish:**
   ```bash
   pnpm dev
   ```

5. **Brauzerda ochish:**
   - [http://localhost:3000](http://localhost:3000) manziliga o'ting.

---

## 🔑 Tizimga Kirish Ma'lumotlari

> **Eslatma:** Bu loyiha client-side (brauzerda) avtorizatsiyadan foydalanadi. Tizimga kirish uchun quyidagilarni ishlating:

- **Email:** `dmamajanova02@gmail.com`
- **Parol:** `271973`

---

## 📁 Loyiha Tuzilmasi

```text
faza_liquid/
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
```

---

## 📄 Litsenziya

Bu loyiha [MIT litsenziyasi](LICENSE) asosida tarqatiladi.

---
