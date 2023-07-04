import Book, { BookInput, BookOutput } from "../../models/books.model";

type Error = {
    error: string;
}

export const create = async (payload: BookInput): Promise<BookOutput> => {
    const book = await Book.create(payload)

    return book
}

export const update = async (id: number, payload: Partial<BookInput>): Promise<BookOutput|Error> => {
    const book = await Book.findByPk(id)

    if (!book) {
        return { error: "NotFound"}
    }

    const updatedIngredient = await book.update(payload)
    return updatedIngredient
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

export const deleteById = async (id: number): Promise<boolean> => {
    const deletedIngredientCount = await Book.destroy({
        where: {id}
    })

    return !!deletedIngredientCount
}
