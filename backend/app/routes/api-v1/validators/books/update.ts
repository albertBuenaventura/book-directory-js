import { body } from 'express-validator';
import { FileType } from '../../../../models/books.model';

export default [
    body('name').optional(),
    body('type').optional().isIn(Object.values(FileType)),
    body('parent').optional().isNumeric()
]