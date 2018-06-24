import * as express from 'express';
import * as nasaApi from './nasa';

const router = express.Router();

router.use('/nasa', nasaApi);

export = router;
