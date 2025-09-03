import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClienteCadFormUI from "../components/ClienteCadFormUI"; 
import ClienteList from "../pages/Cliente/ClienteList";
import ClienteDetails from "../pages/Cliente/ClienteDetails";
import ClienteForm from "../pages/Cliente/ClienteForm";
import Navbar from "../components/Navbar";

function AppRoutes() {
  return (
    <Router>
      <Navbar /> {/* Navbar fixa em todas as páginas */}
      <Routes>
        {/* Página inicial */}
        <Route path="/" element={<h1 style={{ padding: "20px" }}>Bem-vindo ao Ecomm</h1>} />

        {/* Rotas de Cliente */}
        <Route path="/clientes" element={<ClienteList />} />
        <Route path="/clientes/:id" element={<ClienteDetails />} />
        <Route path="/clientes/novo" element={<ClienteForm />} />

        {/* 🚀 Rota para o formulário estilizado (UI de teste) */}
        <Route path="/clientes/form" element={<ClienteCadFormUI />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
