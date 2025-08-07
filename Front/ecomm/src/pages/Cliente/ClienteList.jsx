import { useEffect, useState } from "react";
import ClienteService from "../../services/ClienteService";
import { Link } from "react-router-dom";

export default function ClienteList() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    ClienteService.getAllClientes()
      .then((res) => setClientes(res.data))
      .catch((err) => console.error("Erro ao buscar clientes", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Clientes Cadastrados</h2>
      <Link to="/clientes/novo">➕ Adicionar Cliente</Link>
      <ul>
        {clientes.map((cliente) => (
          <li key={cliente.id}>
            {cliente.nome} ({cliente.email})
            <Link to={`/clientes/${cliente.id}`}> 🔍 Detalhes</Link>
            <Link to={`/clientes/editar/${cliente.id}`}> ✏️ Editar</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
