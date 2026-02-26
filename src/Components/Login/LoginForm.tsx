import { useState } from "react";
import { Link } from "react-router-dom";

const formFields = [
  {
    id: "login",
    type: "text",
    label: "Login",
  },
  {
    id: "password",
    type: "password",
    label: "Password",
  },
];

export const LoginForm = () => {
  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("@glory:entrar", JSON.stringify(formData));
    console.log("Estamos no Caminho certo", formData);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          {formFields.map(({ id, label, type }) => (
            <div key={id}>
              <label htmlFor={label}>{label}</label>
              <input
                name={id}
                id={id}
                type={type}
                value={formData[id as keyof typeof formData]}
                onChange={handleChange}
              />
            </div>
          ))}

          <button>Entrar</button>
        </div>
      </form>
      <Link to="/Login/criar">Cadastro:</Link>
    </section>
  );
};
