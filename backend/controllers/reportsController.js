const db = require("../db");

const generateReport = async (req, res) => {
  const { userId } = req.params;

  try {
    const books = await db.query("SELECT * FROM books WHERE user_id = $1", [userId]);
    const data = books.rows;

    const report = {
      total_books: data.length,
      total_read: data.filter(b => b.is_read).length,
      total_reading: data.filter(b => b.is_reading).length,
      total_unmarked: data.filter(b => !b.is_read && !b.is_reading).length,
      total_favorites: data.filter(b => b.is_favorite).length,
    };

    const result = await db.query(
      `INSERT INTO reports (user_id, total_books, total_read, total_reading, total_unmarked, total_favorites)
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [userId, report.total_books, report.total_read, report.total_reading, report.total_unmarked, report.total_favorites]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("Erro ao gerar relatório:", err.message);
    res.status(500).json({ message: "Erro ao gerar relatório" });
  }
};

const getUserReports = async (req, res) => {
  const { userId } = req.params;

  try {
    const result = await db.query("SELECT * FROM reports WHERE user_id = $1 ORDER BY created_at DESC", [userId]);
    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Erro ao buscar relatórios:", err.message);
    res.status(500).json({ message: "Erro ao buscar relatórios" });
  }
};

module.exports = {
  generateReport,
  getUserReports,
};
