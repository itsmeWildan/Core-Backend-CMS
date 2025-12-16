# Core Backend CMS API Documentation

## Introduction

This is a Core Backend for a Content Management System (CMS) platform built using **NestJS**, **TypeORM**, **MySQL**, **Passport JWT**, and **Bcrypt**. This documentation is based on the official test routes configured in HTTPie.

## Getting Started

To get started with this API, follow these steps:

1. **Clone the repository:**
   ```
   git clone git@github.com:itsmeWildan/Core-Backend-CMS.git
   Install dependencies:
   ```

npm install
Set up your environment variables: Create a .env file in the root directory and add the following variables:

DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_NAME=blognest
JWT_SECRET=jwtsecretbuatansaya
Run the server:

npm run start:dev
API Routes
🔐 Authentication & Users
Endpoints for managing users and sessions.

Register User

POST /auth/register

Body (Form):

name: String

email: String

password: String

Login User

POST /auth/login

Body (Form):

email: String

password: String

Response: Returns JWT Access Token.

Get All Users

GET /users

Requires Bearer Token.

Check Auth Profile

GET /auth/getUser

Retrieve current authenticated user data.

📄 Article Module
Endpoints for managing articles/posts.

Tampil Semua Article

GET /article

Detail Article

GET /article/:id

Tambah Article

POST /article

Body (Form):

title: String

content: String

status: String (e.g., "SUCCESS")

Update Article

PUT /article/:id

Body (Form):

title: String

status: String

Delete Article

DELETE /article/:id

📂 Category Module
Endpoints for managing content categories.

Tampil Semua Category

GET /category

Tambah Category

POST /category

Body (Form):

name: String (e.g., "ReactJS")

Detail Category

GET /category/:id

Update Category

PUT /category/:id

Body (Form):

name: String

Delete Category

DELETE /category/:id

Testing with HTTPie
You can import the httpie-space-nest-dev.json file into your HTTPie Desktop to test these endpoints directly. Make sure to set the {{URL}} environment variable to http://localhost:3000.

Maintained by itsmeWildan

---

### Cara Update ke GitHub:

Setelah file `README.md` diperbarui dengan konten di atas, jalankan perintah berikut di terminal:

```
git add README.md
git commit -m "docs: sync API documentation with HTTPie test routes"
git push origin main
```
