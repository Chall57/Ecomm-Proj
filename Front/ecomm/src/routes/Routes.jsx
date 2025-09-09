import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Navbar
import Navbar from "../components/Navbar";

// Páginas principais
import HomePage from "../pages/HomePage";

// Páginas de Cliente
import ClienteCadFormUI from "../pages/Cliente/ClienteCadFormUI"; 
import ClienteLogin from "../pages/Cliente/ClienteLogin";
import ClienteList from "../pages/Cliente/ClienteList";
import ClienteDetails from "../pages/Cliente/ClienteDetails";
import ClienteForm from "../pages/Cliente/ClienteForm";
import ClienteInfo from "../pages/Cliente/ClienteInfo";
import ClientePerfil from "../pages/Cliente/ClientePerfil";
import ClientePedidos from "../pages/Cliente/ClientePedidos";
import ClienteTrocas from "../pages/Cliente/ClienteTrocas";

// Administração
import AdminHome from "../pages/AdminHome";

function AppRoutes() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* Rotas de Cliente */}
        <Route path="/clientes/form" element={<ClienteCadFormUI />} />
        <Route path="/clientes/info" element={<ClienteInfo />} />
        <Route path="/perfil" element={<ClientePerfil />} />
        <Route path="/login" element={<ClienteLogin />} />
        <Route path="/pedidos" element={<ClientePedidos />} />
        <Route path="/trocas" element={<ClienteTrocas />} />


        {/* Administração */}
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/admin/clientes" element={<ClienteList />} />
        <Route path="/admin/clientes/:id" element={<ClienteDetails />} />
        <Route path="/admin/clientes/novo" element={<ClienteForm />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
