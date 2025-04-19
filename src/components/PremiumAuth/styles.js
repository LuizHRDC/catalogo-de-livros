import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url('https://via.placeholder.com/1200x800.png') repeat;
  background-size: cover;
  text-align: center;
`;


export const PremiumButton = styled.button`
  background-color: #daa520;
  color: black;
  border: 2px solid #daa520;
  padding: 12px 30px;
  font-size: 20px;
  cursor: pointer;
  font-family: 'Poppins', san-serif;
  margin-top: 30px;
  border-radius: 10px;
  font-weight: bold;
  box-shadow: 0 0 20px #ffcc00;

  &:hover {
    background-color: #daa520;
    box-shadow: 0 0 30px 5px rgba(255, 223, 0, 0.8);
    transform: scale(1.1);
  }

  &:active {
    background-color: goldenrod;
    box-shadow: 0 0 40px 5px rgba(255, 215, 0, 0.9);
  }
`;

export const Title = styled.h1`
  font-family: 'Cinzel', serif;
  font-size: 3rem;
  color: #fff;
  text-shadow: 0 0 20px rgba(255, 255, 0, 0.7), 0 0 30px rgba(255, 255, 0, 0.9);
  text-transform: uppercase;
  letter-spacing: 2px;
`;
