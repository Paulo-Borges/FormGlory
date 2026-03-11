import React, { useState } from "react";
// Importa a instância do axios configurada pra fazer requisição da API
import instance from "../../services/api";
import { Link } from "react-router-dom";

const dataFields = [
  {
    label: "Nome",
    type: "text",
    name: "name",
    placeholder: "Digite o seu nome",
  },
  {
    label: "Data de nasc",
    type: "number",
    name: "nascimento",
    placeholder: "Digite o seu nascimento",
  },
  {
    label: "Sexo",
    type: "text",
    name: "sexo",
    placeholder: "Digite o seu sexo",
  },
  {
    label: "RG",
    type: "number",
    name: "registro",
    placeholder: "Digite o seu registro",
  },
  {
    label: "CPF",
    type: "number",
    name: "cpf",
    placeholder: "Digite o seu cpf",
  },
  {
    label: "Endereço",
    type: "text",
    name: "endereco",
    placeholder: "Digite o seu endereco",
  },
  {
    label: "Bairro",
    type: "text",
    name: "bairro",
    placeholder: "Digite o seu bairro",
  },
  {
    label: "Cidade",
    type: "text",
    name: "cidade",
    placeholder: "Digite o seu cidade",
  },
  {
    label: "Estado",
    type: "text",
    name: "estado",
    placeholder: "Digite o seu estado",
  },
];

const datasFields = [
  {
    label: "CEP",
    type: "text",
    name: "cep",
    placeholder: "Digite o seu cep",
  },
  {
    label: "Telefone",
    type: "number",
    name: "telefone",
    placeholder: "Digite o seu telefone",
  },
  {
    label: "Celular",
    type: "number",
    name: "celular",
    placeholder: "Digite o seu celular",
  },
  {
    label: "Profissão",
    type: "text",
    name: "profissao",
    placeholder: "Digite o seu profissão",
  },
  {
    label: "Email",
    type: "email",
    name: "email",
    placeholder: "Digite o seu email",
  },
  {
    label: "Estado civil",
    type: "text",
    name: "civil",
    placeholder: "Digite o seu civil",
  },
  {
    label: "Nome do conjuge",
    type: "text",
    name: "conjuge",
    placeholder: "Digite o seu conjuge",
  },
  {
    label: "Data do batismo",
    type: "number",
    name: "batismo",
    placeholder: "Digite o seu batismo",
  },
  {
    label: "Local",
    type: "text",
    name: "local",
    placeholder: "Digite o seu local",
  },
];

export default function CreateUserData() {}

export const LoginForm = () => {
  // Estado pra controle de erros
  const [error, setError] = useState<string | null>(null);
  // Estado pra controle de Success
  const [success, setSuccess] = useState<string | null>(null);
  // Estado pra campo name
  const [name, setName] = useState<string>("");
  // Estado pra campo email
  const [email, setEmail] = useState<string>("");

  const [data, setData] = useState({
    nome: "",
    nascimento: "",
    sexo: "",
    registro: "",
    cpf: "",
    endereco: "",
    bairro: "",
    cidade: "",
    estado: "",
    cep: "",
    telefone: "",
    celular: "",
    profissao: "",
    email: "",
    civil: "",
    conjuge: "",
    batismo: "",
    local: "",
    cargo: "",
    obs: "",
    assinatura: "",
  });

  // onChange
  const valorInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    // setName(e.target.value);
    // setEmail(e.target.value);
  };

  // onsubmit
  // const sendMsg = (e) => {
  //   e.preventDefault();
  //   localStorage.setItem("@CEL:entrar", JSON.stringify(data));
  //   console.log(data);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Limpa o erro anterior
    setError(null);
    // Limpa o erro anterior
    setSuccess(null);

    try {
      // Fazer a requisição à API e enviar os dados
      const response = await instance.post("/users", data);
      // exibir mensagem de Sucesso
      setSuccess(response.data.mensage);
      // Limpar o formulário
      setData("");
    } catch (error: any) {
      // exibir mensagem de Error
      setError(error.response?.data.mensage);
    }
  };

  return (
    <div className="flex flex-col gap-6 justify-center text-start max-w-5xl border border-amber-50">
      <h2 className="mx-auto">Formulário de Membro</h2>
      <form className="p-8" onSubmit={handleSubmit}>
        <div>
          <div className="flex gap-12 ">
            <div>
              {dataFields.map((field) => (
                <div key={field.name}>
                  <label>{field.label}:</label>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    className="w-full border border-gray-300 p-3 text-left"
                    onChange={valorInput}
                  />
                </div>
              ))}
            </div>
            <div>
              {datasFields.map((field) => (
                <div key={field.name}>
                  <label>{field.label}:</label>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    className="w-full border border-gray-300 p-3 text-left"
                    onChange={valorInput}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-2">
            <div className="flex flex-col">
              <label>Cargo:</label>
              <input
                type="text"
                name="cargo"
                placeholder="Digite o seu cargo"
                className="w-full border border-gray-300 p-3 text-left"
                onChange={valorInput}
              />

              <label>Obs:</label>
              <textarea
                name="obs"
                placeholder="Digite o seu obs"
                cols={40}
                rows={5}
                className="w-full border border-gray-300 p-3 text-left"
                onChange={valorInput}
              ></textarea>
            </div>
            <div className="flex flex-col">
              <label>Assinatura:</label>
              <textarea
                name="assinatura"
                placeholder="Digite a sua assinatura"
                cols={40}
                rows={7}
                className="w-full border border-gray-300 p-3 text-left"
                onChange={valorInput}
              ></textarea>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="flex justify-between">
          <div className="flex justify-center">
            <Link
              to="../../app/Users"
              className="cursor-pointer bg-transparent hover:bg-green-200 rounded hover:p-2"
            >
              Mostrar Dados
            </Link>
            {error && <p style={{ color: "#f00" }}>{error}</p>}
            {success && <p style={{ color: "#086" }}>{success}</p>}
          </div>
          <div className="flex justify-center">
            <button
              className="cursor-pointer bg-transparent hover:bg-green-200 rounded hover:p-2"
              type="submit"
            >
              Emitir Carteira
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
