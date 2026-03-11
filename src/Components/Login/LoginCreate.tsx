import { useState } from "react";

const formFields = [
  {
    label: "Nome",
    type: "text",
    id: "nome",
    placeholder: "Digite o nome pra cadastro!",
  },
  {
    label: "Email",
    type: "email",
    id: "email",
    placeholder: "Digite o email pra cadastro!",
  },
];

export const LoginCreate = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
  });

  function pegarForm(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const enviarLocal = (e) => {
    e.preventDefault();
    localStorage.setItem("@MeuApp", formData.nome);
    console.log(formData);
  };

  return (
    <div className="flex flex-col gap-6 justify-center text-start min-w-2xl border border-amber-100">
      <form onSubmit={enviarLocal} className="mt-6">
        <div>
          {formFields.map((fields) => (
            <div key={fields.id} className="flex flex-col items-start gap-2">
              <label>{fields.label}:</label>
              <input
                type={fields.type}
                name={fields.id}
                className="w-full bg-amber-50 p-3"
                placeholder={fields.placeholder}
                onChange={pegarForm}
              />
            </div>
          ))}
        </div>

        <button
          type="submit"
          className="mt-15 bg-amber-50 hover:bg-amber-100 p-2"
        >
          Entrar
        </button>
      </form>
    </div>
  );
};
