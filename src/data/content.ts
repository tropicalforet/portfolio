// Semua isi portofolio ada di file ini. Ubah di sini, halaman ikut berubah.

export const profile = {
  name: "Ryzaldy Muchlis",
  role: "Web Developer",
  summary:
    "Lulusan S1 Sistem Informasi UNIKOM. Membangun sistem berbasis web dengan Laravel untuk kebutuhan organisasi nyata, serta proyek machine learning dan IoT.",
  email: "spentry223@gmail.com",
  github: "https://github.com/tropicalforet",
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
      "Diuji Black Box pada 8 modul, di-hosting di Hostinger",
    ],
    stack: ["Laravel 12", "PHP 8.2", "MySQL", "Tailwind", "Alpine.js"],
    links: [{ label: "GitHub", href: "https://github.com/tropicalforet/SI-Administrasi-Surat-PT.FASINDO" }],
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
  },
  {
    slug: "deteksi-kebocoran-gas",
    title: "Deteksi Kebocoran Gas Dapur",
    context: "MSIB · MySkill IoT Development · Tim 5 orang",
    description:
      "Sensor MQ-135 pada ESP32 mendeteksi gas, memicu buzzer dan LED, memutus listrik lewat relay, dan mengirim notifikasi ke dashboard Blynk.",
    stack: ["ESP32", "MQ-135", "Arduino IDE", "Blynk"],
    links: [{ label: "GitHub", href: "https://github.com/tropicalforet/finalprojectIoT" }],
  },
];

export const experience = [
  { role: "Web Developer Intern", org: "Diskominfo Jawa Barat" },
  { role: "Peserta MSIB, IoT Development for Smart Industry", org: "MySkill" },
  { role: "Staf Kementerian Pendidikan dan Kebudayaan, program PMB", org: "BEM UNIKOM" },
];

export const education = [
  { title: "S1 Sistem Informasi", org: "Universitas Komputer Indonesia (UNIKOM)" },
  { title: "Beasiswa Kaltim Tuntas, kategori Prestasi", org: "Pemprov Kalimantan Timur" },
];
