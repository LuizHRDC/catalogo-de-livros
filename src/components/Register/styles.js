import styled from "styled-components";


export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(45deg, #f0f2f5, #dfe3e6, #f0f2f5);
`;

export const Title = styled.h2`
  font-family: 'Poppins', serif;
  margin-bottom: 1.5rem;
  font-size: 2.5rem;
  color: #333;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
`;

export const Label = styled.label`
  font-size: 1rem;
  color: #333;
  margin-bottom: 0.5rem;
  align-self: flex-start;
`;

export const Input = styled.input`
  padding: 0.8rem 1rem;
  font-size: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  border: 1px solid #dfe3e6;
  border-radius: 6px;
  box-sizing: border-box;

  &:focus {
    border-color: #0052cc;
    outline: none;
  }
`;

export const Button = styled.button`
  padding: 0.8rem 1.2rem;
  font-size: 1rem;
  background-color: #0052cc;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #003d99;
  }
`;

export const LoginLink = styled.p`
  margin-top: 1rem;
  color: #0052cc;

  button {
    background: none;
    border: none;
    color: #0052cc;
    text-decoration: underline;
    cursor: pointer;
  }

  button:hover {
    color: #003d99;
  }
`;
