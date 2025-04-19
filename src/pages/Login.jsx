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
  RegisterLink,
} from "../components/Login/styles";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    const user = login(email, password);
    if (user) {
      localStorage.setItem("loggedUser", JSON.stringify(user));
      navigate("/home");
    } else {
      alert("Credenciais inválidas. Verifique seu e-mail e senha.");
    }
  };

  return (
    <Container>
      <Title>Login</Title>
      <Form onSubmit={handleSubmit}>
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
        <Button type="submit">Entrar</Button>
      </Form>
      <RegisterLink>
        Não tem uma conta?{" "}
        <button onClick={() => navigate("/register")}>Cadastre-se</button>
      </RegisterLink>
    </Container>
  );
};

export default Login;
