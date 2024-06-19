# Panduan Pengaturan Kode Formatter dan Linter

## JavaScript dan TypeScript

### Prettier (Formatter)

[Prettier](https://prettier.io/) adalah alat yang sangat populer untuk memformat kode JavaScript, TypeScript, dan CSS dengan konsistensi.

#### Instalasi

```bash
npm install --save-dev prettier
# atau jika menggunakan yarn
yarn add --dev prettier
```

#### Konfigurasi

Buat file `.prettierrc` atau tambahkan konfigurasi Prettier ke dalam `package.json`:

```json
{
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5"
}
```

#### Menggunakan Prettier

Prettier dapat dijalankan melalui CLI untuk memformat semua file:

```bash
npx prettier --write .
# atau jika menggunakan yarn
yarn prettier --write .
```

### ESLint (Linter)

[ESLint](https://eslint.org/) adalah linter JavaScript yang dapat digunakan untuk linting TypeScript juga.

#### Instalasi

```bash
npm install --save-dev eslint eslint-plugin-prettier eslint-config-prettier
# atau jika menggunakan yarn
yarn add --dev eslint eslint-plugin-prettier eslint-config-prettier
```

#### Konfigurasi

Tambahkan konfigurasi ESLint dengan plugin Prettier ke `.eslintrc`:

```json
{
  "extends": [
    "eslint:recommended",
    "plugin:prettier/recommended"
  ]
}
```

#### Menggunakan ESLint

Jalankan ESLint untuk melakukan linting pada proyek Anda:

```bash
npx eslint .
# atau jika menggunakan yarn
yarn eslint .
```

## PHP

### PHP-CS-Fixer (Formatter)

[PHP-CS-Fixer](https://cs.symfony.com/) adalah alat untuk memformat kode PHP dengan aturan yang telah ditentukan.

#### Instalasi

```bash
composer require --dev friendsofphp/php-cs-fixer
```

#### Menggunakan PHP-CS-Fixer

Jalankan PHP-CS-Fixer untuk memperbaiki format kode:

```bash
vendor/bin/php-cs-fixer fix
```

### PHPStan dan Larastan (Analyzer)

[PHPStan](https://phpstan.org/) adalah alat untuk analisis statis PHP yang membantu dalam menemukan bug pada tahap kompilasi.

[Larastan](https://github.com/nunomaduro/larastan) adalah ekstensi PHPStan khusus untuk aplikasi Laravel.

#### Instalasi

```bash
composer require --dev phpstan/phpstan
composer require --dev nunomaduro/larastan
```

#### Konfigurasi

Buat file `phpstan.neon` di root proyek atau tambahkan ke dalam konfigurasi PHPStan di `composer.json`:

```json
{
  "require-dev": {
    "phpstan/phpstan": "^0.14.27",
    "nunomaduro/larastan": "^0.6.2"
  },
  "scripts": {
    "analyze": "phpstan analyse --memory=1G"
  }
}
```

#### Menggunakan PHPStan dan Larastan

Jalankan PHPStan untuk melakukan analisis statis pada proyek PHP Anda:

```bash
composer analyze
```

## Go (Golang)

### GoFmt (Formatter)

[GoFmt](https://golang.org/cmd/gofmt/) adalah alat bawaan untuk memformat kode Go.

#### Menggunakan GoFmt

Jalankan GoFmt untuk memformat kode secara otomatis:

```bash
gofmt -w .
```

### GoLint (Linter)

[GoLint](https://pkg.go.dev/golang.org/x/lint/golint) adalah linter untuk kode Go yang memberikan saran terkait kode berdasarkan standar Go.

#### Instalasi

```bash
go install golang.org/x/lint/golint@latest
```

#### Menggunakan GoLint

Jalankan GoLint untuk melakukan linting pada proyek Go Anda:

```bash
golint ./...
```