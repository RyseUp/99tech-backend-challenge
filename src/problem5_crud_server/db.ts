import { Book } from "./model";

let books: Book[] = [];
let nextId = 1;

export function createBook(data: Omit<Book, 'id'>): Book {
    const book = { id: nextId++, ...data };
    books.push(book);
    return book;
}

export function listBooks(): Book[] {
    return books;
}

export function getBook(id: number): Book | undefined {
    return books.find(book => book.id === id);
}

export function updateBook(id: number, data: Partial<Omit<Book, 'id'>>): Book | undefined {
    const book = books.find(b => b.id === id);
    if (!book) return;
    Object.assign(book, data);
    return book;
}

export function deleteBook(id: number): boolean {
    const index = books.findIndex(b => b.id === id);
    if (index === -1) return false;
    books.splice(index, 1);
    return true;
}