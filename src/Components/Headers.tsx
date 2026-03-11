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
    <div className="">
      <nav className="flex justify-between px-8">
        <Link
          to="/"
          className=" font-medium rounded bg-amber-50 hover:bg-amber-100 p-0 hover:p-1 "
        >
          Home
        </Link>
        {usuario || <LoginForm /> ? (
          <span className="font-medium">Bem-vindo, {usuario}</span>
        ) : (
          <Link to="login/criar">Login / Criar</Link>
        )}
      </nav>
    </div>
  );
};
