import styled from "styled-components";
import { FaStar, FaBookOpen, FaCheckCircle } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;  /* Define um espaçamento entre os filhos */
  padding: 2rem;
  background: linear-gradient(45deg, #f0f2f5, #dfe3e6, #f0f2f5);
  background-size: 400% 400%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  z-index: 0;
`;


export const Title = styled.h1`
  font-family: 'Poppins', serif;
  margin-bottom: 1rem;
  font-size: 2.2rem;
  color: #333;
`;

export const AddButton = styled.button`
  margin-right: 1rem;
  margin-bottom: 2rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  background-color: #3a6ea5;
  color: #fff;
  border: none;
  border-radius: 6px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease, background-color 0.2s ease;

  &:hover {
    transform: scale(1.05);
    background-color: #3a6ea5;
  }
`;

export const SearchButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  background-color: #3a6ea5;
  color: #fff;
  border: none;
  border-radius: 6px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease, background-color 0.2s ease;

  &:hover {
    transform: scale(1.05);
    background-color: #3a6ea5;
  }
`;

export const BookGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  flex-grow: 1;  /* Faz com que o BookGrid ocupe o máximo de espaço disponível */
`;

export const HeaderWrapper = styled.div`
  margin-top: 4rem; /* Ajuste o valor conforme necessário */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;



export const BookItem = styled.div`
  width: 250px;
  height: 250px;
  background: #fff;
  color: #333;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  position: relative; /* Adiciona essa propriedade para os ícones não saírem do card */

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;


export const Button = styled.button`
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #3a6ea5;
  color: #fff;
  border: none;
  margin-right: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;

  &:hover {
    background-color: #3a6ea5;
    transform: scale(1.05);
  }
`;

export const PremiumButton = styled.button`
  margin-top: 0.5rem;
  margin-left: 1rem; /* Adiciona espaçamento à esquerda */
  padding: 0.5rem 1rem;
  background-color: #FFD700;
  font-family: 'Poppins', serif;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;

  &:hover {
    background-color: #FFD700;
    transform: scale(1.05);
  }
`;

export const StatsButton = styled.button`
  margin-top: 0.5rem;
  margin-left: 1rem; /* Adiciona espaçamento à esquerda */
  padding: 0.5rem 1rem;
  background-color: #2ecc71;
  font-family: 'Poppins', san-serif;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s ease, transform 0.2s ease;

  &:hover {
    background-color: #2ecc61;
    transform: scale(1.05);
  }
`;


export const UserContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center; /* Alinha verticalmente o conteúdo (nome, email e avatar) */
  gap: 10px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;

export const Logout = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  color: #fff;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  transition: 0.3s;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #3a6ea5;
  border: none;
  border-radius: 6px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);

  &:hover {
    opacity: 0.8;
  }
`;


export const TextContainer = styled.div`
  display: flex;
  flex-direction: column; /* Empilha o nome e o e-mail verticalmente */
  align-items: flex-start; /* Alinha os itens à esquerda */
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-family: 'Poppins', serif;
  font-weight: bold;
  color: white;
  background-color: ${({ userColor }) => userColor || "#333"}; // Cor do usuário
`;


export const UserName = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  font-family: 'Poppins', serif;
  margin-bottom: -1rem;
  margin-top: 10px;
`;

export const Email = styled.p`
  font-size: 0.7rem;
  font-family: 'Poppins', serif;
  font-weight: 300;
  color: #333;
`;

export const BookIcons = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  height: 24px;
  display: flex;
  justify-content: space-between;
  z-index: 1;

  .favorite-icon-wrapper {
    flex: 0 0 auto;
  }

  .status-icons-wrapper {
    display: flex;
    gap: 0.5rem;
    justify-content: flex-end;
    flex: 1;
  }
  
  .favorite-icon {
    color: gold;
  }

  .reading-icon {
    color: #3a6ea5;
  }

  .read-icon {
    color: green;
  }

`;


export const FavoriteIcon = styled(FaStar)`
  font-size: 1.5rem;
`;

export const ReadingIcon = styled(FaBookOpen)`
  font-size: 1.5rem;
`;

export const ReadIcon = styled(FaCheckCircle)`
  font-size: 1.5rem;
`;

