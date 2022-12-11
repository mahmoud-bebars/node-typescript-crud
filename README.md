# node-typescript-crud

This project is a Templete for CRUD App Using Following Technologies :-

- Postgres Database
- NodeJs Server
- Express FrameWork
- Powered typesScript Langauge

### in the begining don't forget to install the node_modules use this command

`$ npm install`

## you will need to create a dotEnv file contain following values

```
POSTGRES_HOST=localhost
POSTGRES_DB=postgres
POSTGRES_TEST_DB=postgres
POSTGRES_USER=postgres
POSTGRES_PASSWORD=12345
ENV=dev
```

## Starting Local DATABASE with Docker compase will be the easist way to test the project

- First Download docker & install needed images

- Setting Up PostgresSQL with this commands :-

```
$ docker run \
      --name postgres \
      -e POSTGRES_PASSWORD=yourpassword \
      -p 5432:5432 \
      -d postgres
```

- then start the CLI with this command :-

```
$ docker exec -ti -u postgres postgres psql
```

- in your project directory init this command to migrate db

```
$ db-migrate up
```

this will migrate database to start however in the testing migration donw automatically...

## Starting the server with following Commands

```
$ nodemon src/server.ts
```

OR

```
$ tsc-watch --esModuleInterop src/server.ts --outDir ./dist --onSuccess \"node ./dist/server.js\"
```

## Building the project with following Command

`$ npx tsc`

## Testing the API & server will be with this Commands

- `$ ENV=test db-migrate --env test up && tsc && jasmine && db-migrate --env test down && npm run clean`

OR

`$ npx tsc && jasmine`
