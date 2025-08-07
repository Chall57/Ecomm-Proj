import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import clienteService from "../../services/clienteService";

const ClienteForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [cliente, setCliente] = useState({
    nome: "",
    email: "",
    telefone: "",
    cpf: "",
    enderecos: [],
    cartoes: [],
  });

  // Fetch para edição
  useEffect(() => {
    if (id) {
      clienteService.buscarCliente(id).then((res) => setCliente(res.data));
    }
  }, [id]);

  const handleChange = (e) => {
    setCliente({ ...cliente, [e.target.name]: e.target.value });
  };

  const handleEnderecoChange = (index, e) => {
    const updatedEnderecos = [...cliente.enderecos];
    updatedEnderecos[index][e.target.name] = e.target.value;
    setCliente({ ...cliente, enderecos: updatedEnderecos });
  };

  const handleCartaoChange = (index, e) => {
    const updatedCartoes = [...cliente.cartoes];
    updatedCartoes[index][e.target.name] = e.target.value;
    setCliente({ ...cliente, cartoes: updatedCartoes });
  };

  const adicionarEndereco = () => {
    setCliente({
      ...cliente,
      enderecos: [...cliente.enderecos, {
        titulo: "", rua: "", cidade: "", estado: "", cep: "", numero: ""
      }],
    });
  };

  const removerEndereco = (index) => {
    const enderecos = [...cliente.enderecos];
    enderecos.splice(index, 1);
    setCliente({ ...cliente, enderecos });
  };

  const adicionarCartao = () => {
    setCliente({
      ...cliente,
      cartoes: [...cliente.cartoes, {
        numero: "", nomeTitular: "", validade: "", cvv: ""
      }],
    });
  };

  const removerCartao = (index) => {
    const cartoes = [...cliente.cartoes];
    cartoes.splice(index, 1);
    setCliente({ ...cliente, cartoes });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await clienteService.atualizarCliente(id, cliente);
        alert("Cliente atualizado com sucesso!");
      } else {
        await clienteService.criarCliente(cliente);
        alert("Cliente criado com sucesso!");
      }
      navigate("/clientes");
    } catch (err) {
      console.error("Erro ao salvar cliente:", err);
    }
  };

  return (
    <div>
      <h2>{id ? "Editar Cliente" : "Novo Cliente"}</h2>
      <form onSubmit={handleSubmit}>
        <label>Nome:</label>
        <input
          type="text"
          name="nome"
          value={cliente.nome}
          onChange={handleChange}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={cliente.email}
          onChange={handleChange}
          required
        />

        <label>Telefone:</label>
        <input
          type="text"
          name="telefone"
          value={cliente.telefone}
          onChange={handleChange}
        />

        <label>CPF:</label>
        <input
          type="text"
          name="cpf"
          value={cliente.cpf}
          onChange={handleChange}
        />

        <hr />
        <h3>Endereços</h3>
        {cliente.enderecos.map((endereco, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <input
              type="text"
              name="titulo"
              placeholder="Título (ex: Casa, Trabalho)"
              value={endereco.titulo}
              onChange={(e) => handleEnderecoChange(index, e)}
            />
            <input
              type="text"
              name="rua"
              placeholder="Rua"
              value={endereco.rua}
              onChange={(e) => handleEnderecoChange(index, e)}
            />
            <input
              type="text"
              name="numero"
              placeholder="Número"
              value={endereco.numero}
              onChange={(e) => handleEnderecoChange(index, e)}
            />
            <input
              type="text"
              name="cidade"
              placeholder="Cidade"
              value={endereco.cidade}
              onChange={(e) => handleEnderecoChange(index, e)}
            />
            <input
              type="text"
              name="estado"
              placeholder="Estado"
              value={endereco.estado}
              onChange={(e) => handleEnderecoChange(index, e)}
            />
            <input
              type="text"
              name="cep"
              placeholder="CEP"
              value={endereco.cep}
              onChange={(e) => handleEnderecoChange(index, e)}
            />
            <button type="button" onClick={() => removerEndereco(index)}>
              Remover
            </button>
          </div>
        ))}
        <button type="button" onClick={adicionarEndereco}>
          + Adicionar Endereço
        </button>

        <hr />
        <h3>Cartões</h3>
        {cliente.cartoes.map((cartao, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <input
              type="text"
              name="numero"
              placeholder="Número do Cartão"
              value={cartao.numero}
              onChange={(e) => handleCartaoChange(index, e)}
            />
            <input
              type="text"
              name="nomeTitular"
              placeholder="Nome do Titular"
              value={cartao.nomeTitular}
              onChange={(e) => handleCartaoChange(index, e)}
            />
            <input
              type="text"
              name="validade"
              placeholder="Validade (MM/AA)"
              value={cartao.validade}
              onChange={(e) => handleCartaoChange(index, e)}
            />
            <input
              type="text"
              name="cvv"
              placeholder="CVV"
              value={cartao.cvv}
              onChange={(e) => handleCartaoChange(index, e)}
            />
            <button type="button" onClick={() => removerCartao(index)}>
              Remover
            </button>
          </div>
        ))}
        <button type="button" onClick={adicionarCartao}>
          + Adicionar Cartão
        </button>

        <hr />
        <button type="submit">{id ? "Atualizar" : "Cadastrar"}</button>
      </form>
    </div>
  );
};

export default ClienteForm;
