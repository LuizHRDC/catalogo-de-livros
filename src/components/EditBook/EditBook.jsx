import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import {
  FormContainer,
  Info,
  Label,
  Input,
  TextArea,
  SubmitButton,
  BackButton,
} from "./styles";

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [book, setBook] = useState(null);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [year, setYear] = useState(0);
  const [genre, setGenre] = useState("");
  const [is_favorite, setIsFavorite] = useState(false);
  const [is_reading, setIsReading] = useState(false);
  const [is_read, setIsRead] = useState(false);
  const [registrationDate, setRegistrationDate] = useState("");

  const fetchBook = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/books/book/${id}`
      );
      const data = await response.json();

      setBook(data);
      setTitle(data.title);
      setAuthor(data.author);
      setDescription(data.description);
      setYear(data.year);
      setGenre(data.genre);
      setIsFavorite(data.is_favorite || false);
      setIsReading(data.is_reading || false);
      setIsRead(data.is_read || false);
      setRegistrationDate(
        new Date(data.registration_date).toLocaleDateString("pt-BR")
      );
    } catch (error) {
      console.error("Erro ao buscar o livro:", error);
    }
  };

  useEffect(() => {
    if (user?.id) {
      fetchBook();
    }
  }, [user, id]);

  const handleSave = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/books/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          author,
          description,
          year,
          genre,
          is_favorite,
          is_read,
          is_reading,
        }),
      });

      if (!response.ok) throw new Error("Erro ao atualizar o livro.");

      navigate("/home");
    } catch (error) {
      console.error("Erro ao salvar alterações:", error);
    }
  };

  const handleBackClick = () => {
    navigate("/home");
  };

  if (!book) return <p style={{ backgroundColor: "#000" }}>Carregando...</p>;

  return (
    <div className="addbook-container">
      <FormContainer>
        <BackButton onClick={handleBackClick}>Voltar</BackButton>
        <h2>Editar Livro</h2>
        <Info>ID: {book.id}</Info>
        <Info>Data de Cadastro: {registrationDate}</Info>
        <form>
          <Label>Título:</Label>
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Label>Autor:</Label>
          <Input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <Label>Ano de Publicação:</Label>
          <Input
            type="number"
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
          />
          <Label>Gênero:</Label>
          <Input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
          <Label>Descrição:</Label>
          <TextArea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></TextArea>

          <Label>
            <Input
              type="checkbox"
              checked={is_favorite}
              onChange={(e) => setIsFavorite(e.target.checked)}
            />
            Favorito
          </Label>

          <Label>
            <Input
              type="checkbox"
              checked={is_reading}
              onChange={(e) => {
                if (e.target.checked) setIsRead(false);
                setIsReading(e.target.checked);
              }}
            />
            Lendo
          </Label>

          <Label>
            <Input
              type="checkbox"
              checked={is_read}
              onChange={(e) => {
                if (e.target.checked) setIsReading(false);
                setIsRead(e.target.checked);
              }}
            />
            Lido
          </Label>

          <SubmitButton type="button" onClick={handleSave}>
            Salvar
          </SubmitButton>
        </form>
      </FormContainer>
    </div>
  );
};

export default EditBook;
