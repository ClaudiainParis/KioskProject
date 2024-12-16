This is a [Remix](https://remix.run/docs) application for task management. I used Prisma and MongoDb.

Please install the project, run it locally, and you should be able to input tasks and delete them. Coming soon: update tasks with a description and a subtask, a filter function.
Good luck!

## Development

Install:

```sh
pnpm i
```

Run the database (suggested with docker compose, do what you prefer):

```sh
docker-compose up -d
```

Setup your environment

```sh
cp .env.template .env
```

Run migrations:

```
pnpm prisma migrate dev
pnpm prisma generate
pnpm tsx prisma/seed.ts
```

Run the dev server:

```sh
pnpm dev
```
