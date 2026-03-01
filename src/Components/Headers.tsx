import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Headers = () => {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const dadosSessao = localStorage.getItem("@MeuApp");
    if (dadosSessao) {
      setUsuario(dadosSessao);
    } /*else { setUsuario(null)} */
  }, []);

  return (
    <div className="p-8">
      <nav className="flex justify-between">
        <Link to="/">Home</Link>
        {usuario ? (
          <span>Bem-vindo, {usuario}</span>
        ) : (
          <Link to="/criar">Login / Criar</Link>
        )}
      </nav>
    </div>
  );
};
