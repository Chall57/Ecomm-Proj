// src/routes/Routes.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClienteList from "../pages/Cliente/ClienteList";
import ClienteForm from "../pages/Cliente/ClienteForm";
import ClienteDetails from "../pages/Cliente/ClienteDetails";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/clientes" element={<ClienteList />} />
        <Route path="/clientes/novo" element={<ClienteForm />} />
        <Route path="/clientes/editar/:id" element={<ClienteForm />} />
        <Route path="/clientes/:id" element={<ClienteDetails />} />
        <Route path="*" element={<p>404 - Página não encontrada</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
