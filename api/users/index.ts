import { Router } from 'express';
import {
  handlerGetAllUsers,
  handlerGetOneUser,
  handlerCreateUser,
  handlerCompleteUpdateUser,
  handlerPartialUpdateUser,
  handlerDeleteUser,
} from './users.controller';

const router = Router();

router.get('/', handlerGetAllUsers);
router.get('/:id', handlerGetOneUser);
router.post('/', handlerCreateUser);
router.put('/:id', handlerCompleteUpdateUser);
router.patch('/:id', handlerPartialUpdateUser);
router.delete('/:id', handlerDeleteUser);

export default router;
