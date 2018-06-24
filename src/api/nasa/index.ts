import * as express from 'express';

const router = express.Router();

router.get('/apod', (_, res) => {
  res.send({ apod: true });
});

export = router;
