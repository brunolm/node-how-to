import * as knex from 'knex';
import config from '../config';

const db = knex(config.db);

if (config.db.migrations) {
  db.migrate.latest();
}

if (config.db.seeds) {
  db.seed.run();
}

export default db;
