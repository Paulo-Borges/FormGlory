// importar os hooks para o estado e pra os efeitos colaterais
import { useEffect, useState } from "react";
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

export default function UsersDetails() {
  // usar o id pra acessar o id da URL
  const { id } = useParams();
  // pra armazenar o usuário
  const [user, setUser] = useState<User | null>(null);
  // pra controles de erros
  const [error, setError] = useState<string | null>(null);

  const fetchUserDetail = async (id: string) => {
    try {
      // Fazer requisição a API
      const response = await instance.get(`/users/${id}`);
      console.log(response.data.user);

      setUser(response.data.user);
    } catch (error: any) {
      // Criar mensagem de Error
      setError("Erro ao carregar os usuarios");
    }
  };

  // Hook pra buscar dados quando id estiver disponivel
  useEffect(() => {
    if (id) {
      // Garantir que ID e uma string
      const userId = Array.isArray(id) ? id[0] : id;
      // Buscar os dados da situação se o id estiver disponivel
      fetchUserDetail(userId);
    }
  }, [id]);
  return (
    <div className="flex flex-col p-16 w-screen bg-gray-100">
      <h1 className="mb-12 font-semibold">Membros</h1>
      {error && <p className="text-red-500 mt-4">{error}</p>}

      {user && !error && (
        <div className="bg-white shadow-md rounded-lg p-6 max-w-100 mx-auto w-full ">
          <div className="flex flex-col items-start text-gray-700">
            <div className=" text-gray-700  ">
              <span className="font-bold">ID: </span>
              {user.id}
            </div>
            <div className="text-gray-700 ">
              <span className="font-bold">Nome: </span>
              {user.name}
            </div>
            <div className="text-gray-700 ">
              <span className="font-bold">Email: </span>
              {user.email}
            </div>
            <div className="text-gray-700 ">
              <span className="font-bold">Criado em : </span>
              {new Date(user.createdAt).toLocaleString()}
            </div>
            <div className="text-gray-700 ">
              <span className="font-bold">Editado em :</span>
              {new Date(user.updatedAt).toLocaleString()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
