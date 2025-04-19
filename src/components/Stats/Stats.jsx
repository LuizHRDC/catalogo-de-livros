import React, { useState, useEffect, useContext } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { BookContext } from "../../context/BookContext";
import { BackButton, FormContainer, Info, Modal, ModalContent } from "./styles";

ChartJS.register(ArcElement, Tooltip, Legend);

const Stats = () => {
  const { books } = useContext(BookContext);
  const [stats, setStats] = useState({
    lidos: 0,
    lendo: 0,
    naoMarcados: 0,
    favoritos: 0,
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [favoriteBooks, setFavoriteBooks] = useState([]);

  useEffect(() => {
    const calculateStats = () => {
      const lidos = books.filter((book) => book.is_read).length;
      const lendo = books.filter((book) => book.is_reading).length;
      const naoMarcados = books.filter(
        (book) => !book.is_read && !book.is_reading
      ).length;
      const favoritos = books.filter((book) => book.is_favorite).length;

      setStats({
        lidos,
        lendo,
        naoMarcados,
        favoritos,
      });
    };

    calculateStats();
  }, [books]);

  const data = {
    labels: ["Lidos", "Lendo", "Não Marcados"],
    datasets: [
      {
        data: [stats.lidos, stats.lendo, stats.naoMarcados],
        backgroundColor: ["#36A2EB", "#FF9F40", "#FFCD56"],
        hoverBackgroundColor: ["#36A2EB", "#FF9F40", "#FFCD56"],
      },
    ],
  };

  const handleFavoritesClick = () => {
    const favorites = books.filter((book) => book.is_favorite);
    setFavoriteBooks(favorites);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <FormContainer>
      <BackButton onClick={() => window.history.back()}>Voltar</BackButton>
      <h2>Estatísticas de Leitura</h2>
      <Info>
        <p
          style={{
            fontFamily: "Poppins",
            cursor: "pointer",
            textAlign: "center",
          }}
          onClick={handleFavoritesClick}
        >
          Favoritos: {stats.favoritos}
        </p>
        <p>Clique acima para visualizar seus livros favoritos</p>
      </Info>
      <div style={{ width: "30%", height: "30%" }}>
        <Pie data={data} />
      </div>

      {modalVisible && (
        <Modal>
          <ModalContent>
            <h3>Livros Favoritos</h3>
            <ul>
              {favoriteBooks.map((book) => (
                <li key={book.id}>
                  <p>
                    <strong>{book.title}</strong> - Autor: {book.author}
                  </p>
                  <p>Ano: {book.year}</p>
                </li>
              ))}
            </ul>
            <button onClick={handleCloseModal}>Fechar</button>{" "}
          </ModalContent>
        </Modal>
      )}
    </FormContainer>
  );
};

export default Stats;
