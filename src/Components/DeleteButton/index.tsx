import instance from "../../services/api";

interface DeleteButtonProps {
  id: string;
  route: string;
  onSuccess: () => void;
  setError: (message: string | null) => void;
  setSuccess: (message: string | null) => void;
}

const DeleteButton = ({
  id,
  route,
  onSuccess,
  setError,
  setSuccess,
}: DeleteButtonProps) => {
  const handleDelete = async () => {
    // Exibir alerta de Confirmação
    const confirmDelete = window.confirm(
      "tem certeza que deseja excluir este registro",
    );

    if (!confirmDelete) return;

    setError(null);
    setSuccess(null);

    try {
      const response = await instance.delete(`/${route}/${id}`);

      setSuccess(response.data.mensagem || "Registro apagado com sucesso!");
      if (onSuccess) {
        onSuccess(message);
      }
    } catch (error: any) {
      setError(error.response?.data?.message || "Erro ao apagar o registro");
    }
  };
  return (
    <div>
      <button
        className="bg-red-500 text-white px-2 py-1 me-1 rounded-md"
        onClick={handleDelete}
      >
        Apagar
      </button>
    </div>
  );
};

export default DeleteButton;
