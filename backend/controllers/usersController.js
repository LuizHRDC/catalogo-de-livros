const db = require("../db");
const pool = require("../db");


const registerUser = async (req, res) => {
  const { email, password, name, color } = req.body;

  try {
    const existingUser = await db.query("SELECT * FROM users WHERE email = $1", [email]);
    if (existingUser.rows.length > 0) {
      return res.status(400).json({ message: "Usuário já existe" });
    }

    const result = await db.query(
      `INSERT INTO users (email, password, name, color)
       VALUES ($1, $2, $3, $4)
       RETURNING id, email, password, name, color, user_type`,
      [email, password, name, color]
    );

    const newUser = result.rows[0];
    res.status(201).json({
      id: newUser.id,
      email: newUser.email,
      password: newUser.password,
      name: newUser.name,
      color: newUser.color,
      user_type: newUser.user_type, 
    });
  } catch (err) {
    console.error("Erro ao registrar usuário:", err.message);
    res.status(500).json({ message: "Erro interno no servidor" });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await db.query("SELECT * FROM users WHERE email = $1", [email]);

    if (result.rows.length === 0) {
      return res.status(401).json({ message: "Usuário não encontrado" });
    }

    const user = result.rows[0];

    if (user.password !== password) {
      return res.status(401).json({ message: "Senha incorreta" });
    }

    res.json({
      id: user.id,
      email: user.email,
      name: user.name,
      password: user.password,
      color: user.color,
      user_type: user.user_type,
    });
  } catch (err) {
    console.error("Erro ao fazer login:", err.message);
    res.status(500).json({ message: "Erro interno no servidor" });
  }
};

const upgradeUser = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query(
      "UPDATE users SET user_type = 'PREMIUM' WHERE id = $1 RETURNING *",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    const updatedUser = result.rows[0];
    res.json({
      id: updatedUser.id,
      email: updatedUser.email,
      name: updatedUser.name,
      password: updatedUser.password,
      color: updatedUser.color,
      user_type: updatedUser.user_type,
    });
  } catch (err) {
    console.error("Erro ao atualizar usuário:", err.message);
    res.status(500).json({ message: "Erro interno no servidor" });
  }
};

const downgradeUser = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await db.query(
      "UPDATE users SET user_type = 'COMMON' WHERE id = $1 RETURNING *",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    const user = result.rows[0];

    res.json({
      id: user.id,
      email: user.email,
      name: user.name,
      password: user.password,
      color: user.color,
      user_type: user.user_type,
    });
  } catch (err) {
    console.error("Erro ao fazer downgrade:", err.message);
    res.status(500).json({ message: "Erro interno no servidor" });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, password, color } = req.body;

  try {
    const result = await pool.query(
      "UPDATE users SET name = $1, email = $2, password = $3, color = $4 WHERE id = $5 RETURNING *",
      [name, email, password, color, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    const updatedUser = result.rows[0];

    res.status(200).json({
  id: updatedUser.id,
  email: updatedUser.email,
  name: updatedUser.name,
  password: updatedUser.password,
  color: updatedUser.color,
  user_type: updatedUser.user_type, // <-- Corrigido aqui
});

  } catch (err) {
    console.error("Erro ao atualizar usuário:", err.message);
    res.status(500).json({ message: "Erro interno no servidor" });
  }
};

module.exports = {
  registerUser,
  loginUser,
  upgradeUser,
  updateUser,
  downgradeUser
};