import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  background: linear-gradient(45deg, #f0f2f5, #dfe3e6, #f0f2f5);
  background-size: 400% 400%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  z-index: 0;
`;

export const Title = styled.h1`
  font-family: 'Merriweather', serif; /* Ajustado para coincidir com os book cards */
  margin-bottom: 1.5rem;
  font-size: 2rem;
  color: #333; /* Mesmo tom do título da BookList */
`;

export const InfoContainer = styled.div`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-left: 6px solid #3a6ea5; /* Destaque sutil para estrutura */
`;

export const Info = styled.div`
  color: #333;
  font-family: 'Merriweather', serif;
`;

export const InfoLabel = styled.span`
  font-weight: bold;
  color: #222;
`;

export const InfoValue = styled.span`
  color: #555;
`;

export const Description = styled.p`
  margin-top: 20px;
  color: #333;
  line-height: 1.6;
  font-size: 1rem;
  text-align: justify;
  font-family: 'Merriweather', serif;
`;

export const Button = styled.button`
  margin-top: 1rem;
  padding: 0.7rem 1.5rem;
  background-color: #3a6ea5;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s ease;
  font-size: 1rem;
  font-family: 'Merriweather', serif;

  &:hover {
    background-color: #2c5b8a;
    transform: scale(1.05);
  }
`;
