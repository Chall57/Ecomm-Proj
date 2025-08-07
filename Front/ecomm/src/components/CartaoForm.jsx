// src/components/CartaoForm.jsx
import { useState } from "react";

const CartaoForm = ({ onAdd }) => {
  const [cartao, setCartao] = useState({
    numero: "",
    nomeTitular: "",
    validade: "",
    preferencial: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCartao({ ...cartao, [name]: type === "checkbox" ? checked : value });
  };

  const handleAdd = () => {
    onAdd(cartao);
    setCartao({
      numero: "",
      nomeTitular: "",
      validade: "",
      preferencial: false,
    });
  };

  return (
    <div>
      <h4>Adicionar Cartão</h4>
      <input name="numero" value={cartao.numero} onChange={handleChange} placeholder="Número do Cartão" />
      <input name="nomeTitular" value={cartao.nomeTitular} onChange={handleChange} placeholder="Nome no Cartão" />
      <input name="validade" type="month" value={cartao.validade} onChange={handleChange} />
      <label>
        <input type="checkbox" name="preferencial" checked={cartao.preferencial} onChange={handleChange} />
        Preferencial
      </label>
      <button onClick={handleAdd}>Adicionar</button>
    </div>
  );
};

export default CartaoForm;
