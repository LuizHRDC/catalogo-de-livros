import styled from "styled-components";

export const FormContainer = styled.div`
  background: linear-gradient(45deg, #f0f2f5, #dfe3e6, #f0f2f5);
  background-size: cover;
  min-height: 100vh;
  width: 100%;
  display: flex;
  overflow-y: auto !important;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins', serif;
  box-sizing: border-box;
  z-index: 0;
  position: relative;
  padding-bottom: 15px;

  h2 {
    color: #333;
    text-align: center;
    margin-bottom: 0.8rem;
    font-size: 1.6rem;
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

export const Info = styled.div`
  font-size: 0.8rem;
  color: #555;
  margin-bottom: 0.8rem;
`;

export const Label = styled.label`
  font-weight: 500;
  color: #333;
  font-size: 0.85rem;
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: #fff;
  padding: 2rem;
  color: #000;
  border-radius: 8px;
  width: 80%;
  max-width: 500px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  
  h3 {
    margin-bottom: 1rem;
    font-family: 'Poppins', serif;
  }
  
  ul {
    list-style: none;
    padding: 0;
    
    li {
      margin-bottom: 0.5rem;
      padding: 0.5rem;
      background: #f4f4f4;
      border-radius: 4px;
    }
  }
  
  button {
    margin-top: 1rem;
    background-color: #3a6ea5;
    color: #fff;
    padding: 0.5rem 1rem;
    border: none;
    font-family: 'Poppins', serif;
    border-radius: 4px;
    cursor: pointer;
    
    &:hover {
      background-color: #2a4d72;
    }
  }
`;