import axios from "axios";

const API_URL = "http://localhost:8080/clientes";

class ClienteService {
  getAllClientes() {
    return axios.get(API_URL);
  }

  getClienteById(id) {
    return axios.get(`${API_URL}/${id}`);
  }

  createCliente(cliente) {
    return axios.post(API_URL, cliente);
  }

  updateCliente(id, cliente) {
    return axios.put(`${API_URL}/${id}`, cliente);
  }

  deleteCliente(id) {
    return axios.delete(`${API_URL}/${id}`);
  }
}

export default new ClienteService();
