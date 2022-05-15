import { Router } from 'express';
import handlerLogin from './auth.local.controller';

const router = Router();

router.post('/login', [], handlerLogin);

export default router;
