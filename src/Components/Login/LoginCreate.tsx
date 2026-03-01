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

  return (
    <div>
      <form>
        <div>
          {formFields.map((fields) => (
            <div key={fields.id}>
              <label>{fields.label}:</label>
              <input
                type={fields.type}
                name={fields.id}
                placeholder={fields.placeholder}
                onChange={pegarForm}
              />
            </div>
          ))}
        </div>

        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};
