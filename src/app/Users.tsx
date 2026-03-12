import { useEffect, useState } from "react";
import instance from "../services/api";
import { Link } from "react-router-dom";

interface User {
  id: number;
  name: string;
  email: string;
}

export default function Users() {
  // Estados pra controle de erros
  const [error, setError] = useState<string | null>(null);
  // Estados pra armazenar os usuários
  const [users, setUsers] = useState<User[]>([]);

  // função pra buscar da API
  const fetchUsers = async () => {
    try {
      // Fazer a requisição da API
      const response = await instance.get("/users");

      setUsers(response.data);
    } catch (error) {
      // Criar mensagem de erro
      setError("Erro ao carregar os usuários");
      console.log(error);
    }
  };
  //   Hook pra buscar os dados na primeira renderização
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="w-screen">
      <h1 className="pb-6 font-medium text-2xl">Listar Usuários</h1>
      {/* Exibe mensagem de erro  */}
      {error && <p style={{ color: "#f00" }}>{error}</p>}
      <div className="mt-6 bg-white shadow-md rounded-lg p-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-3 text-left">ID</th>
              <th className="border border-gray-300 p-3 text-left">NOME</th>
              <th className="border border-gray-300 p-3 text-left">EMAIL</th>
              <th className="border border-gray-300  p-3 text-center">AÇÕES</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 p-3">{user.id}</td>
                <td className="border border-gray-300 p-3">{user.name}</td>
                <td className="border border-gray-300 p-3">{user.email}</td>
                <td className=" flex border border-gray-300 p-3">
                  <div>
                    <Link
                      to={`/app/Users/${user.id}`}
                      className="bg-blue-500 me-1 text-white px-3 py-2 rounded-md hover:bg-blue-600"
                    >
                      Visualizar
                    </Link>
                  </div>
                  <div>
                    <Link
                      to={`/app/Edit/${user.id}`}
                      className="bg-amber-300 me-1 text-white px-3 py-2 rounded-md hover:bg-amber-500"
                    >
                      Editar
                    </Link>
                  </div>
                  <div>
                    <Link
                      to={`/app/Users/${user.id}/edit`}
                      className="bg-red-300 text-white px-3 py-2 rounded-md hover:bg-red-500"
                    >
                      Apagar
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
