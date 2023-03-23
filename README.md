# Backend for Qred

Rest API

## Development

### Set node version

```bash
nvm use
```

### Install packages

```bash
yarn
```

### Set environment variables

Create copy of `.env.dist`:

```bash
cp .env.dist .env
```

Update the `.env` file as needed.


### Docker up for postgres

```bash
 docker run --name postgresql -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=password -p 5432:5432 postgres
```
### Prisma to push schema on database

After your database up on docker we can run following command to push the schema on db

>The db push command pushes the state of your Prisma schema file to the database without using migrations. It creates the database if the database does not exist.

```bash
prisma db push
```

## Seed data
To seed the data in db please run following command

```bash
npx prisma db seed
````

### Start

Runs the server in watch-mode (restarts the server if anything changes in the source code).

```bash
yarn dev
```

### Open the browser for Swagger UI

After starting the server we can go to this endpoint to see and try our all endpoints

```bash
http://localhost:3010/api-docs
```

### Test

Runs the test with following command

```bash
yarn test
```