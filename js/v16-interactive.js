/**
 * V16 Interactive Exhibition - Integration Logic
 * Mengelola transisi gambar 360°, progress counter, favorit, 
 * kuis interaktif, dan integrasi pendaftaran WhatsApp.
 */

// 1. STATE MANAGEMENT PAMERAN
const exhibitionState = {
    currentBooth: 'lobi',
    visitedBooths: new Set(['lobi']), // Melacak booth yang sudah dikunjungi
    favorites: new Set(),            // Menyimpan daftar booth favorit
    
    // Data spesifik untuk masing-masing Booth (Grounded dari aset gambar panorama)
    boothData: {
        lobi: {
            title: "Lobi Utama (Kementerian / BP2MI)",
            bgImage: "kementerianv.jpg",
            description: "Selamat datang di Lobi Utama Kementerian Pelindungan Pekerja Migran Indonesia / BP2MI. Tempat awal untuk mendapatkan informasi resmi, panduan hukum, dan perlindungan bagi calon pekerja migran Indonesia.",
            assistantText: "Halo! Selamat datang di Lobi Utama. Di sini kami menyediakan panduan alur perlindungan resmi agar Anda aman bermigrasi.",
            quiz: {
                question: "Siapa lembaga resmi pemerintah Indonesia yang bertugas melindungi Pekerja Migran?",
                options: ["A. Lembaga Swasta", "B. BP2MI / Kementerian", "C. Agen Sampingan"],
                correct: 1, // Pilihan B
                explanation: "Betul! BP2MI dan Kementerian resmi adalah garda utama pelindung PMI."
            }
        },
        binawan: {
            title: "Booth Binawan Inti Utama",
            bgImage: "binawanv.jpg",
            description: "Binawan Inti Utama (Pioneer 49th Years) menawarkan program pelatihan terstandarisasi global dan penempatan kerja untuk tenaga kesehatan (perawat) serta sektor profesional lainnya ke luar negeri.",
            assistantText: "Halo! Apakah Anda seorang perawat yang tertarik berkarir di rumah sakit internasional di Timur Tengah atau Asia?",
            quiz: {
                question: "Sektor apa yang menjadi keunggulan utama dari program penempatan Binawan?",
                options: ["A. Sektor Pertanian", "B. Sektor Tenaga Kesehatan / Perawat", "C. Sektor Transportasi"],
                correct: 1,
                explanation: "Benar sekali! Binawan terkenal dengan keunggulan penempatan tenaga kesehatan global."
            }
        },
        hws: {
            title: "Booth Hama Work Solution (HWS)",
            bgImage: "hamaworksolutionv.jpg",
            description: "Hama Work Solution (HWS) menyediakan solusi rekrutmen terpercaya untuk penempatan pekerja migran terampil di berbagai negara mitra dengan skema perlindungan yang kuat.",
            assistantText: "Selamat datang di HWS! Kami siap membantu mencocokkan keterampilan Anda dengan peluang kerja terbaik di luar negeri.",
            quiz: {
                question: "Skema penempatan apa yang diutamakan oleh Hama Work Solution?",
                options: ["A. Non-prosedural", "B. Tenaga Kerja Terampil (Skilled Worker)", "C. Pekerja Tanpa Keahlian"],
                correct: 1,
                explanation: "Tepat! Penempatan resmi selalu memprioritaskan sertifikasi dan keahlian (Skilled)."
            }
        },
        jpath: {
            title: "Booth J'Path Center",
            bgImage: "jpathv.jpg",
            description: "J'Path Center menyediakan program beasiswa eksklusif ke Jepang (pembelajaran bahasa Jepang JLPT + SSW) sebagai mitra resmi P3MI untuk membimbing penempatan kerja legal.",
            assistantText: "Konnichiwa! Ingin bekerja di Jepang dengan skema beasiswa bahasa terjamin? Mari bergabung bersama J'Path!",
            quiz: {
                question: "Program beasiswa apa yang ditawarkan oleh J'Path untuk keberangkatan ke Jepang?",
                options: ["A. JLPT + SSW", "B. Hanya Kursus Singkat", "C. Beasiswa Kuliah S3"],
                correct: 0, // Pilihan A
                explanation: "Luar biasa! Kombinasi sertifikasi JLPT dan SSW (Specified Skilled Worker) adalah kunci sukses kerja ke Jepang."
            }
        },
        cis: {
            title: "Booth LPK-CIS",
            bgImage: "lpkcisv.jpg",
            description: "LPK-CIS merupakan Japanese Language Training Center sekaligus Sending Organization (SO/RSO) resmi untuk menyalurkan tenaga kerja terampil Indonesia langsung ke perusahaan Jepang.",
            assistantText: "Selamat datang di LPK-CIS! Kami melatih kemampuan bahasa dan budaya agar Anda siap beradaptasi di dunia kerja Jepang.",
            quiz: {
                question: "Apa fungsi dari LPK-CIS selain sebagai pusat pelatihan bahasa Jepang?",
                options: ["A. Agen Wisata", "B. Sending Organization (SO) Resmi", "C. Toko Buku"],
                correct: 1,
                explanation: "Benar! Sebagai SO resmi, LPK-CIS dapat mengirimkan peserta magang/pekerja langsung ke Jepang."
            }
        },
        maharani: {
            title: "Booth PT Maharani Tri Utama Mandiri",
            bgImage: "maharanitriv.jpg",
            description: "PT Maharani Tri Utama Mandiri berfokus pada penyediaan lowongan kerja sektor domestik dan formal dengan pengawasan serta perlindungan hukum ketat untuk memastikan keselamatan pekerja.",
            assistantText: "Halo! Kami memastikan seluruh proses rekrutmen Anda dilakukan secara transparan, legal, dan

