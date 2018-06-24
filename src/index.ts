import * as express from 'express';

const app = express();

app.use('/_ping', (_, res) => {
  res.send({ ok: true });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.info(`server started at port ${port}`);
});
