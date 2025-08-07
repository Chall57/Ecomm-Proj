// src/pages/Cliente/ClienteList.jsx
import { useEffect, useState } from "react";
import clienteService from "../../services/clienteService";
import { Link } from "react-router-dom";

const ClienteList = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    clienteService
      .listarClientes()
      .then((res) => setClientes(res.data))
      .catch((err) => console.error("Erro ao buscar clientes", err));
  }, []);

  return (
    <div>
      <h2>Clientes</h2>
      <Link to="/clientes/novo">
        <button>Adicionar Cliente</button>
      </Link>
      <ul>
        {clientes.map((cliente) => (
          <li key={cliente.id}>
            <strong>{cliente.nome}</strong> - {cliente.email}
            <Link to={`/clientes/${cliente.id}`}>
              <button>Detalhes</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClienteList;
