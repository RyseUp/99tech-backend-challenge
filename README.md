# 99tech-backend-challenge

This repository contains my solutions for the 99tech backend engineer assignment.

---

## Problem 4: Sum to N

### Description

Calculates the sum of numbers from 1 to n using three approaches:

1. **Iterative Loop**  
   Uses a for loop to add numbers (`O(n)` time, `O(1)` space).
2. **Mathematical Formula**  
   Uses the formula `n * (n + 1) / 2` for constant-time calculation (`O(1)` time, `O(1)` space).
3. **Recursive Function**  
   Recursively adds numbers (`O(n)` time, `O(n)` space due to call stack).

### How to Run

1. Make sure you have Node.js and TypeScript installed.
2. Save the code in `src/problem4_sum_to_n.ts`.
3. Compile with:
   ```bash
   tsc src/problem4_sum_to_n.ts
   ```
4. Run with:
   ```bash
   node src/problem4_sum_to_n.js
   ```
   This will execute a test function that calculates the sum for `n = 1000` using all three methods.

---

## Problem 5: CRUD Server

### Description

A simple RESTful API server for managing books, built with Express.js and TypeScript.  
Supports full CRUD operations:

- **Create:** `POST /api/books`
- **Read:** `GET /api/books`, `GET /api/books/:id`
- **Update:** `PUT /api/books/:id`
- **Delete:** `DELETE /api/books/:id`

Books are stored in an in-memory array with fields: `id`, `title`, `author`, `year`.

### How to Run

1. Make sure you have Node.js installed.
2. Create the following directory structure:
   ```
   src/
     problem5_crud_server/
       model.ts
       db.ts
       routes.ts
       server.ts
   ```
3. Install dependencies:
   ```bash
   npm init -y
   npm install express @types/express typescript ts-node
   ```
4. Compile TypeScript (optional if using ts-node):
   ```bash
   tsc src/problem5_crud_server/*.ts
   ```
5. Run the server:
   ```bash
   npx ts-node src/problem5_crud_server/server.ts
   ```
6. The API is accessible at `http://localhost:3000/api/books`.

### Testing

Use Postman or curl to test endpoints:

- **Create book:**
  ```bash
  curl -X POST http://localhost:3000/api/books \
    -H "Content-Type: application/json" \
    -d '{"title": "Book Title", "author": "Author Name", "year": 2023}'
  ```
- **List books:**
  ```bash
  curl http://localhost:3000/api/books
  ```
- **Get one book:**
  ```bash
  curl http://localhost:3000/api/books/1
  ```
- **Update book:**
  ```bash
  curl -X PUT http://localhost:3000/api/books/1 \
    -H "Content-Type: application/json" \
    -d '{"title": "Updated Title"}'
  ```
- **Delete book:**
  ```bash
  curl -X DELETE http://localhost:3000/api/books/1
  ```

---

## Problem 6: Scoreboard Module Architecture

### Description

A system design for a real-time scoreboard service, supporting:

- **Leaderboard API:** Fetch top 10 users with highest scores.
- **Score update API:** Update user score after validated actions, with anti-cheat logic.
- **WebSocket/SSE:** Real-time leaderboard updates to clients.
- **Redis ZSET:** For efficient leaderboard operations.
- **Full documentation:** Includes API design, execution flow (sequence diagram), security, and improvement suggestions.

See [`src/problem6_architecture/README.md`](./src/problem6_architecture/README.md) for the detailed architecture document, diagrams, and technical discussion.

---
