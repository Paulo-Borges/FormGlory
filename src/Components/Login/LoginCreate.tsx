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

  return (
    <div>
      <form>
        <div>
          {formFields.map((fields) => (
            <div>
              <label>{fields.label}:</label>
              <input
                type={fields.type}
                name={fields.id}
                placeholder={fields.placeholder}
              />
            </div>
          ))}
        </div>
        {/* <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Digite o email pra cadastro!"
          />
        </div> */}
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};
