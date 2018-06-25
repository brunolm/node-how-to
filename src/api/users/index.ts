import * as express from 'express';
import * as asyncHandler from 'express-async-handler';

import userService from '../../services/user/user.service';

const router = express.Router();

router.post(
  '/',
  asyncHandler(async (req, res) => {
    console.log('req.body', req.body);

    res.send(await userService.insert(req.body));
  }),
);

router.delete(
  '/:id',
  asyncHandler(async (req, res) => {
    const numDeleted = await userService.delete(+req.params.id);
    res.send({ deleted: numDeleted });
  }),
);

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    res.send(await userService.get(+req.params.id));
  }),
);

router.get(
  '/',
  asyncHandler(async (_, res) => {
    res.send(await userService.list());
  }),
);

export = router;
