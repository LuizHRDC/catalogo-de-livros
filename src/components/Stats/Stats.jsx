import React, { useState, useEffect, useContext } from "react";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { BackButton, FormContainer, Info, Modal, ModalContent } from "./styles";
import AuthContext from "../../context/AuthContext";
import { BookContext } from "../../context/BookContext";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

const Stats = () => {
  const { user } = useContext(AuthContext);
  const { books } = useContext(BookContext);
  const [stats, setStats] = useState({
    total_books: 0,
    total_read: 0,
    total_reading: 0,
    total_unmarked: 0,
    total_favorites: 0,
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [historyVisible, setHistoryVisible] = useState(false);
  const [favoriteBooks, setFavoriteBooks] = useState([]);
  const [reportHistory, setReportHistory] = useState([]);

  const fetchReport = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/reports/${user.id}`
      );
      if (!response.ok) throw new Error("Erro ao buscar relatório");

      const reports = await response.json();
      if (reports.length > 0) {
        setStats(reports[0]);

        const sortedReports = [...reports].sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );

        setReportHistory(sortedReports.slice(0, 7));
        console.log("📊 Histórico de relatórios:", sortedReports);
      }
    } catch (error) {
      console.error("Erro ao buscar estatísticas:", error.message);
    }
  };

  const generateReport = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/reports/${user.id}`,
        {
          method: "POST",
        }
      );

      if (!response.ok) throw new Error("Erro ao gerar relatório");

      const newReport = await response.json();
      setStats(newReport);
      fetchReport();
    } catch (error) {
      console.error("Erro ao gerar relatório:", error.message);
    }
  };

  useEffect(() => {
    if (user?.id) {
      fetchReport();
    }
  }, [user]);

  const data = {
    labels: ["Lidos", "Lendo", "Não Marcados"],
    datasets: [
      {
        data: [stats.total_read, stats.total_reading, stats.total_unmarked],
        backgroundColor: ["#36A2EB", "#FF9F40", "#FFCD56"],
        hoverBackgroundColor: ["#36A2EB", "#FF9F40", "#FFCD56"],
      },
    ],
  };

  const barData = {
    labels: reportHistory.map((r) =>
      new Date(r.created_at).toLocaleDateString("pt-BR")
    ),
    datasets: [
      {
        label: "Lidos",
        backgroundColor: "#36A2EB",
        data: reportHistory.map((r) => r.total_read),
      },
      {
        label: "Lendo",
        backgroundColor: "#FF9F40",
        data: reportHistory.map((r) => r.total_reading),
      },
      {
        label: "Não Marcados",
        backgroundColor: "#FFCD56",
        data: reportHistory.map((r) => r.total_unmarked || 0),
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

  const toggleHistory = () => {
    setHistoryVisible(!historyVisible);
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
          Favoritos: {stats.total_favorites}
        </p>
        <p>Clique acima para visualizar seus livros favoritos</p>
      </Info>
      <div style={{ width: "30%", height: "30%" }}>
        <Pie data={data} />
      </div>

      <div style={{ marginTop: "1rem" }}>
        <button
          onClick={generateReport}
          style={{
            padding: "0.6rem 1.2rem",
            backgroundColor: "#3a6ea5",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontFamily: "Poppins",
            marginRight: "1rem",
          }}
        >
          Atualizar Relatório
        </button>

        <button
          onClick={toggleHistory}
          style={{
            padding: "0.6rem 1.2rem",
            backgroundColor: "#4CAF50",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontFamily: "Poppins",
          }}
        >
          Ver Histórico de Relatórios
        </button>
      </div>

      {historyVisible && (
        <Modal>
          <ModalContent>
            <h3>Histórico de Relatórios</h3>
            <Bar
              data={barData}
              options={{
                responsive: true,
                scales: {
                  y: {
                    ticks: {
                      stepSize: 1,
                      precision: 0,
                    },
                    beginAtZero: true,
                  },
                },
              }}
            />
            <button onClick={toggleHistory}>Fechar</button>
          </ModalContent>
        </Modal>
      )}

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
            <button onClick={handleCloseModal}>Fechar</button>
          </ModalContent>
        </Modal>
      )}
    </FormContainer>
  );
};

export default Stats;
