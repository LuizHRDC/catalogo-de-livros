import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import {
  Container,
  Title,
  InfoContainer,
  Info,
  InfoLabel,
  InfoValue,
  Description,
  Button,
} from "./styles";

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchBook = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/books/book/${id}`
      );
      const data = await response.json();
      setBook(data);
    } catch (error) {
      console.error("Erro ao buscar o livro:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user?.id) {
      fetchBook();
    }
  }, [user, id]);

  if (loading) return <p style={{ backgroundColor: "#000" }}>Carregando...</p>;

  if (!book) {
    return <h2 style={{ color: "#000" }}>Livro não encontrado</h2>;
  }

  return (
    <Container>
      <Title>{book.title}</Title>
      <InfoContainer>
        <Info>
          <InfoLabel>ID: </InfoLabel>
          <InfoValue>{book.id}</InfoValue>
        </Info>
        <Info>
          <InfoLabel>Autor: </InfoLabel>
          <InfoValue>{book.author}</InfoValue>
        </Info>
        <Info>
          <InfoLabel>Ano de publicação: </InfoLabel>
          <InfoValue>{book.year}</InfoValue>
        </Info>
        <Info>
          <InfoLabel>Data de Cadastro: </InfoLabel>
          <InfoValue>
            {new Date(book.registration_date).toLocaleDateString()}
          </InfoValue>
        </Info>
        <Info>
          <InfoLabel>Gênero: </InfoLabel>
          <InfoValue>{book.genre}</InfoValue>
        </Info>
        <Description>
          <strong>Descrição: </strong> {book.description}
        </Description>
      </InfoContainer>
      <Button onClick={() => navigate("/home")}>Voltar ao Catálogo</Button>
    </Container>
  );
};

export default BookDetails;
