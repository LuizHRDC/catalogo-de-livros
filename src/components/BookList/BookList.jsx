import { useEffect, useState, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import user_type from "../enums/user_type";
import { FaStar, FaBookOpen, FaCheckCircle } from "react-icons/fa";
import {
  Container,
  Title,
  AddButton,
  SearchButton,
  BookGrid,
  BookItem,
  Button,
  UserContainer,
  Avatar,
  UserName,
  HeaderWrapper,
  Email,
  TextContainer,
  PremiumButton,
  StatsButton,
  BookIcons,
  Logout,
} from "./styles";

const BookList = () => {
  const { user } = useContext(AuthContext);
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  const fetchBooks = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/books/${user.id}`
      );
      console.log("Response status:", response.status);
      const data = await response.json();
      console.log("Dados recebidos:", data);
      setBooks(data);
    } catch (error) {
      console.error("Erro ao buscar livros:", error);
    }
  };

  useEffect(() => {
    console.log("Usuário atual:", user);
    if (user?.id) {
      fetchBooks();
    }
  }, [user]);

  const handleDelete = async (id) => {
    if (window.confirm("Tem certeza de que deseja excluir este livro?")) {
      try {
        await fetch(`http://localhost:5000/books/${id}`, {
          method: "DELETE",
        });
        setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
      } catch (error) {
        console.error("Erro ao excluir livro:", error);
      }
    }
  };

  const { logout } = useContext(AuthContext);

  const userBooks = books?.filter((book) => book.user_id === user?.id) || [];

  return (
    <Container>
      <Logout onClick={() => navigate("/")}>Sair</Logout>

      {user && (
        <UserContainer onClick={() => navigate("/update-user")}>
          <TextContainer>
            <UserName>{user.name}</UserName>
            <Email>{user.email}</Email>
          </TextContainer>
          <Avatar style={{ backgroundColor: user.color }}>
            {user.name
              .split(" ")
              .map((name) => name.charAt(0).toUpperCase())
              .slice(0, 2)
              .join("")}
          </Avatar>
        </UserContainer>
      )}

      <HeaderWrapper>
        <Title>Catálogo de Livros Pessoal</Title>
        <div>
          <AddButton onClick={() => navigate("/add")}>
            Adicionar Livro
          </AddButton>
          <SearchButton onClick={() => navigate("/search")}>
            Pesquisar Livros
          </SearchButton>

          {user?.user_type === user_type.COMMON ? (
            <PremiumButton onClick={() => navigate("/authpremium")}>
              Tornar-se Premium
            </PremiumButton>
          ) : (
            <StatsButton onClick={() => navigate("/stats")}>
              Veja suas estatísticas
            </StatsButton>
          )}
        </div>
      </HeaderWrapper>

      {userBooks.length === 0 ? (
        <p style={{ color: "#000" }}>Sem livros cadastrados</p>
      ) : (
        <BookGrid>
          {userBooks.map((book) => (
            <BookItem key={book.id}>
              <div>
                <BookIcons>
                  {book.is_favorite && (
                    <div className="favorite-icon-wrapper">
                      <FaStar className="book-icon favorite-icon" />
                    </div>
                  )}
                  <div className="status-icons-wrapper">
                    {book.is_reading && (
                      <FaBookOpen className="book-icon reading-icon" />
                    )}
                    {book.is_read && (
                      <FaCheckCircle className="book-icon read-icon" />
                    )}
                  </div>
                </BookIcons>
              </div>
              <h3>{book.title}</h3>
              <p>Autor: {book.author}</p>
              <p>Ano de publicação: {book.year}</p>
              <Button onClick={() => navigate(`/details/${book.id}`)}>
                Ver Detalhes
              </Button>
              <Button onClick={() => navigate(`/edit/${book.id}`)}>
                Editar
              </Button>
              <Button onClick={() => handleDelete(book.id)}>Excluir</Button>
            </BookItem>
          ))}
        </BookGrid>
      )}
    </Container>
  );
};

export default BookList;
