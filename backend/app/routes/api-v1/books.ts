import { Router } from 'express'
import { store, list, listChildren, deleteBook, update } from '../../controllers/BooksController';
import storeValidator from './validators/books/store';
import updateValidator from './validators/books/update';
import validatorMiddleware from './validators/validator.middleware';

const booksRouter = Router();

booksRouter.get('/', list);

booksRouter.get('/children/:id', listChildren)

booksRouter.put('/:id', updateValidator, validatorMiddleware, update)

booksRouter.delete('/:id', deleteBook)

booksRouter.post('/',storeValidator, validatorMiddleware, store)

export default booksRouter