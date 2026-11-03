# Portofolio — Ryzaldy Muchlis

Website portofolio pribadi. Dibangun dengan [Astro](https://astro.build) dan Tailwind CSS.

## Menjalankan di komputer

Kebutuhan: Node.js 20+.

```bash
npm install
npm run dev
```

Buka `http://localhost:4321`.

## Mengubah isi

Semua isi (profil, proyek, pengalaman, pendidikan) ada di `src/data/content.ts`.
Screenshot proyek: taruh di `public/proyek/<slug>/`, lalu tulis nama filenya di `images` pada proyek tersebut.

## Deploy

Di-deploy ke Vercel. Setiap push ke branch `main` otomatis memperbarui website.
