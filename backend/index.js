const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Rotas
const userRoutes = require("./routes/users");
app.use("/api/users", userRoutes);
const bookRoutes = require("./routes/books");
app.use("/api/books", bookRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});