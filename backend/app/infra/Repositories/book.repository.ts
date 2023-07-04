import Book, { BookInput, BookOutput } from "../../models/books.model";

export const create = async (payload: BookInput): Promise<BookOutput> => {
    const book = await Book.create(payload)

    return book
}

export const list = async (): Promise<BookOutput[]> => {
    return Book.findAll({
        where: {
            parent: null
        },
        paranoid: true
    });
}

export const listChildren = async (parent: number): Promise<BookOutput[]> => {
    return Book.findAll(
        {
            where: {
                parent
            },
            paranoid: true
        });
};