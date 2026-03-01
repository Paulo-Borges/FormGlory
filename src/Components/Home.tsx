import { useState } from "react";

export const Home = () => {
  const [data, setData] = useState({
    nome: "",
    email: "",
  });

  function pegarForm(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function enviarForm(e) {
    e.preventDefault();
    console.log(data);
  }

  return (
    <div>
      <form onSubmit={enviarForm}>
        <div>
          <label htmlFor="">Nome:</label>
          <input
            type="text"
            name="nome"
            placeholder="Digite o seu nome"
            onChange={pegarForm}
          />
        </div>
        <div>
          <label htmlFor="">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Digite o email cadastrado"
            onChange={pegarForm}
          />
        </div>
        <button type="submit">Entrar / Criar</button>
      </form>
    </div>
  );
};
