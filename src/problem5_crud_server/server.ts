import express from "express";
import bookRoutes from "./routes";
import morgan from "morgan";

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use("/api", bookRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/api/books`);
});