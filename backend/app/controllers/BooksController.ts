import { Request, Response } from 'express'
import { create as createBook } from '../infra/Repositories/book.repository';

export const list = (req: Request, res: Response) => {

}

export const store = async (req: Request, res: Response) => {
    const book = await createBook(req.body);
    res.json(book);
}