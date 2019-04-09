# internet-movie-database-api
[![Build Status](https://travis-ci.com/tetrash/internet-movie-database-api.svg?branch=master)](https://travis-ci.com/tetrash/internet-movie-database-api)

Live app: https://internet-movie-database-api.herokuapp.com/movies

## Api endpoints

- `POST /movies`
- `GET /movies`
- `POST /comments`
- `GET /comments`

More details [here](docs/).

## Requirements

- Postgres (ver. 9.4 or newer)
- node.js
- Omdb api key

## Instalation

#### 1. Install dependencies and copy .env files:

```
yarn install
cp .env.development.example .env.development
cp .env.test.example .env.test
```

#### 2. Edit .env files to match your enviroment settings:

By default app will use variables from file `.env.development` if it exists. App is picking .env files based on `NODE_ENV` enviroment variable, ex. `.env.[NODE_ENV]`.

Example `.env.development` file:

```
DB_USERNAME=docker
DB_PASSWORD=password
DB_DATABASE=internet_movie_database_api_test
DB_HOST=127.0.0.1
DB_PORT=5432

DB_MAX_CONNECTIONS=20 // optional
DB_MAX_IDLE_TIME=10000 // optional

OMDB_API_KEY=[your api key]

PORT=5000 // optional, default 5000
```

#### [3. Get OMDB api key:](http://www.omdbapi.com/apikey.aspx)

Save api key in `.env.development` and `.env.test` files

#### 4. Run app:

```
yarn start
```

## Running app in docker

### Requirements:
- [Docker](https://docs.docker.com/install/)
- [Docker-compose](https://docs.docker.com/compose/install/)

### Instalation:

Edit file `docker-compose.yml` and paste your omdb api key

```
sudo docker-compose up
```

## Testing

```
# Test code styles and app:
yarn test 

# Test only app:
yarn run mocha
```

#### Code style:
Eslint uses [Airbnb style guide](https://github.com/airbnb/javascript):
```
# Test code style:
yarn run lint
```

## Database migration and seeding

App is using `sequelize cli` to menage database seeding and migrations:
- `sequelize db:migrate` - migrate tables
- `sequelize db:seed:all` - seed tables
- `sequelize db:migrate:undo:all` - drop migrated tables
