import { Router } from 'express'
import { store, list } from '../../controllers/BooksController';
import storeValidator from './validators/books/store';
import validatorMiddleware from './validators/validator.middleware';

const booksRouter = Router();

booksRouter.get('/', list);

booksRouter.get('/:slug', () => {
})

booksRouter.put('/:id', () => {
})

booksRouter.delete('/:id', () => {
})

booksRouter.post('/',storeValidator, validatorMiddleware, store)

export default booksRouter