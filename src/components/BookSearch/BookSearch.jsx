import { useState, useContext } from "react";
import { BookContext } from "../../context/BookContext";
import { FaStar, FaBookOpen, FaCheckCircle } from "react-icons/fa";
import {
  Container,
  Title,
  SearchInput,
  BackButtonContainer,
  BackButton,
  FilterContainer,
  FilterLabel,
  FilterCheckbox,
  FilterText,
  BookItem,
} from "./styles";
import { BookGrid, Button, BookIcons } from "../BookList/styles";

import { useNavigate } from "react-router-dom";

const BookSearch = () => {
  const navigate = useNavigate();
  const bookContext = useContext(BookContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("");

  if (!bookContext || !bookContext.books) {
    return <p style={{ color: "#fff" }}>Carregando livros...</p>;
  }

  const { books } = bookContext;

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterChange = (event) => {
    const value = event.target.value;
    setFilter(value === filter ? "" : value);
  };

  const filteredBooks =
    searchQuery.trim() === "" && filter === ""
      ? []
      : books.filter((book) => {
          const matchesSearch =
            book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.author.toLowerCase().includes(searchQuery.toLowerCase());

          const matchesFilter =
            filter === "" ||
            (filter === "favorites" && book.is_favorite) ||
            (filter === "reading" && book.is_reading) ||
            (filter === "read" && book.is_read);

          return matchesSearch && matchesFilter;
        });

  return (
    <Container>
      <BackButtonContainer>
        <BackButton onClick={() => navigate("/home")}>Voltar</BackButton>
      </BackButtonContainer>
      <Title>Pesquisar Livros</Title>

      <SearchInput
        type="text"
        placeholder="Pesquise por título ou autor"
        value={searchQuery}
        onChange={handleSearch}
      />

      <FilterContainer>
        <FilterLabel>
          <FilterCheckbox
            type="checkbox"
            value="favorites"
            checked={filter === "favorites"}
            onChange={handleFilterChange}
          />
          <FilterText>Favoritos</FilterText>
        </FilterLabel>
        <FilterLabel>
          <FilterCheckbox
            type="checkbox"
            value="reading"
            checked={filter === "reading"}
            onChange={handleFilterChange}
          />
          <FilterText>Lendo</FilterText>
        </FilterLabel>
        <FilterLabel>
          <FilterCheckbox
            type="checkbox"
            value="read"
            checked={filter === "read"}
            onChange={handleFilterChange}
          />
          <FilterText>Lido</FilterText>
        </FilterLabel>
      </FilterContainer>

      <BookGrid>
        {filteredBooks.length === 0 ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "10vh",
              width: "415%",
            }}
          >
            <p style={{ color: "#000" }}>Nenhum livro pesquisado</p>
          </div>
        ) : (
          filteredBooks.map((book) => (
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
            </BookItem>
          ))
        )}
      </BookGrid>
    </Container>
  );
};

export default BookSearch;
