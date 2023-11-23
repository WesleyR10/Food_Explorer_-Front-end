/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("sessions", { email, password }, { withCredentials: true });
      const { user } = response.data;

      console.log("Response from server after login:", response.data);
      console.log("User received after login:", user);

      localStorage.setItem("@foodExplorer:user", JSON.stringify(user));

      setData({ user });
    } catch (error) {
      if (error.response) {
        console.error("Erro na resposta do servidor:", error.response.data);
        alert(error.response.data.message);
      } else {
        console.error("Erro na requisição:", error.message);
        alert("Não foi possível entrar.");
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@foodExplorer:user");
    setData({});
  }

  useEffect(() => {
    const user = localStorage.getItem("@foodExplorer:user");
    console.log("User retrieved from localStorage:", JSON.parse(user));

    if (user) {
      setData({
        user: JSON.parse(user)
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, user: data.user, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)
  return context
}

// eslint-disable-next-line react-refresh/only-export-components
export { AuthProvider, useAuth }