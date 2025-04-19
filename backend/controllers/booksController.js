const db = require("../db");

// Adicionar livro
const addBook = async (req, res) => {
  console.log("📥 Dados recebidos no backend:", req.body);

  const {
    id,
    registrationDate,
    userId,
    title,
    author,
    year,
    genre,
    description,
    is_favorite,
    is_read,
    is_reading
  } = req.body;

  try {
    const result = await db.query(
  `INSERT INTO books 
    (id, user_id, title, author, year, genre, description, registration_date, is_favorite, is_read, is_reading)
   VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)
   RETURNING *`,
  [
    id,
    userId,
    title,
    author,
    year,
    genre,
    description,
    registrationDate,
    is_favorite,
    is_read,
    is_reading
  ]
);


    res.status(201).json(result.rows[0]);
  } catch (err) {
  console.error("❌ Erro ao adicionar livro:", err.message);
  console.error("🔎 Stack:", err.stack);
  res.status(500).json({ message: "Erro ao adicionar livro", error: err.message });
}

};

// Encontrar livro
const getBookById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query("SELECT * FROM books WHERE id = $1", [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Livro não encontrado" });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error("Erro ao buscar livro por ID:", err.message);
    res.status(500).json({ message: "Erro interno" });
  }
};

// Buscar livros por usuário
const getBooksByUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const result = await db.query("SELECT * FROM books WHERE user_id = $1", [userId]);
    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Erro ao buscar livros:", err.message);
    res.status(500).json({ message: "Erro interno" });
  }
};

// Atualizar livro
const updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, year, genre, description, is_favorite, is_read, is_reading } = req.body;
  try {
    const result = await db.query(
      `UPDATE books SET 
        title = $1, author = $2, year = $3, genre = $4, 
        description = $5, is_favorite = $6, is_read = $7, is_reading = $8
       WHERE id = $9 RETURNING *`,
      [title, author, year, genre, description, is_favorite, is_read, is_reading, id]
    );
    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error("Erro ao atualizar livro:", err.message);
    res.status(500).json({ message: "Erro interno" });
  }
};

// Deletar livro
const deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    await db.query("DELETE FROM books WHERE id = $1", [id]);
    res.status(204).send();
  } catch (err) {
    console.error("Erro ao deletar livro:", err.message);
    res.status(500).json({ message: "Erro interno" });
  }
};

// Exporta todas as funções
module.exports = {
  addBook,
  getBooksByUser,
  updateBook,
  deleteBook,
  getBookById
};
