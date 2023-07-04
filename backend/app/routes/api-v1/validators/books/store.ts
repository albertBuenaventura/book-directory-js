import { body } from 'express-validator';
import { FileType } from '../../../../models/books.model';

export default [
    body('name').notEmpty(),
    body('type').isIn(Object.values(FileType)),
    body('parent').optional().isNumeric()
]