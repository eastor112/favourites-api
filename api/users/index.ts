import { Router } from 'express';
import {
  handlerGetAllUsers,
  handlerGetOneUser,
  handlerCreateUser,
} from './users.controller';

const router = Router();

router.get('/', [], handlerGetAllUsers);
router.get('/:id', [], handlerGetOneUser);
router.post('/', [], handlerCreateUser);

export default router;
