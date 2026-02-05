# How to Launch Prisma
[Prisma Launch](https://my.ironhack.com/cohorts/66f4699731b3ff002b70b8be/lms/courses/github:course:ironhack-edu:web-bootcamp:cohort-B2C-WDFT-20251117-RMT-EN/modules/module_11_week-10/units/unit_11_1_1_prisma-introduction)

```bash
npx ironlauncher@latest prisma-library-demo --json
```

```bash
cd prisma-library-demo
```

- Delete the directory models (including all its contents)
- Delete the file db/index.js
- In app.js, delete this line: require("./db");
- Uninstall Mongoose:

```bash
npm uninstall mongoose
```

## Setup Prisma

### Install

```bash
npm install --save-dev prisma
```

### Initialize new Prisma project with PostgreSQL datasource

```bash
npx prisma init --datasource-provider postgresql
```

This command will do two things:
- It creates a file prisma/schema.prisma, with configuration for the database and the Prisma Client.
- It creates a .env file in the root directory of the project with an environment variable DATABASE_URL (if the file already exists, Prisma will just add the environment variable at the end of it). This environment variable will be used to define the location of our database.

### Add databse credentials in .env

```bash
DATABASE_URL="postgresql://<username>:<password>@localhost:5432/library?schema=public"
```

### Prisma Migrate

```bash
npx prisma migrate dev --name init
```

### Prisma Studio

```bash
npx prisma studio
```

### Generate Prisma Client

```bash
npx prisma generate
```
