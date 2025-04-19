import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import {
  Container,
  Title,
  Form,
  Label,
  Input,
  Button,
  LoginLink,
} from "../components/Register/styles";

const Register = () => {
  const { register } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  React.useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.height = "100%";
    document.body.style.overflow = "hidden";

    document.documentElement.style.height = "100%";

    return () => {
      document.body.style.margin = "";
      document.body.style.padding = "";
      document.body.style.height = "";
      document.body.style.overflow = "";

      document.documentElement.style.height = "";
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("As senhas não conferem!");
      return;
    }
    const newUser = register(email, password, name);
    if (newUser) {
      navigate("/");
    }
  };

  return (
    <Container>
      <Title>Cadastro</Title>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">Nome:</Label>
        <Input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Label htmlFor="email">E-mail:</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Label htmlFor="password">Senha:</Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Label htmlFor="confirmPassword">Confirmar Senha:</Label>
        <Input
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button type="submit">Cadastrar</Button>
      </Form>
      <LoginLink>
        Já possui uma conta?{" "}
        <button onClick={() => navigate("/")}>Faça login</button>
      </LoginLink>
    </Container>
  );
};

export default Register;
