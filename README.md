# cosmic-ape-game-api

Cosmic Ape crusader backend api  built using node js

### Get Started

Install dependencies

```bash
npm install
```

### Setup Database
#### Sequelize (MySQL)
Configuration File for Migration and Seeder
```json
{
  "development": {
    "username": "root",
    "password": null,
    "database": "cosmic_apes",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "cosmic_apes",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "cosmic_apes",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

#### Migration
```bash
npm run migrate
```

#### Seeder
```bash
npm run seed
```

## Run on Local Server
```bash
nodemon server.js
```


## Using Docker setup

In order to use docker setup you need to firt have docker desktop installed and docker-compose
https://docs.docker.com/desktop/mac/install/

once installed you should be start the database first

```docker-compose  up db```
when the db comes you can run migrate and seed as mentioned above.
Once the you have run the migration and seed you can start the container using
```docker-compose up --build app```

