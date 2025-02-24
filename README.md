# mosoblgosexpertiza

Веб-сайт на Laravel для управления [mosoblgosexpertiza]."

## Установка

### 1. Установка зависимостей

1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/ваш_репозиторий.git

2. Установите зависимости PHP через Composer:
   ```bash
   composer install
3. Откройте файл .env и укажите параметры подключения к базе данных::
   ```
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=mosoblgosexpertiza
    DB_USERNAME=mosoblgosexpertiza
    DB_PASSWORD=mosoblgosexpertiza

4. Запустите миграции для создания структуры базы данных:
   ```bash
   php artisan migrate

5. Зайдите в админ парель http://localhost/admin:
   
   логин: admin@a.a
   пароль: admin

   поменяйте пароль админа   
