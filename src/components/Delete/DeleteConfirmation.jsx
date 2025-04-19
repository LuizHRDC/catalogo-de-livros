import React from "react";

const DeleteConfirmation = ({ onConfirm, onCancel }) => {
  return (
    <div>
      <p>Tem certeza de que deseja excluir esse livro?</p>
      <button onClick={onConfirm}>Sim</button>
      <button onClick={onCancel}>Não</button>
    </div>
  );
};

export default DeleteConfirmation;
