import { Router } from 'express';
import validateJwtMw from '../../middleware/tokenValidator';
import {
  handlerGetAllFav,
  handlerCreateOneFav,
  handlerGetOneFav,
  handlerAddOneFavItem,
} from './favourites.controller';

const router = Router();

router.get('/', [validateJwtMw], handlerGetAllFav);

router.post('/', [validateJwtMw], handlerCreateOneFav);

router.get('/:id', [validateJwtMw], handlerGetOneFav);

router.post('/:id/add', [validateJwtMw], handlerAddOneFavItem);

export default router;
