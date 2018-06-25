import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as morgan from 'morgan';

import * as api from './api';

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
