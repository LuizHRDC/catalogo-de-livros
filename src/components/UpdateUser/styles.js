import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto !important;
  height: 100vh;
  background: #f4f4f4;
  font-family: "Poppins", sans-serif;
`;

export const Card = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 350px;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

export const Avatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 0 auto 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

export const ColorPickerContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 1rem;
`;

export const ColorOption = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  cursor: pointer;
  border: ${({ active }) => (active ? "3px solid #333" : "none")};
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  &:focus {
    border-color: #3a6ea5;
    outline: none;
  }
`;

export const Button = styled.button`
  width: 100%;
  margin: 0.4rem;
  padding: 0.75rem;
  background-color: #3a6ea5;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #2f5a8f;
  }
`;

export const BackButton = styled.button`
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.5rem 0.9rem; 
  background-color: #3a6ea5;
  color: white;
  font-size: 0.95rem; 
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #335b8b;
  }
`;
