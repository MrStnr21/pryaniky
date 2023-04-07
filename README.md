# Pryaniky
### *Тестовое задание от [Пряники](https://pryaniky.com/ru-aboutpryaniky/)*

## Описание проекта
Небольшое SPA приложение по работе с документами.
Представляет собой таблицу из документов, которая предоставляет CRUD операции. Есть возможность авторизации, добавления, редактирования и удаления документов.

Данные для авторизации:
 - "username": user{N}
 - "password": password
 
user{N} – где вместо N нужно ввести число, например user1, user2... user33. Данные в таблице для каждого сохраняются индивидуально.
password – одинаков для всех логинов, в случае его отличия сервер вернёт ошибку.

## Функционал:
- Авторизация;
- Отрисовка полученных документов;
- Добавление нового документа;
- Редактирование существующих документов;
- Удаление документов;
- Обработка ошибок.

## Стек технологий:
- TypeScript;
- React + Redux;
- JS;
- API;
- CSS;
- HTML.

## Установка и запуск проекта:

Клонировать репозиторий:

    git clone https://github.com/MrStnr21/pryaniky.git

Установить зависимости:

    npm install

Собрать проект:

    npm run build

Запустить проект:

    npm run start

## Скриншоты:
<details><summary><b>Развернуть</b></summary>

![login-page](https://user-images.githubusercontent.com/104725482/230595845-ba5f9de7-ff39-4fcd-80a4-be8e78df1ef2.png)
![main](https://user-images.githubusercontent.com/104725482/230595857-e213c837-7c4d-4f19-aad7-fe0b8fdc3b96.png)
![add-document](https://user-images.githubusercontent.com/104725482/230595885-f3891c0f-44ae-4df6-abe6-9b0d71e62eaf.png)
![edit-document](https://user-images.githubusercontent.com/104725482/230595898-179538eb-05da-4a2f-b3a7-784fdc171c3e.png)
![delete-document](https://user-images.githubusercontent.com/104725482/230595913-19d461f0-5906-44d1-8c23-a1fa4aaf90be.png)
![logout](https://user-images.githubusercontent.com/104725482/230595919-a99b9f12-902c-408e-803d-868f4e1598ae.png)
![notfound](https://user-images.githubusercontent.com/104725482/230595928-ca61ac07-9382-4d80-862a-f2aa6d0cad91.png)

</details>

## Ссылка на сайт: https://mrstnr21.github.io/pryaniky/
