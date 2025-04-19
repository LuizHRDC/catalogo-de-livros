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
  box-sizing: border-box;
  z-index: 0;
  position: relative;
  padding-bottom: 15px; // Slightly reduced padding bottom

  h2 {
    color: #333;
    text-align: center;
    margin-bottom: 0.8rem; // Reduced margin
    font-size: 1.6rem; // Further reduced font size
  }

  form {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  max-width: 400px;
  overflow-y: auto; /* Alterando para 'auto' em vez de 'scroll' */
  width: 100%;
  background-color: #fff;
  padding: 1.2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
`;

export const BackButton = styled.button`
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.5rem 0.9rem; // Reduced padding
  background-color: #3a6ea5;
  color: white;
  font-size: 0.95rem; // Smaller font size
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
  font-size: 0.8rem; // Smaller font size
  color: #555;
  margin-bottom: 0.8rem; // Reduced margin
`;

export const Label = styled.label`
  font-weight: 500;
  color: #333;
  font-size: 0.85rem; // Smaller font size
`;

export const Input = styled.input`
  padding: 0.6rem;  // Reduced padding for smaller input field
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 0.9rem; // Smaller font size
  background-color: #f9f9f9;

  &:focus {
    border-color: #3a6ea5;
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  padding: 0.6rem;  // Reduced padding for smaller text area
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 0.9rem; // Smaller font size
  background-color: #f9f9f9;
  resize: vertical;

  &:focus {
    border-color: #3a6ea5;
    outline: none;
  }
`;

export const SubmitButton = styled.button`
  padding: 0.6rem;  // Reduced padding for button
  font-size: 0.9rem; // Smaller font size for button text
  font-weight: 600;
  background-color: #3a6ea5;
  border: none;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #335b8b;
  }
`;