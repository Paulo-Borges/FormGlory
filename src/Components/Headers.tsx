import { Link } from "react-router-dom";

export const Headers = () => {
  return (
    <div className="p-8">
      <nav className="flex justify-between">
        <Link to="/">Home</Link>
        <Link to="/login">Login / Criar</Link>
      </nav>
    </div>
  );
};
