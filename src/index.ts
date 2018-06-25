import * as bodyParser from 'body-parser';
import * as cluster from 'cluster';
import * as express from 'express';
import * as morgan from 'morgan';
import * as os from 'os';

import * as api from './api';

const cores = os.cpus().length;

if (cluster.isMaster) {
  for (let i = 0; i < cores; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    // tslint:disable-next-line:no-console
    console.info(`exit #${worker.process.pid} - code: ${code} signal: ${signal}`);
  });
} else {
  const app = express();

  app.use('/_ping', (_, res) => {
    res.send({ ok: true });
  });

  if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('tiny'));
  }

  app.use(bodyParser.json());

  app.use('/api', api);

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.info(`server started at port ${port}`);
  });

  // tslint:disable-next-line:no-console
  console.info(`Worker ${process.pid} started`);
}
