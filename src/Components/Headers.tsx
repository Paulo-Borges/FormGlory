import { Link } from "react-router-dom";

export const Headers = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login / Criar</Link>
      </nav>
    </div>
  );
};
