import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ClienteService from "../../services/ClienteService";

export default function ClienteForm() {
  const [cliente, setCliente] = useState({ nome: "", email: "", cpf: "" });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      ClienteService.getClienteById(id).then((res) => setCliente(res.data));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCliente((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      ClienteService.updateCliente(id, cliente).then(() => navigate("/clientes"));
    } else {
      ClienteService.createCliente(cliente).then(() => navigate("/clientes"));
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>{id ? "Editar" : "Cadastrar"} Cliente</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input name="nome" value={cliente.nome} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Email:
          <input name="email" value={cliente.email} onChange={handleChange} required />
        </label>
        <br />
        <label>
          CPF:
          <input name="cpf" value={cliente.cpf} onChange={handleChange} required />
        </label>
        <br />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}
