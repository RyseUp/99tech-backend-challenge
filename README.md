# Problem 4 & Problem 5 Solutions

## Problem 4: Sum to N

### Description

Calculates the sum of numbers from 1 to n using three approaches:

1. **Iterative Loop**: Uses a for loop to add numbers (O(n) time, O(1) space).
2. **Mathematical Formula**: Uses `n * (n + 1) / 2` for constant-time calculation (O(1) time, O(1) space).
3. **Recursive Function**: Recursively adds numbers (O(n) time, O(n) space due to call stack).

### How to Run

1. Ensure Node.js and TypeScript are installed.
2. Save the code in `problem4_sum_to_n.ts`.
3. Run `tsc problem4_sum_to_n.ts` to compile to JavaScript.
4. Execute `node problem4_sum_to_n.js` to run the test function, which computes the sum for n=1000 using all three methods.

## Problem 5: CRUD Server

### Description

A simple RESTful API server for managing books using Express.js. Supports CRUD operations:

- **Create**: POST /api/books
- **Read**: GET /api/books, GET /api/books/:id
- **Update**: PUT /api/books/:id
- **Delete**: DELETE /api/books/:id

The server uses an in-memory array to store books with fields: id, title, author, and year.

### How to Run

1. Ensure Node.js is installed.
2. Create a project directory with the structure provided (`src/problem5_crud_server/`).
3. Install dependencies: `npm init -y && npm install express`.
4. Compile TypeScript: `tsc src/problem5_crud_server/*.ts`.
5. Run the server: `node src/problem5_crud_server/server.js`.
6. Access the API at `http://localhost:3000/api/books` using tools like Postman or curl.

### Testing

- Use Postman or curl to test endpoints:
  - POST `http://localhost:3000/api/books` with JSON body `{ "title": "Book Title", "author": "Author Name", "year": 2023 }`.
  - GET `http://localhost:3000/api/books` to list all books.
  - GET `http://localhost:3000/api/books/:id` to retrieve a specific book.
  - PUT `http://localhost:3000/api/books/:id` with JSON body to update a book.
  - DELETE `http://localhost:3000/api/books/:id` to delete a book.
