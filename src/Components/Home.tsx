import { useState } from "react";

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
        {formFields.map((field) => (
          <div key={field.id}>
            <label htmlFor="">{field.label}:</label>
            <input
              type={field.type}
              name={field.id}
              placeholder={field.placeholder}
              onChange={pegarForm}
            />
          </div>
        ))}

        {/* <div>
          <label htmlFor="">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Digite o email cadastrado"
            onChange={pegarForm}
          />
        </div> */}
        <button type="submit">Entrar / Criar</button>
      </form>
    </div>
  );
};
