import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

import {
  Container,
  Card,
  Title,
  Input,
  Button,
  Avatar,
  ColorPickerContainer,
  ColorOption,
  BackButton,
} from "./styles";

const colorOptions = ["#2C3E50", "#34495E", "#7F8C8D", "#95A5A6", "#BDC3C7"];

const getInitials = (name) => {
  if (!name) return "";
  const parts = name.trim().split(" ");
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (
    parts[0].charAt(0).toUpperCase() +
    parts[parts.length - 1].charAt(0).toUpperCase()
  );
};

const UpdateUser = () => {
  const { user, updateUser, downgradePremium } = useContext(AuthContext);
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [color, setColor] = useState(user?.color || "#3a6ea5");
  const [showColorPicker, setShowColorPicker] = useState(false);

  const navigate = useNavigate();

  const handleDowngradeAndNavigateHome = () => {
    downgradePremium();
    navigate("/home");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("As senhas não conferem!");
      return;
    }

    updateUser({
      name,
      email,
      password: password ? password : user.password,
      color,
    });

    navigate("/home");
  };

  const toggleColorPicker = () => {
    setShowColorPicker(!showColorPicker);
  };

  const handleBackClick = () => {
    navigate("/home");
  };

  return (
    <Container>
      <BackButton onClick={handleBackClick}>Voltar</BackButton>
      <Card>
        <Title>Atualizar Perfil</Title>
        <Avatar style={{ backgroundColor: color }} onClick={toggleColorPicker}>
          {getInitials(name || user?.name)}
        </Avatar>
        {showColorPicker && (
          <ColorPickerContainer>
            {colorOptions.map((option) => (
              <ColorOption
                key={option}
                color={option}
                active={color === option}
                onClick={() => setColor(option)}
              />
            ))}
          </ColorPickerContainer>
        )}
        <p style={{ color: "#333", fontSize: "11px" }}>
          Selecione a cor do seu perfil clicando no ícone acima
        </p>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Nova senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Confirmar senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button type="submit">Salvar Alterações</Button>
          <Button
            style={{ backgroundColor: "#ff0000" }}
            onClick={handleDowngradeAndNavigateHome}
          >
            Cancelar Premium
          </Button>
        </form>
      </Card>
    </Container>
  );
};

export default UpdateUser;
