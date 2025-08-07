// src/services/clienteService.js
import axios from "axios";

const API_URL = "http://localhost:8080/api/clientes"; // ajuste conforme sua API

const criarCliente = (cliente) => axios.post(API_URL, cliente);
const listarClientes = () => axios.get(API_URL);
const buscarCliente = (id) => axios.get(`${API_URL}/${id}`);
const atualizarCliente = (id, dados) => axios.put(`${API_URL}/${id}`, dados);
const deletarCliente = (id) => axios.delete(`${API_URL}/${id}`);

export default {
  criarCliente,
  listarClientes,
  buscarCliente,
  atualizarCliente,
  deletarCliente,
};
