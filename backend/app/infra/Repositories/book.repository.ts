import Book, { BookInput, BookOutput } from "../../models/books.model";

export const create = async (payload: BookInput): Promise<BookOutput> => {
    const book = await Book.create(payload)

    return book
}