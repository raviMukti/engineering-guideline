# Debugger Setup untuk VSCode

Debugger adalah alat yang sangat penting dalam pengembangan perangkat lunak untuk menemukan dan memperbaiki bug serta memahami alur program. Berikut adalah panduan setup debugger untuk PHP, JavaScript/TypeScript, dan Golang menggunakan IDE Visual Studio Code (VSCode):

---

## Debugger untuk PHP (Laravel, Symfony, dll.)

1. **Instalasi Ekstensi PHP Debug:**
   - Install ekstensi PHP Debug dari Visual Studio Marketplace.
   - Buka VSCode, masuk ke Extensions, dan cari "PHP Debug" untuk menginstal.

2. **Konfigurasi `launch.json`:**
   - Buka VSCode, buka panel Debug (`Ctrl+Shift+D`), dan klik tombol gear untuk buat `launch.json`.
   - Konfigurasi contoh untuk Laravel:
     ```json
     {
       "version": "0.2.0",
       "configurations": [
         {
           "name": "Listen for XDebug",
           "type": "php",
           "request": "launch",
           "port": 9000,
           "pathMappings": {
             "/var/www/html": "${workspaceFolder}"
           }
         }
       ]
     }
     ```
   - Pastikan konfigurasi port dan pathMappings sesuai dengan pengaturan XDebug di PHP.ini atau server Anda.

3. **Debugging:**
   - Letakkan breakpoint di dalam kode PHP Anda dengan mengeklik sisi kiri baris kode.
   - Mulai debugging dengan memilih konfigurasi "Listen for XDebug" dan tekan tombol "Play" di panel Debug.

---

## Debugger untuk JavaScript/TypeScript (Node.js.)

1. **Instalasi Ekstensi Debugger untuk Node.js:**
   - Install ekstensi Debugger untuk Node.js dari Visual Studio Marketplace.
   - Buka VSCode, masuk ke Extensions, dan cari "Debugger for Node.js" untuk menginstal.

2. **Konfigurasi `launch.json`:**
   - Buka panel Debug (`Ctrl+Shift+D`), klik tombol gear untuk buat `launch.json`.
   - Konfigurasi contoh untuk Node.js:
     ```json
     {
       "version": "0.2.0",
       "configurations": [
         {
           "type": "node",
           "request": "launch",
           "name": "Launch Program",
           "program": "${workspaceFolder}/app.js",
           "outFiles": ["${workspaceFolder}/dist/**/*.js"]
         }
       ]
     }
     ```
   - Sesuaikan `"program"` dengan file entry point aplikasi Anda.

3. **Debugging:**
   - Letakkan breakpoint di dalam kode JavaScript/TypeScript Anda.
   - Pilih konfigurasi "Launch Program" dan tekan tombol "Play" di panel Debug untuk memulai debugging.

---

## Debugger untuk React, Vue, Nuxt, Next (Opsional)
1. **Instalasi Ekstensi Debugger untuk Node.js:**
   - Install ekstensi Debugger untuk Node.js dari Visual Studio Marketplace.
   - Buka VSCode, masuk ke Extensions, dan cari "JavaScript Debugger (Nightly)" untuk menginstal.

2. **Konfigurasi `launch.json`:**
   - Buka panel Debug (`Ctrl+Shift+D`), klik tombol gear untuk buat `launch.json`.
   - Konfigurasi contoh untuk Node.js:
     ```json
     {
        // Use IntelliSense to learn about possible attributes.
        // Hover to view descriptions of existing attributes.
        // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
        "version": "0.2.0",
        "configurations": [
            {
                "type": "chrome",
                "request": "launch",
                "name": "Debug Vite App",
                "url": "http://localhost:5173",
                "webRoot": "${workspaceFolder}/src",
                "sourceMapPathOverrides": {
                "webpack:///./src/*": "${webRoot}/*"
                },
                "sourceMaps": true,
                "runtimeArgs": ["--remote-debugging-port=9222", "--incognito"]
            },
            {
                "name": "Run Node",
                "type": "node",
                "request": "launch",
                "runtimeExecutable": "npm",
                "args": ["run", "dev"],
                "cwd": "${workspaceFolder}",
                "console": "integratedTerminal"
            }
        ]
    }
     ```
   - Sesuaikan `"program"` dengan file entry point aplikasi Anda.

3. **Debugging:**
   - Letakkan breakpoint di dalam kode JavaScript/TypeScript Anda.
   - Pilih konfigurasi "Launch Program" dan tekan tombol "Play" di panel Debug untuk memulai debugging.

## Debugger untuk Golang

1. **Instalasi Ekstensi Debugger untuk Golang:**
   - Install ekstensi Go Debug dari Visual Studio Marketplace.
   - Buka VSCode, masuk ke Extensions, dan cari "Go" untuk menginstal.

2. **Konfigurasi `launch.json`:**
   - Buka panel Debug (`Ctrl+Shift+D`), klik tombol gear untuk buat `launch.json`.
   - Konfigurasi contoh untuk Golang:
     ```json
     {
       "version": "0.2.0",
       "configurations": [
         {
           "name": "Launch Package",
           "type": "go",
           "request": "launch",
           "mode": "debug",
           "program": "${fileDirname}",
           "env": {},
           "args": []
         }
       ]
     }
     ```
   - Pastikan `"program"` sesuai dengan direktori atau file yang ingin Anda debug.

3. **Debugging:**
   - Letakkan breakpoint di dalam kode Golang Anda.
   - Pilih konfigurasi "Launch Package" dan tekan tombol "Play" di panel Debug untuk memulai debugging.

---

### Kesimpulan

Dengan mengikuti langkah-langkah di atas, Anda dapat menyiapkan debugger untuk PHP, JavaScript/TypeScript, dan Golang menggunakan Visual Studio Code (VSCode) dengan mudah. Debugger akan membantu Anda secara efektif dalam mengidentifikasi dan memperbaiki bug serta memahami alur program dalam pengembangan aplikasi Anda. Pastikan untuk mengonfigurasi dan menggunakan breakpoint dengan baik untuk memanfaatkan fitur debugging secara maksimal.