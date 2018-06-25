import * as dotenv from 'dotenv';
import * as knex from 'knex';
import * as path from 'path';

interface KnexEnvConfig {
  [key: string]: knex.Config;
}

type KnexConnection = string | knex.ConnectionConfig | knex.MySqlConnectionConfig;

dotenv.config({ path: path.resolve(__dirname, '../../', '.env') });

const connectionConfig: KnexConnection = {
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  multipleStatements: true,
  password: process.env.DB_PASSWORD,
  port: +process.env.DB_PORT,
  user: process.env.DB_USER,
};
const connection: KnexConnection = process.env.DATABASE_URL || connectionConfig;

const config: KnexEnvConfig = {
  development: {
    client: 'postgresql',
    connection,
    migrations: {
      directory: `${__dirname}/../migrations`,
      tableName: 'knex_migrations',
    },
    pool: {
      max: 10,
      min: 2,
    },
  },
};

export = config;
