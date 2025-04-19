import { createContext, useState, useEffect } from "react";
import user_type from "../components/enums/user_type";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const API_URL = "http://localhost:5000/api";

  const register = async (email, password, name, color) => {
    try {
      const response = await fetch(`${API_URL}/users/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, name, color }),
      });

      if (!response.ok) {
        throw new Error("Erro ao registrar usuário");
      }

      let user = await response.json();

      user = {
        ...user,
        user_type: user.userType,
        color: user.color || "#2C3E50",
      };

      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
      return user;
    } catch (err) {
      console.error("Erro ao registrar:", err.message);
      return null;
    }
  };

  const login = async (email, password) => {
    try {
      const response = await fetch(`${API_URL}/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Login falhou");
      }

      const userData = await response.json();

      const user = {
        id: userData.id,
        email: userData.email,
        password: userData.password,
        name: userData.name,
        color: userData.color || "#ccc",
        user_type: userData.user_type,
      };

      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
      return user;
    } catch (err) {
      console.error("Erro no login:", err.message);
      return null;
    }
  };

  const upgradeToPremium = async () => {
    try {
      const response = await fetch(`${API_URL}/users/upgrade/${user.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Erro ao fazer upgrade");
      }

      const updatedUser = await response.json();

      const normalizedUser = {
        ...updatedUser,
        user_type: updatedUser.user_type,
      };

      setUser(normalizedUser);
      localStorage.setItem("user", JSON.stringify(normalizedUser));
    } catch (err) {
      console.error("Erro ao fazer upgrade:", err.message);
    }
  };

  const downgradePremium = async () => {
    try {
      const response = await fetch(`${API_URL}/users/downgrade/${user.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Erro ao fazer downgrade");
      }

      const updatedUser = await response.json();

      const normalizedUser = {
        ...updatedUser,
        user_type: updatedUser.user_type,
      };

      setUser(normalizedUser);
      localStorage.setItem("user", JSON.stringify(normalizedUser));
    } catch (err) {
      console.error("Erro ao fazer downgrade:", err.message);
    }
    console.log("Executando downgrade...");
    console.log("Usuário atual:", user);
  };

  const updateUser = async (updatedData) => {
    try {
      const response = await fetch(`${API_URL}/users/update/${user.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error("Erro ao atualizar usuário");
      }

      const updatedUser = await response.json();
      console.log("Resposta do backend após update:", updatedUser);

      const normalizedUser = {
        ...user,
        ...updatedUser,
        user_type: updatedUser.user_type,
      };

      setUser(normalizedUser);
      localStorage.setItem("user", JSON.stringify(normalizedUser));
    } catch (err) {
      console.error("Erro ao atualizar usuário:", err.message);
    }
  };

  const logout = () => {
    navigate("/");
  };

  const value = {
    user,
    register,
    login,
    upgradeToPremium,
    downgradePremium,
    updateUser,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
