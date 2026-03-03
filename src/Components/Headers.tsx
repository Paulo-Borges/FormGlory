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
  }, []);

  return (
    <div className="mb-6 flex justify-between ">
      <nav className="flex gap-20  items-center">
        <Link to="/" className="bg-amber-50 hover:bg-amber-100 p-2">
          Home
        </Link>
        {usuario || <LoginForm /> ? (
          <span>Bem-vindo, {usuario}</span>
        ) : (
          <Link to="login/criar">Login / Criar</Link>
        )}
      </nav>
    </div>
  );
};
