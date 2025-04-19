import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import AuthContext from "../context/AuthContext";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const API = "http://localhost:5000/api/books";

  const fetchBooks = async () => {
    if (!user?.id) return;
    setLoading(true);
    try {
      const res = await axios.get(`${API}/${user.id}`);
      setBooks(res.data);
    } catch (err) {
      console.error("❌ Erro ao buscar livros:", err);
    } finally {
      setLoading(false);
    }
  };

  const addBook = async (newBook) => {
    try {
      const res = await axios.post(API, {
        ...newBook,
        userId: user.id,
      });
      setBooks((prev) => [...prev, res.data]);
    } catch (err) {
      console.error("❌ Erro ao adicionar livro:", err);
    }
  };

  const editBook = async (id, updatedBook) => {
    try {
      const res = await axios.put(`${API}/${id}`, updatedBook);
      setBooks((prev) =>
        prev.map((book) => (book.id === id ? res.data : book))
      );
    } catch (err) {
      console.error("❌ Erro ao editar livro:", err);
    }
  };

  const deleteBook = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      setBooks((prev) => prev.filter((book) => book.id !== id));
    } catch (err) {
      console.error("❌ Erro ao excluir livro:", err);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, [user]);

  return (
    <BookContext.Provider
      value={{ books, loading, fetchBooks, addBook, editBook, deleteBook }}
    >
      {children}
    </BookContext.Provider>
  );
};
