# Panduan Standar Logging untuk Berbagai Platform

Logging adalah praktik penting dalam pengembangan perangkat lunak untuk memantau, mendiagnosa, dan mengevaluasi kinerja aplikasi. Berikut adalah panduan standar logging untuk platform yang berbeda menggunakan Express.js, Laravel (PHP), Golang, Flutter, dan Kotlin:

---

## Express.js (Node.js)

1. **Pemilihan Logger:**
   - Gunakan library logging seperti Winston atau Bunyan untuk Node.js yang memiliki fitur dan fleksibilitas yang cukup untuk kebutuhan Anda.

2. **Konfigurasi Logger:**
   - Inisialisasi logger di aplikasi Express.js:
     ```javascript
     const winston = require('winston');
     const logger = winston.createLogger({
       transports: [
         new winston.transports.Console(),
         new winston.transports.File({ filename: 'combined.log' })
       ],
       format: winston.format.combine(
         winston.format.timestamp(),
         winston.format.json()
       )
     });
     ```

3. **Penggunaan Logger:**
   - Gunakan level logging yang sesuai: `debug`, `info`, `warn`, `error`.
   - Contoh penggunaan:
     ```javascript
     logger.debug('Pesan debug');
     logger.info('Pesan informasi');
     logger.warn('Pesan peringatan');
     logger.error('Pesan error', error);
     ```

4. **Middleware Logging:**
   - Gunakan middleware untuk menangkap request dan response:
     ```javascript
     app.use((req, res, next) => {
       logger.info(`${req.method} ${req.url}`);
       next();
     });
     ```

---

## Laravel (PHP)

1. **Logging dengan Monolog:**
   - Laravel menggunakan Monolog sebagai library logging bawaan.

2. **Konfigurasi Logger:**
   - Konfigurasi file `config/logging.php` untuk menyesuaikan handler dan format log.

3. **Penggunaan Logger:**
   - Gunakan level logging seperti `debug`, `info`, `warning`, `error`.
   - Contoh penggunaan:
     ```php
     Log::debug('Pesan debug');
     Log::info('Pesan informasi');
     Log::warning('Pesan peringatan');
     Log::error('Pesan error', ['exception' => $exception]);
     ```

4. **Logging Exception:**
   - Tangkap dan log exception dengan detail:
     ```php
     try {
         // Kode yang mungkin menyebabkan exception
     } catch (Exception $e) {
         Log::error('Error saat menjalankan fungsi X', ['exception' => $e]);
     }
     ```

---

## Golang

1. **Logging dengan Logrus:**
   - Gunakan Logrus sebagai library logging untuk Golang.

2. **Konfigurasi Logger:**
   - Inisialisasi logger dalam kode Golang:
     ```go
     import (
         "github.com/sirupsen/logrus"
     )

     var log = logrus.New()

     func init() {
         // Konfigurasi format log
         log.Formatter = &logrus.JSONFormatter{}
         // Tambahkan output untuk menyimpan log ke file
         file, err := os.OpenFile("app.log", os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0666)
         if err == nil {
             log.SetOutput(file)
         } else {
             log.Info("Gagal membuka file log, menggunakan output default stdout")
         }
     }
     ```

3. **Penggunaan Logger:**
   - Gunakan level logging seperti `Debug`, `Info`, `Warn`, `Error`.
   - Contoh penggunaan:
     ```go
     log.Debug("Pesan debug")
     log.Info("Pesan informasi")
     log.Warn("Pesan peringatan")
     log.Error("Pesan error:", err)
     ```

---

## Flutter (Dart)

1. **Logging dengan Logger:**
   - Gunakan package logger untuk logging di Flutter.

2. **Konfigurasi Logger:**
   - Inisialisasi logger di aplikasi Flutter:
     ```dart
     import 'package:logger/logger.dart';

     var logger = Logger();
     ```

3. **Penggunaan Logger:**
   - Gunakan level logging seperti `debug`, `info`, `warning`, `error`.
   - Contoh penggunaan:
     ```dart
     logger.d('Pesan debug');
     logger.i('Pesan informasi');
     logger.w('Pesan peringatan');
     logger.e('Pesan error', exception, stacktrace);
     ```

---

## Kotlin (Android)

1. **Logging dengan Logcat:**
   - Gunakan `Log` untuk logging di Android.

2. **Penggunaan Logger:**
   - Gunakan level logging seperti `VERBOSE`, `DEBUG`, `INFO`, `WARN`, `ERROR`.
   - Contoh penggunaan:
     ```kotlin
     Log.d(TAG, "Pesan debug")
     Log.i(TAG, "Pesan informasi")
     Log.w(TAG, "Pesan peringatan")
     Log.e(TAG, "Pesan error", exception)
     ```

3. **Logcat di Android Studio:**
   - Gunakan Logcat di Android Studio untuk melihat dan memfilter log aplikasi.

---

### Standard Logging dan Error Reporting untuk Aplikasi Flutter/Android yang Sudah Dipublikasikan

Ketika menghadapi aplikasi Flutter atau Android yang sudah dipublikasikan, penting untuk memiliki mekanisme logging yang baik untuk memantau kinerja aplikasi dan juga error reporting untuk mengumpulkan informasi saat terjadi kesalahan. Berikut adalah panduan untuk standard logging dan error reporting dalam konteks aplikasi Flutter/Android yang sudah dipublikasikan:

---

#### Logging di Aplikasi Flutter

1. **Package Logger:**
   - Gunakan package `logger` untuk melakukan logging di Flutter.
   - Instalasi:
     ```yaml
     dependencies:
       logger: ^0.9.4
     ```

2. **Inisialisasi Logger:**
   - Inisialisasi logger di dalam aplikasi Flutter:
     ```dart
     import 'package:logger/logger.dart';

     var logger = Logger();
     ```

3. **Level Logging:**
   - Gunakan level logging seperti `debug`, `info`, `warning`, `error`.
   - Contoh penggunaan:
     ```dart
     logger.d('Pesan debug');
     logger.i('Pesan informasi');
     logger.w('Pesan peringatan');
     logger.e('Pesan error', exception, stacktrace);
     ```

4. **Logging ke File (Opsional):**
   - Untuk mengumpulkan log yang lebih detail, Anda dapat menyimpan log ke file lokal di perangkat:
     ```dart
     import 'package:path_provider/path_provider.dart';
     import 'dart:io';

     Future<void> _writeLogToFile(String log) async {
       final directory = await getApplicationDocumentsDirectory();
       final file = File('${directory.path}/app_log.txt');
       await file.writeAsString('$log\n', mode: FileMode.append);
     }
     ```

---

## Error Reporting untuk Aplikasi Flutter/Android

1. **Firebase Crashlytics (Opsional):**
   - Gunakan Firebase Crashlytics untuk mengumpulkan laporan error dan crash report secara otomatis.
   - Integrasi dengan Flutter:
     - Tambahkan Firebase ke proyek Flutter Anda.
     - Konfigurasi dan inisialisasi Firebase Crashlytics di `main.dart`.
     - Contoh:
       ```dart
       import 'package:firebase_crashlytics/firebase_crashlytics.dart';

       void main() async {
         WidgetsFlutterBinding.ensureInitialized();
         await Firebase.initializeApp();
         FlutterError.onError = FirebaseCrashlytics.instance.recordFlutterError;
         runApp(MyApp());
       }
       ```

### Kesimpulan

Dengan mengikuti panduan standar logging untuk masing-masing platform ini, Anda dapat memastikan bahwa aplikasi Anda terintegrasi dengan baik dalam pengumpulan dan analisis log, serta memfasilitasi proses debugging dan monitoring secara efektif. Pastikan untuk memilih library atau tool logging yang sesuai dengan kebutuhan dan praktik terbaik dalam tim