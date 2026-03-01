import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LoginForm } from "./Login/LoginForm";

export const Headers = () => {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const dadosSessao = localStorage.getItem("@MeuApp");
    if (dadosSessao) {
      setUsuario(dadosSessao);
    } else {
      setUsuario(null);
    }
  }, [setUsuario]);

  return (
    <div className="p-8">
      <nav className="flex justify-between">
        <Link to="/">Home</Link>
        {usuario || <LoginForm /> ? (
          <span>Bem-vindo, {usuario}</span>
        ) : (
          <Link to="login/criar">Login / Criar</Link>
        )}
      </nav>
    </div>
  );
};
