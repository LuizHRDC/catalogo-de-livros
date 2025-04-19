import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
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

const AddBookForm = ({ onSuccess }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [year, setYear] = useState(0);
  const [genre, setGenre] = useState("");
  const [is_favorite, setIsFavorite] = useState(false);
  const [is_reading, setIsReading] = useState(false);
  const [is_read, setIsRead] = useState(false);
  const [generatedId, setGeneratedId] = useState(null);
  const [registrationDate, setRegistrationDate] = useState(null);

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const now = new Date();
    setGeneratedId(now.getTime());
    setRegistrationDate(now.toISOString());
  }, []);

  const currentYear = new Date().getFullYear();

  const handleAddBook = async () => {
    if (!title || !author) {
      alert("Título e Autor são obrigatórios!");
      return;
    }

    if (year > currentYear) {
      alert("O ano de publicação não pode ser no futuro.");
      return;
    }

    if (!user || !user.id) {
      alert("Usuário não autenticado.");
      return;
    }

    const newBook = {
      id: generatedId,
      userId: user.id,
      title,
      author,
      year,
      genre,
      description,
      registrationDate,
      is_favorite,
      is_read,
      is_reading,
    };

    try {
      console.log("📦 Enviando para o backend:", newBook);

      const response = await fetch("http://localhost:5000/api/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBook),
      });

      if (!response.ok) {
        throw new Error("Erro ao adicionar livro");
      }

      const savedBook = await response.json();
      console.log("Livro adicionado:", savedBook);

      setTitle("");
      setAuthor("");
      setDescription("");
      setYear(0);
      setGenre("");
      setIsFavorite(false);
      setIsReading(false);
      setIsRead(false);

      if (onSuccess) onSuccess();
    } catch (error) {
      console.error("Erro ao adicionar livro:", error);
      alert("Erro ao adicionar livro. Tente novamente.");
    }
  };

  const handleBackClick = () => {
    navigate("/home");
  };

  return (
    <div className="addbook-container">
      <FormContainer>
        <BackButton onClick={handleBackClick}>Voltar</BackButton>
        <h2>Adicionar Livro</h2>
        {generatedId && <Info>ID: {generatedId}</Info>}
        {registrationDate && (
          <Info>
            Data de Cadastro:{" "}
            {new Date(registrationDate).toLocaleDateString("pt-BR")}
          </Info>
        )}
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
          <SubmitButton type="button" onClick={handleAddBook}>
            Adicionar Livro
          </SubmitButton>
        </form>
      </FormContainer>
    </div>
  );
};

export default AddBookForm;
