# Panduan Berkontribusi ke Waizly

Untuk berkontribusi pada proyek Waizly, Anda perlu mengikuti beberapa langkah menggunakan Github dan Jira.

**Github**

1. Clone repository Waizly ke mesin lokal Anda.
2. Buat branch baru untuk setiap fitur atau perbaikan bug dan beri nama branch dengan contoh Tiket Jira, misalnya jika Tiket Jira bernama WZ-01 maka nama branch Anda harus menjadi WZ-01.
3. Push branch tersebut ke GitHub (Ini akan memicu otomatisasi untuk memperbarui Awal Aktual, dan status dari **To Do** menjadi **In Progress**, pada tiket Jira).
4. Lakukan perubahan di branch Anda dan buat pesan commit, Anda harus mengikuti standar pesan commit, contoh **git commit -m “WZ-01 #comment selesai menambahkan unit test”**.
5. Push perubahan Anda ke branch **WZ-01** Anda.
6. Buat pull request dari branch **WZ-01** Anda ke branch default Waizly, contoh branch utama (Ini akan memicu otomatisasi untuk memperbarui status dari **In Progress** menjadi **Code Review**, pada tiket Jira).
7. Setelah permintaan pull direview dan di-merge oleh supervisor (Ini akan memicu otomatisasi untuk memperbarui Akhir Aktual, dan status dari **Code Review** menjadi **Ready To Test**, pada tiket Jira).

Untuk detail lebih lanjut, silakan ikuti [instruksi ini](https://help.gitkraken.com/git-integration-for-jira-cloud/smart-commits-overview-gij-cloud/). Dengan mengikuti langkah-langkah ini, Anda dapat berkontribusi pada proyek Waizly secara efektif dan efisien. Terima kasih atas kontribusi Anda!