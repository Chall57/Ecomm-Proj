import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClienteList from "../pages/Cliente/ClienteList";
import ClienteForm from "../pages/Cliente/ClienteForm";
import ClienteDetails from "../pages/Cliente/ClienteDetails";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/clientes" element={<ClienteList />} />
        <Route path="/clientes/novo" element={<ClienteForm />} />
        <Route path="/clientes/editar/:id" element={<ClienteForm />} />
        <Route path="/clientes/:id" element={<ClienteDetails />} />
      </Routes>
    </Router>
  );
}
