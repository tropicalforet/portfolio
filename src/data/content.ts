// Semua isi portofolio ada di file ini. Ubah di sini, halaman ikut berubah.

export const profile = {
  name: "Ryzaldy Muchlis",
  role: "Web Developer",
  summary:
    "Lulusan S1 Sistem Informasi UNIKOM. Membangun sistem berbasis web dengan Laravel untuk kebutuhan organisasi nyata, serta proyek machine learning dan IoT.",
  email: "ryzaldyaldy@gmail.com",
  github: "https://github.com/tropicalforet",
  website: "https://ryzaldy.vercel.app",
  // linkedin: "https://www.linkedin.com/in/...",
};

export type Project = {
  slug: string; // dipakai untuk URL: /proyek/<slug>
  title: string;
  context: string;
  description: string;
  highlights?: string[];
  stack: string[];
  // Link demo / GitHub. Kosongkan array jika belum ada.
  links: { label: string; href: string }[];
  // Screenshot: taruh file di public/proyek/<slug>/ lalu tulis nama filenya di sini.
  images?: { src: string; alt: string }[];
};

export const projects: Project[] = [
  {
    slug: "e-office",
    title: "E-Office & Disposisi Surat",
    context: "Skripsi · PT Fasadetama Indonesia",
    description:
      "Sistem surat-menyurat untuk mengelola surat masuk/keluar dan alur disposisi berjenjang dengan lima peran pengguna.",
    highlights: [
      "Tanda tangan elektronik dengan verifikasi QR",
      "Penomoran surat otomatis, SKPD, activity log, dashboard",
      "Diuji dengan Black Box Testing pada 8 modul",
    ],
    stack: ["Laravel 12", "PHP 8.2", "MySQL", "Tailwind", "Alpine.js"],
    links: [{ label: "GitHub", href: "https://github.com/tropicalforet/SI-Administrasi-Surat-PT.FASINDO" }],
    images: [{ src: "dashboard.webp", alt: "Dashboard Direktur Utama" }, { src: "surat-masuk.webp", alt: "Daftar surat masuk dengan sifat dan status" }, { src: "monitoring-disposisi.webp", alt: "Monitoring disposisi berjenjang" }, { src: "surat-keluar.webp", alt: "Surat keluar dengan status e-sign" }],
  },
  {
    slug: "smart-prb",
    title: "SMART PRB",
    context: "Klinik · Program Rujuk Balik",
    description:
      "Sistem pemantauan kepatuhan pengambilan obat pasien PRB: jadwal dan realisasi pengambilan obat, status kepatuhan, serta tindak lanjut pasien.",
    highlights: [
      "Import data resep dari Excel apotek, export rekap kepatuhan",
      "Dashboard grafik, riwayat tindak lanjut, dan audit log",
      "Dilengkapi automated test (PHPUnit)",
    ],
    stack: ["Laravel 12", "Inertia", "React", "TypeScript", "Tailwind", "SQLite"],
    links: [{ label: "GitHub", href: "https://github.com/tropicalforet/smart-prb-public" }],
    images: [{ src: "dashboard.webp", alt: "Dashboard monitoring kepatuhan" }, { src: "data-pasien.webp", alt: "Data pasien dengan jadwal dan early warning" }, { src: "rekap-kepatuhan.webp", alt: "Rekap kepatuhan per FKTP" }],
  },
  {
    slug: "diabetes-prediction",
    title: "Diabetes Prediction",
    context: "Machine Learning",
    description:
      "Klasifikasi risiko diabetes dengan Random Forest (200 estimator) dalam pipeline scikit-learn, disajikan lewat aplikasi Streamlit.",
    highlights: ["Akurasi 97,05% · ROC-AUC 0,9635 pada test set 20%"],
    stack: ["Python", "scikit-learn", "Streamlit"],
    links: [{ label: "GitHub", href: "https://github.com/tropicalforet/Diabetes-Prediction" }],
    images: [{ src: "form.webp", alt: "Form input data kesehatan" }, { src: "hasil.webp", alt: "Hasil prediksi beserta probabilitas" }],
  },
  {
    slug: "clustering-inflasi-jabar",
    title: "Clustering Inflasi Jawa Barat",
    context: "Tugas besar Machine Learning",
    description:
      "Pengelompokan kabupaten/kota di Jawa Barat berdasarkan inflasi year-on-year dengan K-Means, ditampilkan dalam dashboard Streamlit.",
    highlights: ["k = 6 (Elbow + Silhouette 0,452), visualisasi PCA dengan filter"],
    stack: ["Python", "pandas", "scikit-learn", "Streamlit"],
    links: [{ label: "GitHub", href: "https://github.com/tropicalforet/clustering-inflasi-jabar" }],
    images: [{ src: "ringkasan.webp", alt: "Ringkasan hasil dan filter cluster" }, { src: "sebaran-pca.webp", alt: "Peta sebaran cluster hasil PCA" }, { src: "tabel.webp", alt: "Tabel kelompok inflasi per wilayah" }],
  },
  {
    slug: "deteksi-kebocoran-gas",
    title: "Deteksi Kebocoran Gas Dapur",
    context: "MSIB · MySkill IoT Development · Tim 5 orang",
    description:
      "Sensor MQ-135 pada ESP32 mendeteksi gas, memicu buzzer dan LED, memutus listrik lewat relay, dan mengirim notifikasi ke dashboard Blynk.",
    highlights: [
      "Tiga status: normal (< 100 ppm), peringatan (100–199 ppm), bahaya (≥ 200 ppm)",
      "Saat bahaya: relay memutus listrik, buzzer berbunyi, LED merah menyala",
      "Pemantauan real-time di dashboard Blynk",
    ],
    stack: ["ESP32", "MQ-135", "Arduino IDE", "Blynk"],
    links: [{ label: "GitHub", href: "https://github.com/tropicalforet/finalprojectIoT" }],
    images: [{ src: "rangkaian.webp", alt: "Rangkaian ESP32, sensor MQ-135, relay, dan LED di breadboard" }],
  },
];

export const experience = [
  { role: "Web Developer Intern", org: "Diskominfo Jawa Barat" },
  { role: "Peserta MSIB, IoT Development for Smart Industry", org: "MySkill" },
];

export const education = [
  { title: "S1 Sistem Informasi", org: "Universitas Komputer Indonesia (UNIKOM)" },
];
