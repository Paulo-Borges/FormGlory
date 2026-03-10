import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const formFields = [
  {
    label: "Nome",
    type: "text",
    id: "nome",
    placeholder: "Digite o seu nome",
  },
  {
    label: "Email",
    type: "email",
    id: "email",
    placeholder: "Digite o email cadastrado!",
  },
];

export const Home = () => {
  const [data, setData] = useState({
    nome: "",
    email: "",
  });
  const navigate = useNavigate();

  // se estiver salvo envia para os lugares certo
  const handleLogin = () => {
    // 1. Busca o usuario que foi salvo anteriormente no localStorage
    const usuarioCadastrado = localStorage.getItem("@MeuApp");

    // 2. Compara o usuario digitado AGORA com o email do LocalStorage
    if (data.nome === usuarioCadastrado) {
      console.log("Usuário reconhecido!");
      navigate("/login");
    } else {
      console.log("usuario não encontrado ou incorreto.");
      navigate("/login/criar");
    }
  };

  // pra pegar o que e digitado
  function pegarForm(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  // pra enviar pro localStorage
  function enviarForm(e) {
    e.preventDefault();
    // localStorage.setItem("@MeuApp", JSON.stringify(data));
    console.log(data);
  }

  return (
    <div>
      <form onSubmit={enviarForm}>
        {formFields.map((field) => (
          <div key={field.id} className="flex flex-col items-start gap-2">
            <label htmlFor="">{field.label}:</label>
            <input
              type={field.type}
              name={field.id}
              className="w-full bg-amber-50 p-3"
              placeholder={field.placeholder}
              onChange={pegarForm}
            />
          </div>
        ))}
        <button
          type="submit"
          onClick={handleLogin}
          className="mt-15 bg-amber-50 hover:bg-amber-100 p-2"
        >
          Entrar / Criar
        </button>
        <Link to="../app/Users">Usuários</Link>
      </form>
    </div>
  );
};
