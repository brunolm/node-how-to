import * as dbConfig from './knexfile';

const nodeEnv = process.env.NODE_ENV || 'development';

export default {
  api: {
    nasa: 'https://api.nasa.gov',
  },

  db: dbConfig[nodeEnv],
};
