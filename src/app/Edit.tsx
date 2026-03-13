// importar os hooks para o estado e pra os efeitos colaterais
import React, { useEffect, useState } from "react";
// pra acessar pelos ID das URL de uma pagina dinamica
import { useParams } from "react-router-dom";
// Importa a instância do axios pra fazer requisições para a API
import instance from "../services/api";

// Definir tipos pra resposta da API
interface User {
  id: number;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export default function Edit() {
  // usar o id pra acessar o id da URL
  const { id } = useParams();
  // // pra armazenar o usuário
  const [user, setUser] = useState<User | null>(null);
  // pra controles de erros
  const [error, setError] = useState<string | null>(null);

  // pra controles de success
  const [success, setSuccess] = useState<string | null>(null);

  // pra armazenar o name
  const [name, setName] = useState<string>("");
  // pra armazenar o email
  const [email, setEmail] = useState<string>("");

  const fetchUserDetail = async (id: string) => {
    try {
      // Fazer requisição a API
      const response = await instance.get(`/users/${id}`);
      const userData = response.data.user;

      setUser(userData);
      setName(userData.name);
      setEmail(userData.email);
    } catch (error: any) {
      // Criar mensagem de Error
      setError(error.response?.data?.message || "Erro ao carregar usuário");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      // Fazer requisição a API
      const response = await instance.put(`/users/${id}`, {
        name,
        email,
      });
      // console.log(response.data);
      setSuccess(response.data.message);

      setName("");
      setEmail("");
    } catch (error: any) {
      // Criar mensagem de Error
      setError(error.response.data.message);
    }
  };

  // Hook pra buscar dados quando id estiver disponivel
  useEffect(() => {
    if (id) {
      // Buscar os dados da situação se o id estiver disponivel
      fetchUserDetail(id);
    }
  }, [id]);

  return (
    <div>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:{user?.name} </label>
          <input
            type="text"
            id="name"
            // value={name}
            // placeholder="Nome Completo"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="name">Email: {user?.email}</label>
          <input
            type="email"
            id="email"
            // value={email}
            // placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}
