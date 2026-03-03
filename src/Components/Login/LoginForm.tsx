import { useState } from "react";

const dataFields = [
  {
    label: "Nome",
    type: "text",
    name: "nome",
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

export const LoginForm = () => {
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
  };

  // onsubmit
  const sendMsg = (e) => {
    e.preventDefault();
    localStorage.setItem("@CEL:entrar", JSON.stringify(data));
    console.log(data);
  };

  return (
    <div className="flex flex-col gap-6 justify-center text-start max-w-5xl border border-amber-50">
      <h2 className="mx-auto">Formulário de Membro</h2>
      <form className="p-8" onSubmit={sendMsg}>
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
                    className="w-full"
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
                    className="w-full"
                    onChange={valorInput}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col">
              <label>Cargo:</label>
              <input
                type="text"
                name="cargo"
                placeholder="Digite o seu cargo"
                onChange={valorInput}
              />

              <label>Obs:</label>
              <textarea
                name="obs"
                placeholder="Digite o seu obs"
                cols={40}
                rows={5}
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
                onChange={valorInput}
              ></textarea>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="flex justify-between">
          <div className="flex justify-center">
            <button className="cursor-pointer" type="submit">
              Guardar Dados
            </button>
          </div>
          <div className="flex justify-center">
            <button className="cursor-pointer" type="submit">
              Emitir Carteira
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
