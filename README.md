# API Solution

In this project, we are creating a backend for a frontend view provided in the case study document. This project is a proposed
solution to improve the collaboration between teams and increase the speed.

## Technology Stack
- Nodejs
- Express
- Typescript
- PostgreSQL
- Prisma as an ORM
- Jest and Supertest for testing

## Data Model
With this small project, we have 3 data models (Company, Card, and Transaction).
#### Relationships defined as
- A company has only one card
- A card belongs to a company
- A card has multiple transactions

## To get started

- Clone the repository

### Install packages

```bash
yarn
```

### Set environment variables

Create copy of `.env.dist`:

```bash
cp .env.dist .env
```

### Start Postgres
Using docker to run a single instance postgres

```bash
 docker run --name postgresql -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=password -p 5432:5432 postgres
```
### Update database schema

After Postgresql has started, run following to update database schema. 
The db push command pushes the state of Prisma schema file to the database without using migrations.
It creates the database if the database does not exist.

```bash
prisma db push
```

### Seed data
To seed the data in db run following

```bash
npx prisma db seed
````

### Start

Runs the server in watch-mode (restarts the server if anything changes in the source code).

```bash
yarn dev
```

###  Swagger UI

Swagger UI is available on
http://localhost:3010/api-docs


### Test

Runs the test with following command

```bash
yarn test
```