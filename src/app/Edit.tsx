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

export default function Edit() {
  // usar o id pra acessar o id da URL
  const { id } = useParams();
  // pra armazenar o usuário
  const [user, setUser] = useState<User | null>(null);
  // pra controles de erros
  const [error, setError] = useState<string | null>(null);

  const fetchEdit = async (id: string) => {
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
      // Buscar os dados da situação se o id estiver disponivel
      fetchEdit(id);
    }
  }, [id]);

  return (
    <div>
      <h1>EditAr</h1>
    </div>
  );
}
