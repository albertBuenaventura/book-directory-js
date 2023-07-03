import Book from '../models/books.model';

const initTables = async() => {
  await Book.sync({ alter: false });
}

export default initTables 