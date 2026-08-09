# Indonesian Migrant Worker Protection — Virtual Exhibition v13

Struktur:
- `index.html` — entry point GitHub Pages.
- `css/styles.css` — style utama dari versi exhibition.
- `css/walkthrough-v13.css` — UI walkthrough.
- `js/app.js` — logic A-Frame, booth, hotspot, bahasa, modal, audio, chat, dan form.
- `js/walkthrough-v13.js` — navigasi walkthrough v13.
- `assets/` — tempat file panorama lokal.

## Asset panorama yang diperlukan
Letakkan file berikut di folder `assets/` lalu ubah path pada `index.html` dari nama file menjadi `assets/nama-file.jpg` bila ingin semua asset berada di folder assets:
- kementerianv.jpg
- binawanv.jpg
- hamaworksolutionv.jpg
- jpathv.jpg
- lpkcisv.jpg
- maharanitriv.jpg

Versi saat ini mempertahankan nama/path asset lama agar kompatibel dengan repository Anda. Jika keenam JPG sudah berada satu folder dengan `index.html`, tidak perlu perubahan.

## Deploy ke GitHub Pages
Upload `index.html`, folder `css`, folder `js`, dan asset panorama JPG ke root repository. Pastikan nama file panorama sama persis (termasuk huruf besar/kecil).

A-Frame 1.4.2 dimuat dari CDN resmi A-Frame. Audio ambience masih menggunakan URL Mixkit yang ada pada versi sumber.
