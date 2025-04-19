import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-size: 400% 400%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  z-index: 0;
  background: linear-gradient(45deg, #f0f2f5, #dfe3e6, #f0f2f5);
`;

export const Title = styled.h1`
  font-family: 'Poppins', serif;
  margin-bottom: 1rem;
  margin-top: 6rem;
  font-size: 2.2rem;
  color: #333;
`;

export const SearchInput = styled.input`
  margin-bottom: 2rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 80%;
  max-width: 400px;
  outline: none;

  &:focus {
    border-color: #646cff;
  }
`;

export const BookGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  width: 100%;
  max-width: 1200px;
  margin: 2rem auto 0 auto; 
  z-index: 1;
`;


export const BookItem = styled.div`
  width: 250px;
  height: 250px;
  background: #fff;
  margin-top: 2rem; 
  color: #333;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  position: relative; 

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const UserContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;

export const HeaderWrapper = styled.div`
  margin-top: 4rem; 
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
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

  &:hover {
    background-color: #3a6ea5;
  }
`;

export const BackButton = styled.button`
  position: absolute;
  padding: 0.6rem 1rem;
  background-color: #3a6ea5;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #335b8b;
  }
`;

export const BookIcons = styled.div`
  position: absolute;
  top: 10px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  z-index: 1;

  .favorite-icon-wrapper {
    display: flex;
    justify-content: flex-start;
  }

  .status-icons-wrapper {
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
  }

  .book-icon {
    font-size: 1.2rem;
    color: #3a6ea5;
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



export const BackButtonContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 1;
  color: #3a6ea5;
  background-color: transparent; 
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -0.7rem; 
  width: 100%;
  max-width: 400px;
`;

export const FilterLabel = styled.label`
  display: flex;
  align-items: center;
  font-weight: 500;
  color: #333;
  font-size: 0.85rem;
  cursor: pointer;
  margin-right: 15px; 
`;

export const FilterCheckbox = styled.input`
  margin-right: 8px;
  accent-color: #3a6ea5;  
  cursor: pointer;
  
  border-radius: 6px; 
  padding: 6px;
  border: 2px solid #3a6ea5;  
  background-color: transparent;
  transition: all 0.3s ease;

  &:hover {
    border-color: #335b8b;
  }

  &:checked {
    background-color: #3a6ea5;  
    border-color: #335b8b;
  }

  &:focus {
    outline: none;
  }
`;

export const FilterText = styled.span`
  background-color: #3a6ea5;  
  color: white;  // Texto branco
  padding: 4px 8px;
  border-radius: 8px;  
  font-size: 0.85rem;
  margin-left: 6px;  
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #335b8b;  
  }
`;