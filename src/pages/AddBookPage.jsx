import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import AddBookForm from "../components/AddBook/AddBookForm";

const AddBookPage = () => {
  const { addBook } = useContext(BookContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.height = "100%";
    document.body.style.overflow = "hidden";

    document.documentElement.style.height = "100%";

    return () => {
      document.body.style.margin = "";
      document.body.style.padding = "";
      document.body.style.height = "";
      document.body.style.overflow = "";

      document.documentElement.style.height = "";
    };
  }, []);

  const handleSuccess = () => {
    navigate("/home");
  };

  const handleAddBook = (book) => {
    addBook({ ...book, userId: user?.id });
  };

  return (
    <div>
      <AddBookForm addBook={handleAddBook} onSuccess={handleSuccess} />
    </div>
  );
};

export default AddBookPage;
