import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="pt-24 font-light hover:font-semibold">
      <Link
        to="https://www.linkedin.com/in/paulo-borges-de-almeida-b543b3242/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Borges @2026
      </Link>
    </div>
  );
};
