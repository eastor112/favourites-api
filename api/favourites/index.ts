import { Router } from 'express';
import {
  handlerGetAllFav,
  handlerCreateOneFav,
  handlerGetOneFav,
  handlerDeleteOneFav,
} from './favourites.controller';

const router = Router();

router.get('/', [], handlerGetAllFav);

router.post('/', [], handlerCreateOneFav);

router.get('/:id', [], handlerGetOneFav);

router.delete('/:id', [], handlerDeleteOneFav);

export default router;
