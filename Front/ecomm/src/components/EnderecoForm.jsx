// src/components/EnderecoForm.jsx
import { useState } from "react";

const EnderecoForm = ({ onAdd }) => {
  const [endereco, setEndereco] = useState({
    titulo: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
    cep: "",
  });

  const handleChange = (e) => {
    setEndereco({ ...endereco, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    onAdd(endereco);
    setEndereco({
      titulo: "",
      rua: "",
      numero: "",
      bairro: "",
      cidade: "",
      estado: "",
      cep: "",
    });
  };

  return (
    <div>
      <h4>Adicionar Endereço</h4>
      <input name="titulo" value={endereco.titulo} onChange={handleChange} placeholder="Título" />
      <input name="rua" value={endereco.rua} onChange={handleChange} placeholder="Rua" />
      <input name="numero" value={endereco.numero} onChange={handleChange} placeholder="Número" />
      <input name="bairro" value={endereco.bairro} onChange={handleChange} placeholder="Bairro" />
      <input name="cidade" value={endereco.cidade} onChange={handleChange} placeholder="Cidade" />
      <input name="estado" value={endereco.estado} onChange={handleChange} placeholder="Estado" />
      <input name="cep" value={endereco.cep} onChange={handleChange} placeholder="CEP" />
      <button onClick={handleAdd}>Adicionar</button>
    </div>
  );
};

export default EnderecoForm;
