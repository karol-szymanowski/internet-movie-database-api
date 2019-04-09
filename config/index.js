'use strict';

require('dotenv').config({ path: `.env.${process.env.NODE_ENV || 'development'}` });

const REQUIRED_KEYS = [
  'DB_USERNAME',
  'DB_DATABASE',
  'DB_HOST',
  'OMDB_API_KEY',
];

REQUIRED_KEYS.forEach((key) => {
  if (!(key in process.env)) {
    throw new Error(`Missing required config key: ${key}`);
  }
});

const {
  DB_USERNAME,
  DB_PASSWORD,
  DB_DATABASE,
  DB_HOST,
  DB_PORT,
  DB_MAX_CONNECTIONS,
  DB_MAX_IDLE_TIME,
  OMDB_API_KEY,
} = process.env;

module.exports = {
  use_env_variable: false,
  omdbApiKey: OMDB_API_KEY,

  [process.env.NODE_ENV || 'development']: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    host: DB_HOST,
    port: DB_PORT || 5432,
    dialect: 'postgres',
    logging: false,
    pool: {
      maxConnections: DB_MAX_CONNECTIONS || null,
      maxIdleTime: DB_MAX_IDLE_TIME || null,
    },
  },
};
