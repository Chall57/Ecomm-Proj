// src/pages/Cliente/ClienteDetails.jsx
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import clienteService from "../../services/clienteService";

const ClienteDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cliente, setCliente] = useState(null);

  useEffect(() => {
    clienteService
      .buscarCliente(id)
      .then((res) => setCliente(res.data))
      .catch((err) => console.error("Erro ao carregar cliente", err));
  }, [id]);

  const handleExcluir = async () => {
    try {
      await clienteService.deletarCliente(id);
      alert("Cliente excluído!");
      navigate("/clientes");
    } catch (err) {
      console.error("Erro ao excluir", err);
    }
  };

  if (!cliente) return <p>Carregando...</p>;

  return (
    <div>
      <h2>Detalhes do Cliente</h2>
      <p><strong>Nome:</strong> {cliente.nome}</p>
      <p><strong>Email:</strong> {cliente.email}</p>

      <h4>Endereços:</h4>
      <ul>
        {cliente.enderecos?.map((e, idx) => (
          <li key={idx}>{e.titulo} - {e.cidade}/{e.estado}</li>
        ))}
      </ul>

      <h4>Cartões:</h4>
      <ul>
        {cliente.cartoes?.map((c, idx) => (
          <li key={idx}>
            **** **** **** {c.numero?.slice(-4)} - {c.nomeTitular}
          </li>
        ))}
      </ul>

      <button onClick={() => navigate(`/clientes/editar/${id}`)}>Editar</button>
      <button onClick={handleExcluir}>Excluir</button>
    </div>
  );
};

export default ClienteDetails;
