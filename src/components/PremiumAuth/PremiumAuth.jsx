import { useNavigate } from "react-router-dom";
import { Container, PremiumButton, Title } from "./styles";
import AuthContext from "../../context/AuthContext";
import React, { useContext } from "react";

const PremiumAuth = () => {
  const navigate = useNavigate();
  const { upgradeToPremium } = useContext(AuthContext);

  const handleUpgradeAndNavigateHome = () => {
    upgradeToPremium();
    navigate("/home");
  };

  return (
    <Container>
      <Title>Upgrade para Premium</Title>
      <p style={{ color: "white", fontSize: "0.9rem", fontFamily: "Poppins" }}>
        Com o Premium, você terá os dados de leitura de toda sua coleção. Assine
        agora e tenha acesso a estatísticas exclusivas!
      </p>
      <PremiumButton onClick={handleUpgradeAndNavigateHome}>
        Tornar-se Premium
      </PremiumButton>
    </Container>
  );
};

export default PremiumAuth;
