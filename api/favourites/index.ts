import { Router } from 'express';
import {
  handlerGetAllFav,
  handlerCreateOneFav,
  handlerGetOneFav,
} from './favourites.controller';

const router = Router();

router.get('/', [], handlerGetAllFav);

router.post('/', [], handlerCreateOneFav);

router.get('/:id', [], handlerGetOneFav);

export default router;
