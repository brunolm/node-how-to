import * as express from 'express';
import * as asyncHandler from 'express-async-handler';

import nasaService from '../../services/nasa/nasa.service';

const router = express.Router();

router.get(
  '/apod',
  asyncHandler(async (_, res) => {
    const apod = await nasaService.getApod();

    res.send({ apod });
  }),
);

export = router;
