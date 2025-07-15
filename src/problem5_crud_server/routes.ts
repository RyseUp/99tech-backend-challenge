import express from "express";
import {
  createBook,
  listBooks,
  getBook,
  updateBook,
  deleteBook,
} from "./db";

const router = express.Router();

router.get("/books", (req, res) => {
  const author = req.query.author as string | undefined;
  const books = listBooks(author);
  return res.json(books);
});

router.get("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const book = getBook(id);
  if (!book) return res.status(404).json({ error: "Not found" });
  return res.json(book);
});

router.post("/books", (req, res) => {
  const { title, author, year } = req.body;
  if (
    typeof title !== "string" ||
    typeof author !== "string" ||
    typeof year !== "number"
  ) {
    return res.status(400).json({ error: "Invalid or missing fields" });
  }
  const newBook = createBook({ title, author, year });
  return res.status(201).json(newBook);
});

router.put("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updated = updateBook(id, req.body);
  if (!updated) return res.status(404).json({ error: "Not found" });
  return res.json(updated);
});

router.delete("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const success = deleteBook(id);
  return res.status(success ? 204 : 404).send();
});

export default router;