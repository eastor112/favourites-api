import { Router } from 'express';
import validateJwtMw from '../../middleware/tokenValidator';
import {
  handlerGetAllUsers,
  handlerGetOneUser,
  handlerCreateUser,
} from './users.controller';

const router = Router();

router.get('/', [], handlerGetAllUsers);
router.get('/:id', [validateJwtMw], handlerGetOneUser);
router.post('/', [], handlerCreateUser);

export default router;
