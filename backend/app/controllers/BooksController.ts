import { Request, Response } from 'express'
import { create as createBook, deleteById, list as listBooks, listChildren as listChildrenPaths} from '../infra/Repositories/book.repository';

export const list = async (req: Request, res: Response) => {
    const books = await listBooks();
    res.json(books);
}

export const store = async (req: Request, res: Response) => {
    const book = await createBook(req.body);
    res.json(book);
}

export const listChildren = async (req: Request, res: Response) => {
    const books = await listChildrenPaths(req.params.id as unknown as number);
    res.json(books);
}

export const deleteBook = async (req: Request, res: Response) => {
    const isSuccess = await deleteById(req.params.id as unknown as number);
    res.json({ success: isSuccess});
}