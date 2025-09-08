import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClienteCadFormUI from "../components/ClienteCadFormUI"; 
import ClienteLogin from "../components/ClienteLogin";
import ClienteList from "../pages/Cliente/ClienteList";
import ClienteDetails from "../pages/Cliente/ClienteDetails";
import ClienteForm from "../pages/Cliente/ClienteForm";
import ClienteInfo from "../components/ClienteInfo";
import ClientePerfil from "../components/ClientePerfil";
import Navbar from "../components/Navbar";

function AppRoutes() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1 style={{ padding: "20px" }}>Bem-vindo ao Ecomm</h1>} />

        {/* Rotas de Cliente */}
        <Route path="/clientes" element={<ClienteList />} />
        <Route path="/clientes/:id" element={<ClienteDetails />} />
        <Route path="/clientes/novo" element={<ClienteForm />} />
        <Route path="/clientes/form" element={<ClienteCadFormUI />} />
        <Route path="/clientes/info" element={<ClienteInfo />} />

        {/* Nova rota de perfil */}
        <Route path="/perfil" element={<ClientePerfil />} />

        {/* Futuras rotas */}
        <Route path="/pedidos" element={<h2>📦 Tela de Pedidos (em construção)</h2>} />
        <Route path="/trocas" element={<h2>🔄 Tela de Trocas (em construção)</h2>} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
