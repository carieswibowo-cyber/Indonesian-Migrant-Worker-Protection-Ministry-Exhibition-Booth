

// Konfigurasi Nomor WhatsApp Penerima Data Pendaftaran & Hubungi Admin Chat
    var targetWhatsAppNumber = "628123456789";

    // Sistem Database Lokalisasi Teks Multibahasa Dinamis
    var currentLanguage = 'id';
    var localization = {
      id: {
        nav_instructions: "<strong>Petunjuk Eksplorasi:</strong><br>• Geser kursor/layar (PC/HP) untuk memutar arah 360°.<br>• Klik Portal <span style='color:#00FFCC; font-weight:bold;'>Hijau</span> / Titik <span style='color:#00FFCC; font-weight:bold;'>Radar</span> untuk pindah booth.<br>• Klik Hotspot <span style='color:#FFCC00; font-weight:bold;'>Kuning</span> atau <span style='color:#FF3366; font-weight:bold;'>Pink</span> untuk Brosur & Video.",
        chat_welcome: "Halo! Selamat datang di Pameran Perlindungan Pekerja Migran Indonesia. Ada informasi program vokasi atau penempatan ke luar negeri yang ingin Anda tanyakan?",
        form_title: "Formulir Pendaftaran Vokasi / Konsultasi",
        form_label_program: "Program yang Dipilih (Otomatis):",
        form_label_name: "Nama Lengkap Anda:",
        form_label_phone: "Nomor WhatsApp Aktif:",
        form_label_notes: "Catatan atau Pertanyaan (Opsional):",
        form_placeholder_name: "Contoh: Budi Santoso",
        form_placeholder_phone: "Contoh: 081234567890",
        form_placeholder_notes: "Tuliskan pertanyaan Anda...",
        form_btn_back: "Kembali",
        form_btn_submit: "Kirim Data",
        success_title: "Pendaftaran Berhasil Disiapkan!",
        success_desc: "Klik tombol hijau di bawah ini untuk mengirimkan detail pendaftaran langsung kepada Admin Official WhatsApp kami:",
        success_btn_wa: "Hubungi Admin via WhatsApp",
        success_btn_finish: "Selesai & Tutup",
        alert_missing_fields: "Mohon isi Nama Lengkap dan Nomor WhatsApp Anda terlebih dahulu!",
        btn_register_trigger: "Daftar Program / Konsultasi",
        btn_close: "Tutup",
        hud_loading: "Memuat pameran...",

        wa_message_header: "Halo Admin Pameran Pekerja Migran,\n\nSaya ingin mendaftar program/berkonsultasi mengenai:\n👉 *Program:* ",
        wa_message_body: "\n\nBerikut adalah data diri saya:\n• *Nama:* ",
        wa_message_phone: "\n• *No. WhatsApp:* ",
        wa_message_notes: "\n• *Catatan Tambahan:* ",
        wa_message_footer: "\n\nTerima kasih. Mohon info tindak lanjutnya.",

        bot_chat_welcome_back: "Kembali ke obrolan utama. Silakan ketuk tombol di bawah atau ketik langsung pertanyaan Anda seputar pameran.",
        bot_chat_wa_invite: "\n\nHubungi admin via WA sekarang: https://wa.me/",
        bot_response_japan: "Tentu! Kami memiliki program Magang Jepang & Kelas Khusus Bahasa/Kepatuhan untuk Specified Skilled Worker (SSW) melalui LPK-CIS, Hama Work Solution (HWS), dan J'Path Center. Anda dapat melihat brosurnya langsung di booth mereka atau mendaftar konsultasi.",
        bot_response_germany: "Benar, untuk penempatan tenaga medis (perawat) ke Jerman dan Timur Tengah, difasilitasi oleh Binawan Inti Utama yang telah berpengalaman 49 tahun. Silakan menuju ke Booth Binawan melalui portal atau radar di kanan bawah untuk detail beasiswa.",
        bot_response_bp2mi: "Pendaftaran resmi Calon Pekerja Migran Indonesia (CPMI) wajib mematuhi standar BP2MI agar bebas biaya penempatan ilegal. Kami sarankan Anda mengisi form konsultasi pada Klinik Layanan di Lobi Utama agar dihubungi langsung oleh petugas imigrasi."
      },
      en: {
        nav_instructions: "<strong>Exploration Tips:</strong><br>• Click & drag (PC) or move your phone (Mobile) to look around 360°.<br>• Click the <span style='color:#00FFCC; font-weight:bold;'>Green</span> portals / <span style='color:#00FFCC; font-weight:bold;'>Radar</span> nodes to change booths.<br>• Click <span style='color:#FFCC00; font-weight:bold;'>Yellow</span> or <span style='color:#FF3366; font-weight:bold;'>Pink</span> hotspots to open brochures/videos.",
        chat_welcome: "Hello! Welcome to the Indonesian Migrant Worker Protection Exhibition. Do you have any questions about vocational programs or overseas job placement?",
        form_title: "Vocational Registration / Consultation Form",
        form_label_program: "Selected Program (Auto):",
        form_label_name: "Your Full Name:",
        form_label_phone: "Active WhatsApp Number:",
        form_label_notes: "Additional Notes or Questions (Optional):",
        form_placeholder_name: "Example: John Doe",
        form_placeholder_phone: "Example: +6281234567890",
        form_placeholder_notes: "Write your questions here...",
        form_btn_back: "Back",
        form_btn_submit: "Submit",
        success_title: "Registration successfully prepared!",
        success_desc: "Click the green button below to send your registration details directly to our Official WhatsApp Admin:",
        success_btn_wa: "Contact Admin via WhatsApp",
        success_btn_finish: "Done & Close",
        alert_missing_fields: "Please fill in your Full Name and WhatsApp Number first!",
        btn_register_trigger: "Apply Program / Consultation",
        btn_close: "Close",
        hud_loading: "Loading exhibition...",

        wa_message_header: "Hello Migrant Worker Exhibition Admin,\n\nI would like to register/consult regarding:\n👉 *Program:* ",
        wa_message_body: "\n\nHere is my details:\n• *Name:* ",
        wa_message_phone: "\n• *WhatsApp No:* ",
        wa_message_notes: "\n• *Additional Notes:* ",
        wa_message_footer: "\n\nThank you. Please let me know the next steps.",

        bot_chat_welcome_back: "Back to main menu. Feel free to tap the options below or type your questions directly.",
        bot_chat_wa_invite: "\n\nContact admin via WhatsApp now: https://wa.me/",
        bot_response_japan: "Absolutely! We offer Japan Internship & Special Japanese/Compliance Courses for Specified Skilled Worker (SSW) routes through LPK-CIS, Hama Work Solution (HWS), and J'Path Center. You can read their brochures in their respective booths or sign up for a consultation.",
        bot_response_germany: "Yes, professional medical placement (nurses) to Germany and the Middle East is facilitated by Binawan Inti Utama (with 49 years of international experience). Please head to the Binawan Booth via portals or the radar minimap for scholarship details.",
        bot_response_bp2mi: "Official registration for Indonesian Migrant Workers (CPMI) must comply with standard BP2MI procedures to avoid illegal brokers. We highly suggest filling out the consultation form at the Service Clinic in the Main Lobby."
      },
      jp: {
        nav_instructions: "<strong>操作ガイド:</strong><br>• マウスドラッグ(PC)またはスマホを動かして360°見渡せます。<br>• <span style='color:#00FFCC; font-weight:bold;'>緑色</span>のポータル/右下の<span style='color:#00FFCC; font-weight:bold;'>レーダー</span>をタップしてブース移動。<br>• <span style='color:#FFCC00; font-weight:bold;'>黄色 (案内)</span> or <span style='color:#FF3366; font-weight:bold;'>ピンク (動画)</span> のホットスポットをクリック。",
        chat_welcome: "こんにちは！インドネシア移民労働者保護省のオンライン展示会へようこそ。職業訓練プログラムや日本・ドイツ・中東への求人・就職についてのご質問はございますか？",
        form_title: "プログラム参加・相談申込フォーム",
        form_label_program: "選択されたプログラム (自動入力):",
        form_label_name: "お名前 (フルネーム):",
        form_label_phone: "有効なWhatsApp番号:",
        form_label_notes: "ご質問・ご要望 (任意):",
        form_placeholder_name: "例：山田太郎",
        form_placeholder_phone: "例：+819012345678",
        form_placeholder_notes: "ご質問内容を詳しく入力してください...",
        form_btn_back: "戻る",
        form_btn_submit: "申込情報を送信する",
        success_title: "お申し込みが完了しました！",
        success_desc: "以下の緑色のボタンをクリックして、お申し込み内容を直接WhatsAppの公式お問合せ窓口までお送りください：",
        success_btn_wa: "公式WhatsAppで問い合わせる",
        success_btn_finish: "終了して閉じる",
        alert_missing_fields: "フルネームとWhatsApp番号は必須入力項目です！",
        btn_register_trigger: "プログラムに申し込む / 相談する",
        btn_close: "閉じる",
        hud_loading: "展示会を読み込んでいます...",

        wa_message_header: "移民労働者展示会管理者様、\n\n以下のプログラムへの応募・面談を希望します：\n👉 *プログラム:* ",
        wa_message_body: "\n\n応募者のプロフィール：\n• *氏名:* ",
        wa_message_phone: "\n• *WhatsApp番号:* ",
        wa_message_notes: "\n• *特記事項・質問:* ",
        wa_message_footer: "\n\nよろしくお願いいたします。今後のステップについてご連絡をお待ちしております。",

        bot_chat_welcome_back: "メインメニューに戻りました。以下の選択肢をタップするか、直接質問を入力してください。",
        bot_chat_wa_invite: "\n\n今すぐWhatsAppで担当者に相談する: https://wa.me/",
        bot_response_japan: "はい！LPK-CIS、Hama Work Solution（HWS）、J'Path Centerを通じて、日本での技能実習制度および特定技能就労（SSW）向けの集中日本語・適応教育プログラムを提供しています。各ブースでパンフレットをご覧になるか、個別面談に今すぐご応募ください。",
        bot_response_germany: "はい、ドイツおよび中東への専門看護師としての海外派遣は、49年の歴史を持つBinawan Inti Utamaが手掛けています。奨学金や研修要件の詳細は、レーダーマップまたはポータルからBinawan（ビナワン）ブースに移動してご覧いただけます。",
        bot_response_bp2mi: "インドネシア人労働者の公式な就労登録プロセスは、不当なブローカーによる被害を防ぐため、保護省（BP2MI）の定める厳格な法令基準に準拠する必要があります。ロビーの「LTSAクリニック」で相談予約を取ることをお勧めします。"
      }
    };

    // ==========================================
    // SCRIPT ZOOM CONTROLS (SCROLL MOUSE)
    // ==========================================
    AFRAME.registerComponent('zoom-controls', {
      init: function () {
        var self = this;
        this.minFov = 35;  // Max Zoom In
        this.maxFov = 105; // Max Zoom Out (Sudut Pandang Lebar / Wide View)

        window.addEventListener('wheel', function (event) {
          // Abaikan zoom jika modal informasi sedang terbuka agar scroll brosur/chat lancar
          var modal = document.querySelector('#info-modal');
          if (modal && modal.style.display === 'block') return;

          var chatWin = document.getElementById('chat-window');
          if (chatWin && chatWin.style.display === 'flex') {
            var rect = chatWin.getBoundingClientRect();
            if (event.clientX >= rect.left && event.clientX <= rect.right &&
                event.clientY >= rect.top && event.clientY <= rect.bottom) {
              return;
            }
          }

          var cameraEl = document.querySelector('a-camera');
          if (cameraEl) {
            var cameraAttr = cameraEl.getAttribute('camera') || { fov: 80 };
            var currentFov = cameraAttr.fov || 80;
            var zoomSensitivity = 0.04;
            var newFov = currentFov + (event.deltaY * zoomSensitivity);
            newFov = Math.max(self.minFov, Math.min(self.maxFov, newFov));
            cameraEl.setAttribute('camera', 'fov', newFov);
          }
        });
      }
    });

    // ==========================================
    // SCRIPT A: REGISTRASI HOTSPOT & PORTAL 3D
    // ==========================================
    AFRAME.registerComponent('info-hotspot', {
      schema: {
        titleId: { type: 'string' }, // Kode ID lokalisasi judul
        type: { type: 'string', default: 'brochure' },
        contentId: { type: 'string' }, // Kode ID lokalisasi rincian konten
        mediaUrl: { type: 'string', default: '' },
        programId: { type: 'string', default: '' }
      },
      init: function() {
        var el = this.el;
        var data = this.data;

        var iconGeo = data.type === 'video' ? 'cone' : 'sphere';
        var iconEl = document.createElement('a-entity');
        iconEl.setAttribute('geometry', {
          primitive: iconGeo,
          radius: 0.1,
          height: 0.2
        });
        iconEl.setAttribute('material', {
          color: data.type === 'video' ? '#FF3366' : '#FFCC00',
          emissive: data.type === 'video' ? '#FF3366' : '#FFCC00',
          emissiveIntensity: 0.5,
          shader: 'flat'
        });

        if (data.type === 'video') {
          iconEl.setAttribute('rotation', '90 0 0');
        }
        el.appendChild(iconEl);

        el.addEventListener('click', function() {
          openInfoModal(data);
        });

        el.addEventListener('mouseenter', function() {
          el.setAttribute('animation__hover', {
            property: 'scale',
            to: '1.2 1.2 1.2',
            dur: 200
          });
        });
        el.addEventListener('mouseleave', function() {
          el.removeAttribute('animation__hover');
          el.setAttribute('scale', '1 1 1');
        });
      }
    });

    // ==========================================
    // SCRIPT B: BOOTH STATE MANAGER (NAVI PORTS)
    // ==========================================
    AFRAME.registerComponent('booth-manager', {
      init: function () {
        this.currentScene = 'kementerian';

        // Pangkalan data multi-bahasa terstruktur untuk portal navigasi dan deskripsi booth
        this.scenes = {
          kementerian: {
            title: {
              id: "Lobi Kementerian Perlindungan Pekerja Migran (BP2MI)",
              en: "Main Lobby - Ministry of Indonesian Migrant Worker Protection (BP2MI)",
              jp: "インドネシア移民労働者保護省公式メインロビー (BP2MI)"
            },
            portals: [
              { target: 'binawan', label: 'Binawan Inti Utama', pos: '-4 1.2 -8', rot: '0 25 0' },
              { target: 'hamawork', label: 'Hama Work Solution', pos: '-8 1.2 -3', rot: '0 70 0' },
              { target: 'jpath', label: "J'Path Center", pos: '4 1.2 -8', rot: '0 -25 0' },
              { target: 'lpkcis', label: 'LPK-CIS Training Center', pos: '8 1.2 -3', rot: '0 -70 0' },
              { target: 'maharani', label: 'PT Maharani Tri Utama', pos: '0 1.2 8', rot: '0 180 0' }
            ],
            hotspots: [
              {
                titleId: "hotspot_kementerian_info",
                type: "brochure",
                pos: "-2.8 1.0 -4.5",
                programId: "Klinik Layanan LTSA BP2MI",
                contentId: "desc_kementerian_info"
              },
              {
                titleId: "hotspot_kementerian_video",
                type: "video",
                pos: "2.8 1.0 -4.5",
                contentId: "desc_kementerian_video",
                mediaUrl: ""
              }
            ]
          },
          binawan: {
            title: {
              id: "Booth Binawan Inti Utama",
              en: "Binawan Inti Utama Booth",
              jp: "ビナワン・インティ・ウタマ展示ブース"
            },
            portals: [
              { target: 'kementerian', label: 'Kembali ke Lobi (BP2MI)', pos: '4 1.2 -8', rot: '0 -25 0' },
              { target: 'hamawork', label: 'Hama Work Solution', pos: '-6 1.2 -6', rot: '0 45 0' },
              { target: 'maharani', label: 'PT Maharani Tri Utama', pos: '0 1.2 8', rot: '0 180 0' }
            ],
            hotspots: [
              {
                titleId: "hotspot_binawan_info",
                type: "brochure",
                pos: "-3.5 1.0 -4",
                programId: "Sertifikasi Perawat Internasional - Binawan",
                contentId: "desc_binawan_info"
              }
            ]
          },
          hamawork: {
            title: {
              id: "Booth Hama Work Solution (HWS)",
              en: "Hama Work Solution (HWS) Booth",
              jp: "Hama Work Solution (HWS) 展示ブース"
            },
            portals: [
              { target: 'kementerian', label: 'Kembali ke Lobi (BP2MI)', pos: '8 1.2 -3', rot: '0 -70 0' },
              { target: 'binawan', label: 'Binawan Inti Utama', pos: '6 1.2 -6', rot: '0 -45 0' },
              { target: 'lpkcis', label: 'LPK-CIS Training Center', pos: '-6 1.2 -6', rot: '0 45 0' }
            ],
            hotspots: [
              {
                titleId: "hotspot_hamawork_info",
                type: "brochure",
                pos: "3.5 1.0 -4",
                programId: "Program Magang Jepang - HWS",
                contentId: "desc_hamawork_info"
              },
              {
                titleId: "hotspot_hamawork_video",
                type: "video",
                pos: "-3.5 1.0 -4",
                contentId: "desc_hamawork_video",
                mediaUrl: ""
              }
            ]
          },
          jpath: {
            title: {
              id: "Booth J'Path Center",
              en: "J'Path Center Booth",
              jp: "J'Path Center 展示ブース"
            },
            portals: [
              { target: 'kementerian', label: 'Kembali ke Lobi (BP2MI)', pos: '-4 1.2 -8', rot: '0 25 0' },
              { target: 'lpkcis', label: 'LPK-CIS Training Center', pos: '6 1.2 -6', rot: '0 -45 0' },
              { target: 'maharani', label: 'PT Maharani Tri Utama', pos: '0 1.2 8', rot: '0 180 0' }
            ],
            hotspots: [
              {
                titleId: "hotspot_jpath_info",
                type: "brochure",
                pos: "3.2 1.0 -4.5",
                programId: "SSW & Study Abroad Japan - J'Path",
                contentId: "desc_jpath_info"
              }
            ]
          },
          lpkcis: {
            title: {
              id: "Booth LPK-CIS Japanese Training Center",
              en: "LPK-CIS Japanese Training Center Booth",
              jp: "LPK-CIS日本語訓練センター・特定技能ブース"
            },
            portals: [
              { target: 'kementerian', label: 'Kembali ke Lobi (BP2MI)', pos: '-8 1.2 -3', rot: '0 70 0' },
              { target: 'jpath', label: "J'Path Center", pos: '-6 1.2 -6', rot: '0 45 0' },
              { target: 'hamawork', label: 'Hama Work Solution', pos: '6 1.2 -6', rot: '0 -45 0' }
            ],
            hotspots: [
              {
                titleId: "hotspot_lpkcis_info",
                type: "brochure",
                pos: "3.5 1.0 -4",
                programId: "Kelas Bahasa & Kepatuhan Kerja - LPK CIS",
                contentId: "desc_lpkcis_info"
              }
            ]
          },
          maharani: {
            title: {
              id: "Booth PT Maharani Tri Utama Mandiri",
              en: "PT Maharani Tri Utama Mandiri Booth",
              jp: "PT Maharani Tri Utama Mandiri 展示ブース"
            },
            portals: [
              { target: 'kementerian', label: 'Kembali ke Lobi (BP2MI)', pos: '0 1.2 -8', rot: '0 0 0' },
              { target: 'binawan', label: 'Binawan Inti Utama', pos: '6 1.2 -6', rot: '0 -45 0' },
              { target: 'jpath', label: "J'Path Center", pos: '-6 1.2 -6', rot: '0 45 0' }
            ],
            hotspots: [
              {
                titleId: "hotspot_maharani_info",
                type: "brochure",
                pos: "3.5 1.0 -4",
                programId: "Layanan Logistik & Penempatan - PT Maharani",
                contentId: "desc_maharani_info"
              }
            ]
          }
        };

        // Kamus Terjemahan terlokalisasi lengkap untuk Hotspots
        this.hotspotTranslations = {
          id: {
            hotspot_kementerian_info: "Klinik Layanan & Regulasi BP2MI",
            desc_kementerian_info: "<strong>Layanan Terpadu Satu Atap (LTSA):</strong> Menyediakan informasi perlindungan hukum, sosial, dan ekonomi bagi seluruh Calon Pekerja Migran Indonesia (CPMI). Di lobi ini, Anda dapat mendaftar sesi konsultasi mengenai standar etika kerja internasional dan regulasi resmi bebas calo.",
            hotspot_kementerian_video: "Video Profil Perlindungan Pekerja Migran",
            desc_kementerian_video: "Saksikan bagaimana Kementerian Perlindungan Pekerja Migran Indonesia (BP2MI) merevolusi tata kelola penempatan kerja yang aman, bermartabat, dan transparan bebas pungli ilegal.",

            hotspot_binawan_info: "Program Pelatihan Perawat & Medis Internasional",
            desc_binawan_info: "<strong>Peluang Karir Perawat di Jerman & Timur Tengah:</strong> Binawan memfasilitasi program pelatihan bahasa asing intensif, penyetaraan lisensi keperawatan (RN), dan penempatan langsung ke rumah sakit besar di Jerman, Arab Saudi, dan UEA.",

            hotspot_hamawork_info: "Brosur Program Magang & SSW Jepang (HWS)",
            desc_hamawork_info: "<strong>Magang Resmi (Internship) & SSW:</strong> Bekerja sama dengan asosiasi industri makanan dan manufaktur di Jepang, HWS merekrut talenta muda terampil untuk ditempatkan langsung dengan skema perlindungan kerja formal.",
            hotspot_hamawork_video: "Video Testimoni Alumni Magang HWS",
            desc_hamawork_video: "Dengarkan cerita sukses dari para pekerja migran terampil asal Indonesia yang berhasil meningkatkan taraf hidup mereka selama magang bersama HWS.",

            hotspot_jpath_info: "Beasiswa Sekolah Bahasa & Jalur Kerja SSW Jepang",
            desc_jpath_info: "<strong>Kelas Khusus Beasiswa & SSW (Specified Skilled Worker):</strong> J'Path Center melatih secara intensif penguasaan bahasa Jepang dari dasar hingga tingkat ujian JLPT N4, penyetaraan ujian kompetensi bidang (kaigo, f&b), serta pembuatan visa tinggal kerja tetap.",

            hotspot_lpkcis_info: "Kurikulum & Standar Kepatuhan LPK-CIS",
            desc_lpkcis_info: "<strong>Sending Organization Terakreditasi:</strong> CIS fokus pada pembentukan disiplin kerja ala Jepang (Kaizen, 5S). Program ini ditujukan agar peserta siap beradaptasi dan lolos verifikasi kepatuhan hukum (*Japanese Compliance*) di tempat kerja baru.",

            hotspot_maharani_info: "Layanan Keberangkatan & Logistik Pekerja Mandiri",
            desc_maharani_info: "<strong>Logistik Handal & Perlindungan Sektor Formal:</strong> Maharani Tri Utama Mandiri melayani rekrutmen terpadu, penyusunan visa resmi, verifikasi asuransi ketenagakerjaan, hingga layanan pendampingan imigrasi di bandara."
          },
          en: {
            hotspot_kementerian_info: "BP2MI Service & Regulation Clinic",
            desc_kementerian_info: "<strong>One-Stop Integrated Service (LTSA):</strong> Provides comprehensive legal, social, and economic protection standards for prospective Indonesian Migrant Workers (CPMI). Register here for secure placement consultation free from illegal brokers.",
            hotspot_kementerian_video: "Ministry Protection Profile Video",
            desc_kementerian_video: "Watch how the Ministry of Indonesian Migrant Worker Protection (BP2MI) revolutionizes transparent, safe, and zero-fee deployment operations.",

            hotspot_binawan_info: "International Healthcare & Nurse Placement",
            desc_binawan_info: "<strong>Nursing Careers in Germany & Middle East:</strong> Binawan facilitates intensive foreign language tutoring, nursing license conversion (Registered Nurse), and direct placement in major hospitals in Germany, Saudi Arabia, and UAE.",

            hotspot_hamawork_info: "HWS Japan Internship & Specified Skilled Worker Program",
            desc_hamawork_info: "<strong>Official Internship & SSW Route:</strong> Partnering with food processing and industrial packing associations in Japan, HWS recruits and trains skilled young talents for formal, fully-protected Japanese employment.",
            hotspot_hamawork_video: "HWS Internship Alumni Success Story",
            desc_hamawork_video: "Listen to inspiring testimonies from Indonesian youths who significantly upgraded their technical skills and household income while working in Japan with HWS.",

            hotspot_jpath_info: "Japanese Language Scholarship & Career Pathway (SSW)",
            desc_jpath_info: "<strong>Scholarship & SSW Track:</strong> J'Path Center manages intensive language classes to pass JLPT N4, specialized vocational examination prep (caregiving, food services), and resident visa facilitation for immediate Japanese employment.",

            hotspot_lpkcis_info: "LPK-CIS Curriculum & Japanese Compliance",
            desc_lpkcis_info: "<strong>Sending Organization Accredited:</strong> LPK-CIS specializes in cultivating Japanese work culture (Kaizen, 5S). Ensures all graduates adapt gracefully and meet strict Japanese legal compliance standards.",

            hotspot_maharani_info: "PT Maharani Logistics & Formal Sector Deployment",
            desc_maharani_info: "<strong>Robust Logistics & Legal Protection:</strong> PT Maharani Tri Utama Mandiri manages institutional recruitment, legal visa processes, national employment insurance activation, and physical transit logistics."
          },
          jp: {
            hotspot_kementerian_info: "BP2MI相談役・制度推進クリニック",
            desc_kementerian_info: "<strong>ワンストップ統合サービス（LTSA）：</strong>法の順守、社会的および経済的保護の基準を明確にし、すべてのインドネシア人労働者（CPMI）の安全な海外進出を保護・教育するブース。不法ブローカー排除の相談を常時承ります。",
            hotspot_kementerian_video: "移民労働者保護省紹介動画",
            desc_kementerian_video: "インドネシア移民労働者保護省（BP2MI）による合法・透明で安心な海外就労プロセスの紹介動画をご覧ください。",

            hotspot_binawan_info: "医療・海外看護師教育プレイスメントプログラム",
            desc_binawan_info: "<strong>ドイツ・中東での看護師求人：</strong>ビナワンは、語学研修から看護ライセンス変換（RN）、ドイツ、サウジアラビア、UAEなどの大病院への直接採用・配属まで、ワンストップのキャリアプランを提供します。",

            hotspot_hamawork_info: "HWS日本食品製造・工業梱包実習プログラム",
            desc_hamawork_info: "<strong>公認技能実習生・特定技能制度：</strong>日本の大手組合・実習受入機関（Inwardis）と直結し、食品加工、パッケージング分野の正規雇用求人に合わせた専門実習トレーニングを徹底指導します。",
            hotspot_hamawork_video: "HWS技能実習修了生の体験談",
            desc_hamawork_video: "HWSでの研修を経て日本に派遣され、技術を高め、安定した世帯収入を達成して帰国した実習生の成功インタビューをご覧ください。",

            hotspot_jpath_info: "日本語教育無償奨学金・特定技能（SSW）就労プラン",
            desc_jpath_info: "<strong>特定技能＆日本語留学制度:</strong> JLPT N4相当の語学試験、特定技能評価試験（介護、外食、農業等）への合格に向けた徹底対策を指導。在留資格申請手続きのサポートを行い、日本での就労開始を実現します。",

            hotspot_lpkcis_info: "LPK-CIS カイゼン訓練カリキュラム",
            desc_lpkcis_info: "<strong>認定送り出し機関（SO）：</strong>日本企業の求める「5S・カイゼン」規律、時間厳守をベースに徹底した生活適応教育を行い、受入企業の生産性向上を即戦力で支援します。",

            hotspot_maharani_info: "PT Maharani出国・行政渡航書類管理サービス",
            desc_maharani_info: "<strong>公式ビザ・労災保険申請代行：</strong>PT Maharani Tri Utama Mandiriは、公認契約に基づく就労ビザ取得、健康診断管理、渡航時の空港カウンター付き添いなど、送出時の移動リスクを完璧に管理します。"
          }
        };

        this.renderElements();
      },

      switchScene: function(target) {
        var sky = document.querySelector('#image-360');
        var self = this;

        closeModal();
        playSwooshSound();

        sky.setAttribute('animation__fadeout', {
          property: 'material.color',
          type: 'color',
          to: '#000000',
          dur: 300,
          easing: 'easeInQuad'
        });

        setTimeout(function() {
          sky.setAttribute('src', '#' + target);
          self.currentScene = target;

          self.renderElements();

          sky.removeAttribute('animation__fadeout');
          sky.setAttribute('animation__fadein', {
            property: 'material.color',
            type: 'color',
            to: '#FFFFFF',
            dur: 500,
            easing: 'easeOutQuad'
          });
          setTimeout(function() {
            sky.removeAttribute('animation__fadein');
          }, 500);
        }, 300);
      },

      renderElements: function() {
        var portalContainer = document.querySelector('#portal-container');
        var hotspotContainer = document.querySelector('#hotspot-container');

        portalContainer.innerHTML = '';
        hotspotContainer.innerHTML = '';

        var data = this.scenes[this.currentScene];
        if (!data) return;

        var hudText = document.querySelector('#hud-title');
        if (hudText) {
          hudText.setAttribute('value', data.title[currentLanguage]);
        }

        document.querySelectorAll('.radar-node').forEach(function(node) {
          node.classList.remove('active');
        });
        var activeNode = document.querySelector('#node-' + this.currentScene);
        if (activeNode) {
          activeNode.classList.add('active');
        }

        var self = this;

        data.portals.forEach(function(p) {
          var entity = document.createElement('a-entity');
          entity.setAttribute('position', p.pos);
          entity.setAttribute('rotation', p.rot);

          var ring = document.createElement('a-ring');
          ring.setAttribute('radius-inner', '0.45');
          ring.setAttribute('radius-outer', '0.5');
          ring.setAttribute('color', '#00FFCC');
          ring.setAttribute('material', 'shader: flat; side: double; opacity: 0.9');
          ring.setAttribute('class', 'clickable');

          var sphere = document.createElement('a-sphere');
          sphere.setAttribute('radius', '0.4');
          sphere.setAttribute('color', '#003344');
          sphere.setAttribute('material', 'shader: flat; opacity: 0.5; transparent: true');
          sphere.setAttribute('class', 'clickable');

          ring.setAttribute('animation', {
            property: 'scale',
            to: '1.1 1.1 1.1',
            dur: 1200,
            dir: 'alternate',
            loop: true,
            easing: 'easeInOutSine'
          });

          var handler = function() { walkToScene(p.target); };
          ring.addEventListener('click', handler);
          sphere.addEventListener('click', handler);

          var label = document.createElement('a-text');
          label.setAttribute('value', p.label);
          label.setAttribute('align', 'center');
          label.setAttribute('position', '0 0.9 0');
          label.setAttribute('scale', '0.7 0.7 0.7');
          label.setAttribute('color', '#FFFFFF');
          label.setAttribute('geometry', 'primitive: plane; width: 2.3; height: 0.4');
          label.setAttribute('material', 'color: #0c1520; opacity: 0.9; shader: flat');

          entity.appendChild(ring);
          entity.appendChild(sphere);
          entity.appendChild(label);
          portalContainer.appendChild(entity);
        });

        if (data.hotspots) {
          data.hotspots.forEach(function(h) {
            var entity = document.createElement('a-entity');
            entity.setAttribute('position', h.pos);

            var outerRing = document.createElement('a-ring');
            outerRing.setAttribute('radius-inner', '0.22');
            outerRing.setAttribute('radius-outer', '0.25');
            outerRing.setAttribute('color', h.type === 'video' ? '#FF3366' : '#FFCC00');
            outerRing.setAttribute('material', 'shader: flat; side: double; opacity: 0.8');
            outerRing.setAttribute('class', 'clickable');
            outerRing.setAttribute('animation', 'property: rotation; to: 0 360 0; loop: true; dur: 4000; easing: linear');

            var interactionSphere = document.createElement('a-sphere');
            interactionSphere.setAttribute('radius', '0.22');
            interactionSphere.setAttribute('material', 'visible: false');
            interactionSphere.setAttribute('class', 'clickable');

            interactionSphere.setAttribute('info-hotspot', {
              titleId: h.titleId,
              type: h.type,
              contentId: h.contentId,
              mediaUrl: h.mediaUrl || '',
              programId: h.programId || ''
            });

            var label = document.createElement('a-text');
            var labelVal = h.type === 'video' ? "▶" : "ℹ";
            label.setAttribute('value', labelVal);
            label.setAttribute('align', 'center');
            label.setAttribute('position', '0 0.5 0');
            label.setAttribute('scale', '0.6 0.6 0.6');
            label.setAttribute('color', h.type === 'video' ? '#FF3366' : '#FFCC00');
            label.setAttribute('geometry', 'primitive: plane; width: 0.4; height: 0.3');
            label.setAttribute('material', 'color: #05101a; opacity: 0.85; shader: flat');

            entity.appendChild(outerRing);
            entity.appendChild(interactionSphere);
            entity.appendChild(label);
            hotspotContainer.appendChild(entity);
          });
        }
      }
    });

    function navigateTo(targetBooth) {
      var sceneEl = document.querySelector('a-scene');
      if (sceneEl && sceneEl.components['booth-manager']) {
        walkToScene(targetBooth);
      }
    }

// ==========================================
    // SCRIPT C: LANG SWITCHER & UTILS (FIXED)
    // ==========================================
    function switchLanguage(lang) {
      currentLanguage = lang;

      // Update active state on button UI
      document.querySelectorAll('.lang-btn').forEach(function(btn) {
        btn.classList.remove('active');
      });
      var activeBtn = document.getElementById('btn-lang-' + lang);
      if (activeBtn) activeBtn.classList.add('active');

      // 1. Terjemahkan instruksi mengambang di layar
      var instructions = document.getElementById('floating-instructions');
      if (instructions) instructions.innerHTML = localization[lang].nav_instructions;

      // 2. Terjemahkan UI Formulir Pendaftaran
      document.getElementById('form-header-title').innerText = localization[lang].form_title;
      document.getElementById('lbl-form-program').innerText = localization[lang].form_label_program;
      document.getElementById('lbl-form-name').innerText = localization[lang].form_label_name;
      document.getElementById('lbl-form-phone').innerText = localization[lang].form_label_phone;
      document.getElementById('lbl-form-notes').innerText = localization[lang].form_label_notes;

      document.getElementById('form-name').placeholder = localization[lang].form_placeholder_name;
      document.getElementById('form-phone').placeholder = localization[lang].form_placeholder_phone;
      document.getElementById('form-notes').placeholder = localization[lang].form_placeholder_notes;

      document.getElementById('btn-form-back').innerText = localization[lang].form_btn_back;
      document.getElementById('btn-form-submit').innerText = localization[lang].form_btn_submit;

      document.getElementById('btn-modal-close').innerText = localization[lang].btn_close;
      document.getElementById('register-trigger-btn').innerText = localization[lang].btn_register_trigger;

      // Terjemahkan Layar Sukses
      document.getElementById('success-title-text').innerText = localization[lang].success_title;
      document.getElementById('success-desc-text').innerText = localization[lang].success_desc;
      document.getElementById('whatsapp-link-btn').innerText = localization[lang].success_btn_wa;
      document.getElementById('success-close-btn-action').innerText = localization[lang].success_btn_finish;

      // Terjemahkan UI Chat Header
      if (lang === 'jp') {
        document.getElementById('chat-header-name').innerText = "展示案内システム";
        document.getElementById('chat-header-sub').innerText = "保護省公式窓口 (BP2MI)";
        document.getElementById('btn-qr-japan').innerText = "日本技能実習 🇯🇵";
        document.getElementById('btn-qr-germany').innerText = "ドイツ看護師 🇩🇪";
        document.getElementById('btn-qr-bp2mi').innerText = "公式手続き規制";
        document.getElementById('chat-user-input').placeholder = "メッセージを入力...";
        document.getElementById('btn-chat-send').innerText = "送信";
      } else if (lang === 'en') {
        document.getElementById('chat-header-name').innerText = "Exhibition Help Desk";
        document.getElementById('chat-header-sub').innerText = "Official Support (BP2MI)";
        document.getElementById('btn-qr-japan').innerText = "Japan Intern 🇯🇵";
        document.getElementById('btn-qr-germany').innerText = "Germany Nurse 🇩🇪";
        document.getElementById('btn-qr-bp2mi').innerText = "BP2MI Procedures";
        document.getElementById('chat-user-input').placeholder = "Type a message...";
        document.getElementById('btn-chat-send').innerText = "Send";
      } else {
        document.getElementById('chat-header-name').innerText = "Sistem Layanan Pameran";
        document.getElementById('chat-header-sub').innerText = "Petugas Informasi Resmi (BP2MI)";
        document.getElementById('btn-qr-japan').innerText = "Magang Jepang 🇯🇵";
        document.getElementById('btn-qr-germany').innerText = "Perawat Jerman 🇩🇪";
        document.getElementById('btn-qr-bp2mi').innerText = "Regulasi Resmi BP2MI";
        document.getElementById('chat-user-input').placeholder = "Ketik pesan Anda...";
        document.getElementById('btn-chat-send').innerText = "Kirim";
      }

      // 3. Terjemahkan Ulang Chat Welcome Message & History
      resetChatHistory();

      // 4. Trigger Gambar Ulang Elemen 3D di dalam A-Frame Scene
      var sceneEl = document.querySelector('a-scene');
      if (sceneEl && sceneEl.components['booth-manager']) {
        sceneEl.components['booth-manager'].renderElements();
      }
    }

    function resetChatHistory() {
      var area = document.getElementById('chat-messages-area');
      area.innerHTML = '';

      var welcomeMsg = document.createElement('div');
      welcomeMsg.classList.add('message', 'received');
      welcomeMsg.innerText = localization[currentLanguage].chat_welcome;
      area.appendChild(welcomeMsg);
    }

    window.addEventListener('DOMContentLoaded', function() {
      switchLanguage('id');
    });

    // ==========================================
    // SCRIPT D: MODAL INTERAKSI & FORM MANAGER (FIXED ESCAPING)
    // ==========================================
    var currentHotspotData = null;

    function openInfoModal(data) {
      var modal = document.querySelector('#info-modal');
      var modalTitle = document.querySelector('#modal-title');
      var modalBody = document.querySelector('#modal-body');
      var regBtn = document.querySelector('#register-trigger-btn');

      document.querySelector('#modal-content-wrapper').style.display = 'block';
      document.querySelector('#registration-form-container').style.display = 'none';
      document.querySelector('#success-container').style.display = 'none';

      var manager = document.querySelector('a-scene').components['booth-manager'];
      var localizedTitle = manager.hotspotTranslations[currentLanguage][data.titleId] || data.programId;
      var localizedContent = manager.hotspotTranslations[currentLanguage][data.contentId] || "";

      modalTitle.innerText = localizedTitle;
      currentProgramId = data.programId || "";

      if (data.type === 'brochure' && currentProgramId !== "") {
        regBtn.style.display = 'inline-block';
      } else {
        regBtn.style.display = 'none';
      }

      // Diperbaiki: Menggunakan tanda kutip tunggal di dalam string untuk menghindari backslash escape error
      var htmlContent = "<div style='margin-bottom: 15px;'>" + localizedContent + "</div>";

      if (data.type === 'video') {
        if (data.mediaUrl) {
          htmlContent += "<div class='video-container'>" +
                         "<iframe src='" + data.mediaUrl + "' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>" +
                         "</div>";
        } else {
          htmlContent += "<div class='video-container' style='background:#0c1520; display:flex; align-items:center; justify-content:center; flex-direction:column; padding: 40px 20px; box-sizing:border-box; border:1px dashed #FF3366;'>" +
                         "<div style='font-size:48px; margin-bottom:10px;'>🎬</div>" +
                         "<strong style='color:#FF3366;'>[Simulasi Video Profil]</strong>" +
                         "<p style='font-size:13px; color:#aaa; text-align:center; margin: 5px 0 0 0;'>Hubungkan dengan menyisipkan URL embed YouTube Anda pada atribut `mediaUrl` di kode HTML.</p>" +
                         "</div>";
        }
      }

      modalBody.innerHTML = htmlContent;
      modal.style.display = 'block';
    }

    function closeModal() {
      var modal = document.querySelector('#info-modal');
      var modalBody = document.querySelector('#modal-body');
      modalBody.innerHTML = '';
      modal.style.display = 'none';
    }

    function showRegistrationForm() {
      document.querySelector('#modal-content-wrapper').style.display = 'none';
      document.querySelector('#registration-form-container').style.display = 'block';
      document.querySelector('#form-program').value = currentProgramId;
    }

    function hideRegistrationForm() {
      document.querySelector('#modal-content-wrapper').style.display = 'block';
      document.querySelector('#registration-form-container').style.display = 'none';
    }

    function submitRegistration() {
      var name = document.querySelector('#form-name').value.trim();
      var phone = document.querySelector('#form-phone').value.trim();
      var notes = document.querySelector('#form-notes').value.trim();

      if (!name || !phone) {
        alert(localization[currentLanguage].alert_missing_fields);
        return;
      }

      var headerText = localization[currentLanguage].wa_message_header;
      var bodyText = localization[currentLanguage].wa_message_body;
      var phoneText = localization[currentLanguage].wa_message_phone;
      var notesText = localization[currentLanguage].wa_message_notes;
      var footerText = localization[currentLanguage].wa_message_footer;

      var waMessage = headerText + currentProgramId +
                      bodyText + name +
                      phoneText + phone;

      if (notes) {
        waMessage += notesText + notes;
      }

      waMessage += footerText;

      var encodedText = encodeURIComponent(waMessage);
      var waUrl = "https://wa.me/" + targetWhatsAppNumber + "?text=" + encodedText;

      var waBtn = document.querySelector('#whatsapp-link-btn');
      waBtn.setAttribute('href', waUrl);

      document.querySelector('#registration-form-container').style.display = 'none';
      document.querySelector('#success-container').style.display = 'block';

      document.querySelector('#form-name').value = "";
      document.querySelector('#form-phone').value = "";
      document.querySelector('#form-notes').value = "";
    }

    // ==========================================
    // SCRIPT E: AUDIO CONTROLLER
    // ==========================================
    var isMuted = true;
    var ambientAudio = document.getElementById('ambient-sound');
    var swooshAudio = document.getElementById('swoosh-sound');

    function toggleAudio() {
      var btn = document.getElementById('audio-control-btn');
      if (isMuted) {
        ambientAudio.play().then(function() {
          isMuted = false;
          btn.innerText = "🔊";
          btn.classList.remove('muted');
          btn.setAttribute('title', 'Matikan Suara Latar');
        }).catch(function(err) {
          console.log("Pemutaran audio diblokir browser:", err);
        });
      } else {
        ambientAudio.pause();
        isMuted = true;
        btn.innerText = "🔇";
        btn.classList.add('muted');
        btn.setAttribute('title', 'Aktifkan Suara Pameran');
      }
    }

    function playSwooshSound() {
      if (!isMuted) {
        swooshAudio.currentTime = 0;
        swooshAudio.volume = 0.6;
        swooshAudio.play().catch(function(e) { console.log(e); });
      }
    }

    document.addEventListener('click', function() {
      if (isMuted && ambientAudio.paused) {
        ambientAudio.volume = 0.3;
        ambientAudio.play().then(function() {
          isMuted = false;
          var btn = document.getElementById('audio-control-btn');
          btn.innerText = "🔊";
          btn.classList.remove('muted');
        }).catch(function(e) { console.log("Autoplay trigger ignored"); });
      }
    }, { once: true });

    // ==========================================
    // SCRIPT F: CUSTOM LIVE CHAT CONTROLLER
    // ==========================================
    function toggleChatWindow() {
      var chatWin = document.getElementById('chat-window');
      var badge = document.querySelector('.chat-badge');
      if (chatWin.style.display === 'none' || chatWin.style.display === '') {
        chatWin.style.display = 'flex';
        if (badge) badge.style.display = 'none';
      } else {
        chatWin.style.display = 'none';
      }
    }

    function handleChatKeyPress(event) {
      if (event.key === 'Enter') {
        sendUserChatMessage();
      }
    }

    function sendUserChatMessage() {
      var inputEl = document.getElementById('chat-user-input');
      var text = inputEl.value.trim();
      if (!text) return;

      appendChatMessage(text, 'sent');
      inputEl.value = '';

      setTimeout(function() {
        generateBotResponse(text);
      }, 1000);
    }

    function sendQuickReply(topic) {
      appendChatMessage(topic, 'sent');
      setTimeout(function() {
        generateBotResponse(topic);
      }, 1000);
    }

    function appendChatMessage(text, sender) {
      var area = document.getElementById('chat-messages-area');
      var msgEl = document.createElement('div');
      msgEl.classList.add('message', sender);
      msgEl.innerText = text;
      area.appendChild(msgEl);
      area.scrollTop = area.scrollHeight;
    }

    function generateBotResponse(userText) {
      var lowerText = userText.toLowerCase();
      var response = "";

      if (lowerText.includes('magang') || lowerText.includes('jepang') || lowerText.includes('japan')) {
        response = localization[currentLanguage].bot_response_japan;
      } else if (lowerText.includes('jerman') || lowerText.includes('perawat') || lowerText.includes('germany') || lowerText.includes('nurse')) {
        response = localization[currentLanguage].bot_response_germany;
      } else if (lowerText.includes('daftar') || lowerText.includes('bp2mi') || lowerText.includes('regulasi') || lowerText.includes('register') || lowerText.includes('procedure')) {
        response = localization[currentLanguage].bot_response_bp2mi;
      } else {
        response = localization[currentLanguage].bot_chat_welcome_back;
      }

      response += localization[currentLanguage].bot_chat_wa_invite + targetWhatsAppNumber;
      appendChatMessage(response, 'received');
    }

// ==========================================
    // WALKTHROUGH NAVIGATION v12
    // A 360 panorama cannot provide true 3D parallax, so this layer
    // simulates a physical walk with camera easing, direction/turn input,
    // then transitions to the linked panorama.
    // ==========================================
    (function(){
      var route = ['kementerian','binawan','hamawork','jpath','lpkcis','maharani'];
      var routeIndex = 0;
      var guided = false;
      var walking = false;
      var keyState = {};
      var turnInterval = null;
      var boothLabels = {
        kementerian:'LOBI', binawan:'BINAWAN', hamawork:'HWS',
        jpath:"J'PATH", lpkcis:'CIS', maharani:'MAHARANI'
      };

      function manager(){
        var scene=document.querySelector('a-scene');
        return scene && scene.components['booth-manager'];
      }
      function currentScene(){ var m=manager(); return m ? m.currentScene : 'kementerian'; }
      function syncRoute(){
        var cur=currentScene(), i=route.indexOf(cur);
        if(i>=0) routeIndex=i;
        var st=document.getElementById('walk-status');
        var pg=document.getElementById('walk-progress');
        if(st) st.textContent='WALKTHROUGH • '+(boothLabels[cur]||cur.toUpperCase());
        if(pg) pg.style.width=((routeIndex/(route.length-1))*100)+'%';
      }
      window.walkToScene=function(target){
        if(walking || target===currentScene()) return;
        var m=manager(); if(!m || !m.scenes[target]) return;
        walking=true;
        var cam=document.querySelector('a-camera');
        var startPos=cam ? (cam.getAttribute('position')||{x:0,y:1.6,z:0}) : {x:0,y:1.6,z:0};
        var startFov=cam ? ((cam.getAttribute('camera')||{}).fov||80) : 80;
        var start=performance.now(), duration=900;
        function ease(t){ return t<.5 ? 2*t*t : 1-Math.pow(-2*t+2,2)/2; }
        function frame(now){
          var t=Math.min(1,(now-start)/duration), e=ease(t);
          if(cam){
            cam.setAttribute('position',{x:0,y:1.6+Math.sin(t*Math.PI)*0.035,z:-0.9*e});
            cam.setAttribute('camera','fov',startFov+(98-startFov)*Math.sin(t*Math.PI));
          }
          if(t<1){ requestAnimationFrame(frame); return; }
          m.switchScene(target);
          setTimeout(function(){
            if(cam){cam.setAttribute('position',{x:0,y:1.6,z:0});cam.setAttribute('camera','fov',80);}
            routeIndex=route.indexOf(target)>=0?route.indexOf(target):routeIndex;
            syncRoute(); walking=false;
          },650);
        }
        requestAnimationFrame(frame);
      };
      window.walkNext=function(){
        var i=route.indexOf(currentScene());
        var next=(i+1)%route.length;
        walkToScene(route[next]);
      };
      window.walkPrevious=function(){
        var i=route.indexOf(currentScene());
        var prev=(i-1+route.length)%route.length;
        walkToScene(route[prev]);
      };
      window.toggleGuidedTour=function(){
        guided=!guided;
        var b=document.getElementById('walk-tour-btn');
        if(b) b.textContent=guided?'AUTO TOUR: ON':'GUIDED TOUR';
        if(guided) walkNext();
      };

      function turn(dir){
        var cam=document.querySelector('a-camera');
        if(!cam) return;
        var r=cam.getAttribute('rotation')||{x:0,y:0,z:0};
        r.y += dir*7;
        cam.setAttribute('rotation',r);
      }
      function bindHold(id, dir){
        var el=document.getElementById(id); if(!el) return;
        var start=function(e){e.preventDefault();turnInterval=setInterval(function(){turn(dir);},55);};
        var stop=function(){clearInterval(turnInterval);turnInterval=null;};
        el.addEventListener('pointerdown',start); el.addEventListener('pointerup',stop); el.addEventListener('pointerleave',stop); el.addEventListener('pointercancel',stop);
      }
      bindHold('walk-left',-1); bindHold('walk-right',1);
      document.getElementById('walk-forward')?.addEventListener('click',walkNext);
      document.getElementById('walk-back')?.addEventListener('click',walkPrevious);

      document.addEventListener('keydown',function(e){
        if(['INPUT','TEXTAREA'].indexOf(document.activeElement.tagName)>=0) return;
        var k=e.key.toLowerCase();
        if(['w','s','a','d','arrowup','arrowdown','arrowleft','arrowright'].indexOf(k)>=0) e.preventDefault();
        if(k==='w'||k==='arrowup'){ if(!keyState.w){keyState.w=true;walkNext();} }
        if(k==='s'||k==='arrowdown'){ if(!keyState.s){keyState.s=true;walkPrevious();} }
        if(k==='a'||k==='arrowleft'){ if(!keyState.a){keyState.a=true;turn(-1);} }
        if(k==='d'||k==='arrowright'){ if(!keyState.d){keyState.d=true;turn(1);} }
        if(k==='escape' && walking) walking=false;
      });
      document.addEventListener('keyup',function(e){keyState[e.key.toLowerCase()]=false;});

      // Keep HUD synchronized after a portal/minimap navigation.
      var oldSwitch = null;
      document.addEventListener('DOMContentLoaded',function(){
        setTimeout(function(){syncRoute();},900);
        setInterval(function(){syncRoute();},1000);
      });
    })();