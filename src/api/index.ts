import * as express from 'express';

import * as nasaApi from './nasa';
import * as usersApi from './users';

const router = express.Router();

router.use('/nasa', nasaApi);
router.use('/users', usersApi);

export = router;
