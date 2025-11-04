export interface Project {
  id: number;
  title: string;
  category: 'backend' | 'uiux' | 'iot_docs_ml';
  date: string;
  description: string;
  icon: string;
  tags: string[];
  iconColor: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Website & App Sewa Mobil V 2.0",
    category: "backend",
    date: "April 2025",
    description: "**Project Tim**. Memimpin tim (5 anggota) untuk proyek sewa mobil, memastikan pembagian tugas dan integrasi yang lancar.",
    icon: "fas fa-car",
    iconColor: "text-accent-purple",
    tags: ["Kepala Tim", "Task Management", "Implementasi Fitur"]
  },
  {
    id: 2,
    title: "Website E-Voting (Laravel)",
    category: "backend",
    date: "Februari 2025",
    description: "**Project Mandiri**. Merancang dan mengembangkan seluruh fitur e-voting, dari registrasi, pencoblosan, hingga rekapitulasi suara.",
    icon: "fas fa-vote-yea",
    iconColor: "text-accent-purple",
    tags: ["Laravel", "Otentikasi", "Database Config"]
  },
  {
    id: 3,
    title: "Website Layanan Sewa Mobil (Impl. PL)",
    category: "backend",
    date: "Desember 2024",
    description: "**Project Mata Kuliah Implementasi Perangkat Lunak**. Ketua tim, bertanggung jawab dalam pengembangan dashboard dan pengelolaan back-end.",
    icon: "fas fa-tools",
    iconColor: "text-accent-cyan",
    tags: ["Ketua Tim (4 Anggota)", "Backend", "Koneksi Database"]
  },
  {
    id: 4,
    title: "Jurnal Ilmiah (Kecerdasan Buatan)",
    category: "iot_docs_ml",
    date: "Juni 2024",
    description: "**Project Mata Kuliah Kecerdasan Buatan**. Menulis jurnal tentang prediksi open posisi trading Bitcoin menggunakan Moving Average. Nilai $4.00$.",
    icon: "fas fa-chart-line",
    iconColor: "text-accent-blue",
    tags: ["Artificial Intelligence", "Moving Average", "Dokumentasi"]
  },
  {
    id: 5,
    title: "Website Pendaftaran RS Online",
    category: "backend",
    date: "Juni 2024",
    description: "**Project Mata Kuliah Rekayasa Perangkat Lunak**. Ketua tim (4 anggota), bertanggung jawab pada koneksi database dan fitur CRUD.",
    icon: "fas fa-hospital",
    iconColor: "text-accent-purple",
    tags: ["Ketua Tim (4 Anggota)", "CRUD", "Database Management"]
  },
  {
    id: 6,
    title: "Implementasi IOT Peringatan Kebakaran",
    category: "iot_docs_ml",
    date: "Juni 2024",
    description: "**Project Mata Kuliah Dasar Mikro Pengendali**. Membantu pengkodean dan implementasi sistem peringatan kebakaran menggunakan mikrokontroler.",
    icon: "fas fa-fire-extinguisher",
    iconColor: "text-accent-cyan",
    tags: ["IoT", "Mikrokontroler", "Sistem Peringatan"]
  },
  {
    id: 7,
    title: "IoT Monitoring Tanaman Stoberi (PKM)",
    category: "iot_docs_ml",
    date: "Februari 2024",
    description: "**Proposal Program Kreativitas Mahasiswa Karsa Cipta**. Menyusun proposal PKM dan lolos Top 150 tingkat kampus.",
    icon: "fas fa-seedling",
    iconColor: "text-accent-purple",
    tags: ["IoT", "Proposal PKM", "Karsa Cipta"]
  },
  {
    id: 8,
    title: 'UI/UX App "Ngangkat Mas" (Lomba)',
    category: "uiux",
    date: "Agustus 2023",
    description: "**Project Lomba FIK FAIR**. Melakukan analisis dan perancangan UI/UX aplikasi dengan fokus pada pengalaman pengguna (user experience).",
    icon: "fas fa-drafting-compass",
    iconColor: "text-accent-blue",
    tags: ["UI/UX Design", "User Experience", "Analisis Desain"]
  },
  {
    id: 9,
    title: "UI/UX App Catering UMKM",
    category: "uiux",
    date: "Juli 2023",
    description: "**Project Mata Kuliah Interaksi Manusia Komputer**. Melakukan analisis terkait penggunaan aplikasi dan menghasilkan desain navigasi sederhana. Nilai $4.00$.",
    icon: "fas fa-utensils",
    iconColor: "text-accent-blue",
    tags: ["User Analysis", "Simple Navigation", "UI/UX"]
  },
  {
    id: 10,
    title: "Website 360 Virtual Tour SMK",
    category: "uiux",
    date: "Maret 2022",
    description: "**Tugas Akhir Syarat Kelulusan**. Ketua tim, mengoordinasikan perencanaan, bertanggung jawab pada desain UI/UX, dan fotografi $360^{\\circ}$.",
    icon: "fas fa-camera-retro",
    iconColor: "text-accent-cyan",
    tags: ["Tugas Akhir", "UI/UX Design", "Fotografi $360^{\\circ}$"]
  }
];

export type ProjectCategory = 'all' | 'backend' | 'uiux' | 'iot_docs_ml';

export const projectCategories = [
  { key: 'all' as ProjectCategory, label: 'Semua Proyek' },
  { key: 'backend' as ProjectCategory, label: 'Backend' },
  { key: 'uiux' as ProjectCategory, label: 'UI/UX' },
  { key: 'iot_docs_ml' as ProjectCategory, label: 'IoT/Docs/ML' },
];