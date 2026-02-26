import { useState } from "react";
import { Link } from "react-router-dom";

export const LoginForm = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  function handleSubmit(e: any): void {
    e.preventDefault();
    localStorage.setItem("devTest", JSON.stringify(password));
    console.log(password);
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          id="1"
          type="text"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <input
          id="2"
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />

        <button>Entrar</button>
      </form>
      <Link to="/Login/criar">
        Cadastro:{username} {password}
      </Link>
    </section>
  );
};
