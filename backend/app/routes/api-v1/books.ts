import { Router } from 'express'
import { store, list, listChildren } from '../../controllers/BooksController';
import storeValidator from './validators/books/store';
import validatorMiddleware from './validators/validator.middleware';

const booksRouter = Router();

booksRouter.get('/', list);

booksRouter.get('/children/:id', listChildren)

booksRouter.put('/:id', () => {
})

booksRouter.delete('/:id', () => {
})

booksRouter.post('/',storeValidator, validatorMiddleware, store)

export default booksRouter