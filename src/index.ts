import * as express from 'express';

import * as api from './api';

const app = express();

app.use('/_ping', (_, res) => {
  res.send({ ok: true });
});

app.use('/api', api);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.info(`server started at port ${port}`);
});
