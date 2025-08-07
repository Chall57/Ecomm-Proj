import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ClienteService from "../../services/ClienteService";

export default function ClienteDetails() {
  const { id } = useParams();
  const [cliente, setCliente] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    ClienteService.getClienteById(id).then((res) => setCliente(res.data));
  }, [id]);

  if (!cliente) return <p>Carregando...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Detalhes do Cliente</h2>
      <p><strong>Nome:</strong> {cliente.nome}</p>
      <p><strong>Email:</strong> {cliente.email}</p>
      <p><strong>CPF:</strong> {cliente.cpf}</p>
      <button onClick={() => navigate("/clientes")}>⬅️ Voltar</button>
    </div>
  );
}
