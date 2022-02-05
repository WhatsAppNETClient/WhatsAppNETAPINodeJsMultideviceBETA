# WhatsApp Client Library for .NET Developer

Adalah library khusus untuk .NET Developer. Library ini dibangun di atas engine [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js/) untuk mempermudah komunikasi dengan aplikasi WhatsApp Web.

## Info Rilis dan Petunjuk Instalasi

Bisa Anda cek di http://wa-net.coding4ever.net/#instalasi

## Persyaratan Sistem

* Windows 8, 10 dan windows versi terbaru
* .NET Framework 4.5 dan .NET versi terbaru
* Node.js versi 14.16.x atau versi terbaru
* [Software git](https://git-scm.com/downloads) (version control)

## Fitur Multi-device

| Feature  | Status |
| ------------- | ------------- |
| Full mode *siluman* (headless/no window)  | ✅  |
| Otomatis menyimpan sesi login (jadi scan qr code WAnya cukup sekali saja)  | ✅ |
| Mendukung penggunaan multi account WA  | ✅  |
| Grab contacts untuk membaca kontak WA sehingga hasilnya bisa disimpan ke database  | ✅ |
| Grab groups dan members untuk membaca data group beserta anggotanya sehingga hasilnya juga bisa disimpan ke database | ✅ |
| Mengirim pesan personal atau group  | ✅  |
| Mengirim banyak pesan (broadcast) | ✅ |
| Mengirim pesan dengan gambar, audio, video, dan semua jenis dokumen | ✅ |
| Mengirim pesan dengan gambar, audio, video, dan semua jenis dokumen via URL | ✅ |
| Mengirim pesan dengan tipe location | Not supported |
| Mengirim pesan dengan tipe button | Not supported | 
| Mengirim pesan dengan tipe list (tidak support untuk WA bisnis) | ✅ |
| ReplyMessage (quoted message)  | ✅ |
| Bisa menyimpan gambar, audio, video, semua jenis dokumen termasuk vcard dari pesan yang masuk (bisa ditentukan sendiri lokasi penyimpanannya)  | ✅ |
| Bisa juga membaca pesan dengan tipe vcard  | ✅  |
| Bisa juga membaca pesan dengan tipe location  | ✅  |
| Bisa membaca pesan dari group dan mendapatkan informasi pengirimnya  | ✅  |
| Bisa mendapatkan nomor WA yang digunakan untuk scan QRCode  | ✅  |
| Cek histori pesan berdasarkan nomor WA, jumlah pesan yang ditampilkan bisa diatur lewat parameter limit | ✅ |
| Subscribe event ChangeState untuk memonitoring perubahan status koneksi | ✅ |
| Subscribe event GroupJoin untuk memonitoring user yang join ke group | ✅ |
| Subscribe event GroupLeave untuk memonitoring user keluar dari group | ✅ |
| Subscribe event ChangeBattery untuk memonitoring status battery | Not supported |
| Subscribe event ReceiveMessage, untuk memonitoring pesan masuk | ✅ |
| Subscribe event ReceiveMessageStatus untuk memonitoring status pesan yang dikirim berhasil atau gagal | ✅ |
| Subscribe event MessageAck untuk memonitoring status pesan setelah di kirim (pending, sudah diterima/baca, dll) | ✅ |
| Tersedia fitur REST API, sehingga semua fitur library WhatsApp NET Client juga bisa diakses via REST API baik secara local maupun remote | ✅ |
| Archive chat (semua atau berdasarkan nomor WA) | ✅ |
| Delete chat (semua atau berdasarkan nomor WA) | ✅ |
| Pengesetan status | Not supported |
| Logout | ✅ |
| Tersedia fitur REST API, sehingga semua fitur library WhatsApp NET Client juga bisa diakses via REST API baik secara local maupun remote | ✅ |