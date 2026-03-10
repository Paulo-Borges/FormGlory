import { useEffect, useState } from "react";
import instance from "../services/api";

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
    <div>
      <h1>Listar Usuários</h1>
      {/* Exibe mensagem de erro  */}
      {error && <p style={{ color: "#f00" }}>{error}</p>}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NOME</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
