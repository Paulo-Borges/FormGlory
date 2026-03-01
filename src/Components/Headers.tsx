import { Link } from "react-router-dom";

export const Headers = () => {
  return (
    <div className="p-8">
      <nav className="flex justify-between">
        <Link to="/">Home</Link>
        <Link to="/criar">Login / Criar</Link>
      </nav>
    </div>
  );
};
